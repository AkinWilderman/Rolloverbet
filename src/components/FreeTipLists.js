import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import FreeTipDetail from './FreeTipDetail';
import axios from 'axios';
import Header from './Header';

class FreeTipLists extends Component {
  state = {freetips: []};

  UNSAFE_componentWillMount() {
    axios
      .get('https://c6ba9c42.ngrok.io')
      .then(response => this.setState({freetips: response.data}));
  }

  // function to render the array of games in FreeTipDetail
  renderFreeTips() {
    const reversed = this.state.freetips.reverse();
    return reversed.map(freetip => (
      <FreeTipDetail key={freetip.id} game={freetip} />
    ));
  }

  // render method for the class
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        <View style={styles.warningView}>
          <Text style={styles.warningText}>
            Bet Responsibly, don't bet with your last money. Sport betting is a
            business, not a get rich quick scheme. Invest with us!
          </Text>
        </View>
        <View>{this.renderFreeTips()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  warningText: {
    color: '#2D3A4A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  warningView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default FreeTipLists;
