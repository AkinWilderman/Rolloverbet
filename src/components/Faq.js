import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

class Faq extends Component {
  /*UNSAFE_componentWillMount() {

  }*/

  clickHandler = (title, message) => {
    Alert.alert('Alert is working', 'I am testing alert');
  };

  render() {
    return (
      <ScrollView>
        <View styles={styles.container}>
          <TouchableOpacity>
            <Text> Who are we</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Faq;
