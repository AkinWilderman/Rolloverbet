import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import TipDetail from '../TipDetail';
import axios from 'axios';
import {AdMobInterstitial, AdMobRewarded} from 'expo-ads-admob';
import Index from '../Index';

class Tip extends Component {
  /*_openRewarded = async () => {
    try {
      this.setState({disableRewardedBtn: true});
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({disableRewardedBtn: false});
    }
  };*/

  state = {tips: []};

  UNSAFE_componentWillMount() {
    axios
      .get('https://rollovertips.herokuapp.com/')
      .then(response => this.setState({tips: response.data}));
  }

  returnIndex() {
    return <Index />;
  }

  componentDidMount() {
    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () =>
      console.log('Rewarded'),
    );
    AdMobRewarded.addEventListener('rewardedVideoDidLoad', () =>
      console.log('VideoLoaded'),
    );
    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () =>
      console.log('FailedToLoad'),
    );
    AdMobRewarded.addEventListener('rewardedVideoDidOpen', () =>
      console.log('Opened'),
    );
    AdMobRewarded.addEventListener('rewardedVideoDidClose', () => {
      return () => this.props.navigation.navigate('Homee');
    });
    AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication', () => {
      return () => this.props.navigation.navigate('Home');
    });
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
  }

  // function to render the array of games in TipDetail
  renderTips() {
    const sorted = this.state.tips.sort((a, b) => (a.id > b.id ? 1 : -1));
    const reversed = sorted.reverse();
    return reversed.map(tip => <TipDetail key={tip.id} game={tip} />);
  }
  // AdMobRewarded
  // ca-app-pub-3763838117475589/3073752020 -  Real Ads Id
  // ca-app-pub-3940256099942544/5224354917 - Google test Id
  ShowAdRewarded = () => {
    AdMobRewarded.setAdUnitID('ca-app-pub-3763838117475589/3073752020').then(
      r =>
        AdMobRewarded.requestAdAsync().then(() => AdMobRewarded.showAdAsync()),
    );
  };
  // render method for the class
  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      this.ShowAdRewarded();
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.warningView}>
          <Text style={styles.warningText}>
            Bet Responsibly. Sport betting is a business. Become a premium
            member and make money with us!
          </Text>
        </View>
        <View>{this.renderTips()}</View>
      </ScrollView>
    );
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
});

export default Tip;
