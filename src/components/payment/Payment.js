import Rave from 'react-native-rave';
import React, {Component} from 'react';

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
      <Rave
        amount="8.99"
        country="NG"
        currency="USD"
        paymentplan="4864"
        paymentOption="card,account"
        email="test@mail.com"
        firstname="Akinkunle"
        lastname="Akingbala"
        publickey="FLWPUBK_TEST-7a15f68c347706fe62c83873afe3625c-X"
        encryptionkey="FLWSECK_TESTa2f2229a797a"
        meta={[
          {metaname: 'color', metavalue: 'red'},
          {metaname: 'storelocation', metavalue: 'Lagos'},
        ]}
        onSuccess={res => this.onSuccess(res)}
        onFailure={e => this.onFailure(e)}
        onClose={e => this.onClose(e)}
      />
    );
  }
}

export default Payment;
