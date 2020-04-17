import React, {Component} from 'react';
import {View, Text, Alert, AsyncStorage, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import Index from '../others/Index';

export default class Activate extends Component {
  state = {
    email: '',
    secretCode: '',
    firstname: '',
    lastname: '',
  };

  saveUser = async () => {
    if (this.state.email) {
      if (this.state.secretCode) {
        if (this.state.firstname) {
          if (this.state.lastname) {
            try {
              await AsyncStorage.multiSet([
                ['email', this.state.email],
                ['secret', this.state.secretCode],
                ['first name', this.state.firstname],
                ['last name', this.state.lastname],
              ]);
              this.setState({
                email: '',
                secretCode: '',
                firstname: '',
                lastname: '',
              });
              alert(
                'Details saved. Please restart the App to enable your subscription',
              );
            } catch (e) {
              alert('error activating user');
            }
          } else {
            alert('Enter you secret code, first name and last name');
          }
        } else {
          alert('Enter your last name');
        }
      } else {
        alert('Enter your first name and last name');
      }
    } else {
      alert('Enter you secret code, first name and last name');
    }
  };

  getUser = async () => {
    try {
      let user = await AsyncStorage.multiGet([
        'email',
        'secret',
        'first name',
        'last name',
      ]);
      console.log(user);
      const email = user[0][1];
      console.log(email);
    } catch (e) {
      alert('error fetching user');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextField
            label="First Name"
            style={styles.textfield}
            placeholder="First Name"
            placeholderTextColor="black"
            textColor="#000000"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.firstname}
            onChangeText={firstname => this.setState({firstname})}
          />
          <TextField
            label="Last Name"
            style={styles.textfield}
            placeholder="Last Name"
            placeholderTextColor="black"
            textColor="#000000"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.lastname}
            onChangeText={lastname => this.setState({lastname})}
          />
          <TextField
            label="Email"
            style={styles.textfield}
            placeholder="foo@example.com"
            placeholderTextColor="black"
            textColor="#000000"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          <TextField
            label="Secret Code"
            style={styles.textfield}
            placeholder="6 digit code"
            placeholderTextColor="black"
            baseColor="rgba(0,0,0,1)"
            textColor="#000000"
            returnKeyType="go"
            keyboardType="numeric"
            secureTextEntry
            value={this.state.secretCode}
            onChangeText={secretCode => this.setState({secretCode})}
          />
          <View>
            <Button
              title="Activate"
              buttonStyle={styles.button}
              onPress={this.saveUser}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    width: '80%',
    marginTop: '20%',
  },
  button: {
    width: '40%',
    alignSelf: 'center',
  },
});
