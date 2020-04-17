import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Monthly extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://paystack.com/pay/rollovertips_monthly_test'}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default Monthly;
