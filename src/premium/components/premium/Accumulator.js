import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TipDetail from '../others/TipDetailPremium';
import axios from 'axios';

class Accumulator extends Component {
  /*state = {tips: []};

  UNSAFE_componentWillMount() {
    axios
      .get('https://5e521449.ngrok.io')
      .then(response => this.setState({tips: response.data}));
  }

  // function to render the array of games in TipDetail
  renderTips() {
    const reversed = this.state.tips.reverse();
    return reversed.map(tip => (
      <TipDetail key={tip.id} game={tip} />
    ));
  }*/

  // render method for the class
  render() {
    return (
      <ScrollView>
        <View style={styles.warningView}>
          <Text style={styles.warningText}>
            Bet Responsibly, don't bet with your last money. Sport betting is a
            business, not a get rich quick scheme. Invest with us!
          </Text>
        </View>
        {/*<View>{this.renderTips()}</View>*/}
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

export default Accumulator;
