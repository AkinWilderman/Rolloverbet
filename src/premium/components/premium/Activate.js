import React, {Component} from 'react';
import {View, Text, Alert, AsyncStorage, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';

export default class Activate extends Component {
  state = {
    email: '',
    secretCode: '',
    firstname: '',
    lastname: '',
  };

  async saveUser() {
    try {
      await AsyncStorage.multiSet([
        ['email', this.state.email],
        ['secret', this.state.secretCode],
        ['first name', this.state.firstname],
        ['last name', this.state.lastname],
      ]);
    } catch (e) {
      alert('error acting user');
    }
  }

  getUser = async () => {
    try {
      let user = await AsyncStorage.multiGet([
        'email',
        'secret',
        'first name',
        'last name',
      ]);
    } catch (e) {
      alert('error fetching user');
    }
  };

  render() {
    console.log(this.getUser());
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
              onPressIn={this.saveUser()}
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
