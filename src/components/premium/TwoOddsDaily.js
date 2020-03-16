import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TipDetail from '../TipDetail';
import axios from 'axios';
import Header from '../Header';

class TwoOddsDaily extends Component {
  state = {tips: []};

  UNSAFE_componentWillMount() {
    axios
      .get('https://rollovertips.herokuapp.com/two_odds')
      .then(response => this.setState({tips: response.data}));
  }

  // function to render the array of games in TipDetail
  renderTips() {
    const sorted = this.state.tips.sort((a, b) => (a.id > b.id ? 1 : -1));
    const reversed = sorted.reverse();
    return reversed.map(tip => <TipDetail key={tip.id} game={tip} />);
  }

  // render method for the class
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>{this.renderTips()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default TwoOddsDaily;
