import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Header from './Header';

function Separator() {
  return <View style={styles.separator} />;
}

class Index extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('freeTips')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/freetips.png')}
              style={styles.image}
            />
            <Text style={styles.text}>FREE TIPS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TwoOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/money-bag.png')}
              style={styles.image}
            />
            <Text style={styles.text}>2 ODDS DAILY (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Accumulator')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/money.png')}
              style={styles.image}
            />
            <Text style={styles.text}>DAILY ACCUMULATOR (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FiftyOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/money-bag-colored.png')}
              style={styles.image}
            />
            <Text style={styles.text}>70 ODDS WEEKLY (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FiftyOdds')}>
          <View style={styles.belowItems}>
            <Image source={require('../media/coin.png')} style={styles.image} />
            <Text style={styles.text}>LIVE MATCHES (free)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FiftyOdds')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/accumulator.png')}
              style={styles.image}
            />
            <Text style={styles.text}> HIGH STAKERS (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PaymentMethod')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/subscribe.png')}
              style={styles.image}
            />
            <Text style={styles.text}>SUBSCRIBE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PaymentMethod')}>
          <View style={styles.belowItems}>
            <Image
              source={require('../media/customer-service.png')}
              style={styles.image}
            />
            <Text style={styles.text}>SUPPORT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Faq')}>
          <View style={styles.belowItems}>
            <Image source={require('../media/faq.png')} style={styles.image} />
            <Text style={styles.text}>F.A.Q</Text>
          </View>
        </TouchableOpacity>
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
    marginTop: '2%',
    padding: '2%',
  },
  text: {
    color: '#2D3A4A',
    marginLeft: 15,
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
