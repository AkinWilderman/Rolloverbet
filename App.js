import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  AsyncStorage,
} from 'react-native';
import StackNavigator from './src/free/components/others/Navigator';
import StackPremiumNavigator from './src/premium/components/others/NavigatorPremium';
import axios from 'axios';

export default class App extends Component {
  // Set state for subscriptions and user
  constructor() {
    super();
    this.state = {subscriptions: [], data: ''};
  }

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
