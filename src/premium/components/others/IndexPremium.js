import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  AsyncStorage,
} from 'react-native';
import {Divider} from 'react-native-elements';
import RNRestart from 'react-native-restart';
import axios from 'axios';

class Index extends Component {
  deactivate = async () => {
    try {
      await AsyncStorage.multiRemove([
        'email',
        'secret',
        'first name',
        'last name',
      ]);
      alert('Subscription has been canceled, restart App');
    } catch (e) {
      console.log();
    }
  };

  render() {
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
          onPress={() => this.props.navigation.navigate('TwoOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/money-bag.png')}
              style={styles.image}
            />
            <Text style={styles.text}>2 ODDS DAILY</Text>
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
            <Text style={styles.text}>DAILY ACCUMULATOR</Text>
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
            <Text style={styles.text}>30 ODDS WEEKLY</Text>
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
            <Text style={styles.text}>LIVE MATCHES</Text>
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
            <Text style={styles.text}> HIGH STAKERS</Text>
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
        <TouchableOpacity onPress={this.deactivate}>
          <View style={styles.belowItems}>
            <Image
              source={require('../../../media/activate.png')}
              style={styles.image}
            />
            <Text style={styles.text}>DEACTIVATE SUBSCRIPTION</Text>
          </View>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#D6D8DC', height: 1}} />
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
