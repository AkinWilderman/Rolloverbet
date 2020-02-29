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
      <View style={styles.below}>
        <Header headerText={'Rolloverbet Predictions'} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('freeTips')}>
          <View style={styles.belowItems}>
            <Image source={require('../media/GOtv.png')} style={styles.image} />
            <Text style={styles.text}>FREE TIPS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeliveryAddress')}>
          <View style={styles.belowItems}>
            <Text style={styles.text}>2 ODDS DAILY (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Messages')}>
          <View style={styles.belowItems}>
            <Text style={styles.text}>ACCUMULATION (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('RecentOrders')}>
          <View style={styles.belowItems}>
            <Text style={styles.text}>FIFTY ODDS WEEKLY (premium)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PaymentMethod')}>
          <View style={styles.belowItems}>
            <Text style={styles.text}>HELP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Help')}>
          <View style={styles.belowItems}>
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
    marginLeft: 30,
    fontSize: 16,
    flex: 1,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default Index;
