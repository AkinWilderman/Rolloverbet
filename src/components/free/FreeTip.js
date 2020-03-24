import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import TipDetail from '../others/TipDetail';
import axios from 'axios';
import {AdMobRewarded, PublisherBanner} from 'expo-ads-admob';
import Index from '../others/Index';

class Tip extends Component {
  state = {tips: [], isLoading: true};

  GetData = () => {
    axios
      .get('https://rollovertips.herokuapp.com/')
      .then(response => this.setState({tips: response.data, isLoading: false}));
  };

  UNSAFE_componentWillMount() {
    this.GetData();
  }

  Adclose = () => {
    return <Index />;
  };

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
      this.Adclose();
      console.log('closed');
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

  // refresh method
  onRefresh() {
    //Call the Service to get the latest data
    this.GetData();
  }

  // render method for the class
  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      this.ShowAdRewarded();
    }
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
            <View style={styles.warningView}>
              <Text style={styles.warningText}>
                Bet Responsibly. Become a premium member and make lots of money!
              </Text>
            </View>
            <View>{this.renderTips()}</View>
          </ScrollView>
          <View style={styles.IndexAD}>
            <PublisherBanner
              bannerSize="largeBanner"
              // ca-app-pub-3763838117475589/4846557176 - Real ads ID
              // ca-app-pub-3940256099942544/6300978111 - Test ID
              adUnitID="ca-app-pub-3763838117475589/4846557176"
              servePersonalizedAds={true}
              onDidFailToReceiveAdWithError={this.bannerError}
            />
          </View>
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
