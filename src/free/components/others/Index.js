import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {AdMobInterstitial, PublisherBanner} from 'expo-ads-admob';
import {Divider} from 'react-native-elements';
import axios from 'axios';

function Separator() {
  return <View style={styles.separator} />;
}

// ca-app-pub-3763838117475589/9514510636 -  Real Ad ID
// ca-app-pub-3940256099942544/1033173712 - Test ID
class Index extends Component {
  /*state = {subscriptions: []};

  getSubscriptions = () => {
    const seckey = 'Bearer '.concat(
      'sk_test_a78ac708871f7b28952f80f783ed2f38c7a2fbfc',
    );
    axios
      .get('https://api.paystack.co/subscription', {
        headers: {
          Authorization: seckey,
        },
      })
      .then(response => this.setState({subscriptions: response.data.data}));
  };

  /!*componentDidMount() {
    this.getSubscriptions();
  }*!/

  UNSAFE_componentWillMount() {
    this.getSubscriptions();
  }*/

  render() {
    AdMobInterstitial.setAdUnitID(
      'ca-app-pub-3940256099942544/1033173712',
    ).then(r =>
      AdMobInterstitial.requestAdAsync().then(() =>
        AdMobInterstitial.showAdAsync(),
      ),
    );
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('freeTips')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/freetips.png')}
              style={styles.image}
            />
            <Text style={styles.text}>FREE TIPS</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Activate')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/activate.png')}
              style={styles.image}
            />
            <Text style={styles.text}>ACTIVATE PREMIUM</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TwoOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/money-bag.png')}
              style={styles.image}
            />
            <Text style={styles.text}>2 ODDS DAILY (premium)</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Accumulator')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/money.png')}
              style={styles.image}
            />
            <Text style={styles.text}>DAILY ACCUMULATOR (premium)</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FiftyOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/money-bag-colored.png')}
              style={styles.image}
            />
            <Text style={styles.text}>70 ODDS WEEKLY (premium)</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FiftyOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/coin.png')}
              style={styles.image}
            />
            <Text style={styles.text}>LIVE MATCHES (free)</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FiftyOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/accumulator.png')}
              style={styles.image}
            />
            <Text style={styles.text}> HIGH STAKERS (premium)</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Subscribe')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/subscribe.png')}
              style={styles.image}
            />
            <Text style={styles.text}>SUBSCRIBE</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Payment')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/customer-service.png')}
              style={styles.image}
            />
            <Text style={styles.text}>SUPPORT</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Faq')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/faq.png')}
              style={styles.image}
            />
            <Text style={styles.text}>F.A.Q</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
        <View style={styles.IndexAD}>
          <PublisherBanner
            bannerSize="largeBanner"
            // ca-app-pub-3763838117475589/7682246729 - Real ads ID
            // ca-app-pub-3940256099942544/6300978111 - Test ID
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            servePersonalizedAds={true}
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: '#D6D8DC',
    borderBottomWidth: 0.5,
  },
  below: {
    width: 'auto',
    flex: 7,
  },
  belowItems: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '3%',
  },
  IndexAD: {
    alignItems: 'center',
    margin: '5%',
  },
  IndexAdMid: {
    alignItems: 'center',
    marginTop: '1%',
  },
  text: {
    color: '#2D3A4A',
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    fontWeight: 'bold',
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Index;
