import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const getTypedIcon = name => {
  return Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;
};

// component or the header
const Header = (props, {navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <View style={{flexDirection: 'row', alignItems: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('index');
          }}>
          <Ionicons
            style={styles.IconView}
            name={getTypedIcon('arrow-round-back')}
            size={20}
            color={'white'}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#1D252E',
    alignItems: 'flex-start',
    height: 50,
    paddingTop: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    elevation: 2,
  },
  IconView: {
    marginStart: 15,
  },
  singleIcon: {
    marginEnd: 10,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
});

export default Header;
