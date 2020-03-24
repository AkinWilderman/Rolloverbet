import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onSuccess(data) {
    console.log(data);
  }

  onFailure(data) {
    console.log(data);
  }

  onClose(data) {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://flutterwave.com/pay/59bjdwockwqo'}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default Payment;
