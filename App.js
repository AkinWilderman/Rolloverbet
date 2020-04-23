import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  AsyncStorage,
  Vibration,
} from 'react-native';
import StackNavigator from './src/free/components/others/Navigator';
import StackPremiumNavigator from './src/premium/components/others/NavigatorPremium';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class App extends Component {
  // Set state for subscriptions and user
  constructor() {
    super();
    this.state = {
      subscriptions: [],
      data: '',
      expoPushToken: '',
      notification: {},
    };
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const {status: existingStatus} = await Permissions.getAsync(
        Permissions.NOTIFICATIONS,
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      let token = await 'Notifications.getExpoPushTokenAsync()';
      console.log(token);
      this.setState({expoPushToken: token});
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  // Get subscription data from Paystack server
  getSubscriptions = () => {
    const seckey = 'Bearer '.concat(
      'sk_test_a78ac708871f7b28952f80f783ed2f38c7a2fbfc',
    );
    axios
      .get('https://api.paystack.co/subscription', {
        headers: {
          Authorization: seckey,
        },
      })
      .then(response => this.setState({subscriptions: response.data.data}));
  };

  // Get the stored user from AsyncStorage
  getUser = async () => {
    try {
      /*await AsyncStorage.multiGet([
        'email',
        'secret',
        'first name',
        'last name',
      ]*/
      await AsyncStorage.getItem('email').then(value =>
        this.setState({data: value}),
      );
    } catch (e) {
      alert('error fetching user');
    }
  };

  UNSAFE_componentWillMount() {
    this.getUser();
    this.getSubscriptions();
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification,
    );
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({notification: notification});
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: {data: 'goes here'},
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    const subs = this.state.subscriptions;
    const data = this.state.data;
    const admin = 'akinkunledavid9@gmail.com';

    // filter activae subscriptons
    const active = subs.filter(function(sub) {
      return sub.status === 'active';
    });

    // find the subscriber by email
    const subscribed = active.find(function(sub) {
      return sub.customer.email === data;
    });

    console.log(active);
    console.log(data);
    console.log(subscribed);

    if (subscribed !== undefined || data === admin) {
      return (
        <View style={styles.container}>
          <View
            //To set the background color in IOS Status Bar also
            style={{
              backgroundColor: '#2D3A4A',
              height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
            }}>
            <StatusBar
              barStyle="light-content"
              // dark-content, light-content and default
              hidden={false}
              //To hide statusBar
              backgroundColor="#00BCD4"
              //Background color of statusBar
              translucent={false}
              //allowing light, but not detailed shapes
              networkActivityIndicatorVisible={true}
            />
          </View>
          <StackPremiumNavigator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View
            //To set the background color in IOS Status Bar also
            style={{
              backgroundColor: '#2D3A4A',
              height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
            }}>
            <StatusBar
              barStyle="light-content"
              // dark-content, light-content and default
              hidden={false}
              //To hide statusBar
              backgroundColor="#00BCD4"
              //Background color of statusBar
              translucent={false}
              //allowing light, but not detailed shapes
              networkActivityIndicatorVisible={true}
            />
          </View>
          <StackNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
