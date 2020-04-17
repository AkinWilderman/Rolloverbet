import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Weekly extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://paystack.com/pay/rollovertips_weekly_test'}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default Weekly;
