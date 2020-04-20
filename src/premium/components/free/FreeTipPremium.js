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

class Tip extends Component {
  state = {tips: [], isLoading: true};

  GetData = () => {
    axios
      .get('https://rollovertips.herokuapp.com/')
      .then(response => this.setState({tips: response.data, isLoading: false}));
  };

  componentDidMount() {
    this.GetData();
  }

  // function to render the array of games in TipDetail
  renderTips() {
    const sorted = this.state.tips.sort((a, b) => (a.id > b.id ? 1 : -1));
    const reversed = sorted.reverse();
    return reversed.map(tip => <TipDetail key={tip.id} game={tip} />);
  }

  // refresh method
  onRefresh() {
    //Call the Service to get the latest data
    this.GetData();
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
        <View style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={this.state.isLoading}
                onRefresh={this.onRefresh.bind(this)}
              />
            }>
            <View>{this.renderTips()}</View>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  IndexAD: {
    alignItems: 'center',
    margin: '3%',
  },
});

export default Tip;
