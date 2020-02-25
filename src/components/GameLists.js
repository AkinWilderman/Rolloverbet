import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GameView from './GameView';
import axios from 'axios';

class GameLists extends Component {
  state = {freetips: []};

  UNSAFE_componentWillMount() {
    axios
      .get('https://b0ac0399.ngrok.io')
      .then(response => this.setState({freetips: response.data}));
  }

  // funtion to render the array of games in GameView
  renderFreeTips() {
    const reversed = this.state.freetips.reverse();
    return reversed.map(freetip => (
      <GameView key={freetip.id} game={freetip} />
    ));
  }

  // render method for the class
  render() {
    console.log(this.state);
    return (
      <View>
        <View style={styles.warningView}>
          <Text style={styles.warningText}>
            Bet Responsibly, don't bet with your last money. Sport betting is a
            business, not a get rich quick scheme. Invest with us!
          </Text>
        </View>
        <View>{this.renderFreeTips()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warningText: {
    color: 'white',
    fontSize: 20,
  },
  warningView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default GameLists;
