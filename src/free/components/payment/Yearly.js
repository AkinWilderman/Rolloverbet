import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Yearly extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://paystack.com/pay/eri45hfqpv'}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default Yearly;
