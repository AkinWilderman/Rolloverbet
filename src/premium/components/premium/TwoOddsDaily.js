import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import TipDetail from '../others/TipDetailPremium';
import axios from 'axios';
import Header from '../others/Header';

class TwoOddsDaily extends Component {
  state = {tips: [], isLoading: true};

  GetData = () => {
    axios
      .get('https://rollovertips.herokuapp.com/two_odds')
      .then(response => this.setState({tips: response.data, isLoading: false}));
  };

  UNSAFE_componentWillMount() {
    this.GetData();
  }

  // function to render the array of games in TipDetail
  renderTips() {
    const sorted = this.state.tips.sort((a, b) => (a.id > b.id ? 1 : -1));
    const reversed = sorted.reverse();
    return reversed.map(tip => <TipDetail key={tip.id} game={tip} />);
  }

  // render method for the class
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityContainer}>
          {/*Code to show Activity Indicator*/}
          <ActivityIndicator size="large" color="#0000ff" />
          {/*Size can be large/ small*/}
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>{this.renderTips()}</View>
        </ScrollView>
      );
    }
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
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TwoOddsDaily;
