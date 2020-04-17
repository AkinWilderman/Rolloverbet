import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Daily extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://paystack.com/pay/rollovertips_daily_test'}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default Daily;
