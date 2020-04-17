import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  AsyncStorage,
} from 'react-native';
import StackNavigator from './src/free/components/others/Navigator';
import axios from 'axios';

export default class App extends Component {
  // Set state for subscriptions and user
  state = {subscriptions: [], data: []};

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
      await AsyncStorage.multiGet([
        'email',
        'secret',
        'first name',
        'last name',
      ]).then(value => this.setState({data: value}));
    } catch (e) {
      alert('error fetching user');
    }
  };

  UNSAFE_componentWillMount() {
    this.getUser();
    this.getSubscriptions();
  }

  // Check if user is subsrcibed and render appropriate Navigator Component
  checkSubscription() {
    const subscriptions = this.state.subscriptions;
    const userData = this.state.data;
  }

  render() {
    let sub = this.state.subscriptions;
    console.log(sub);
    console.log(this.state.data);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
