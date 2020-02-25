import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <View>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#2D3A4A',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    paddingTop: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  IconView: {
    flexDirection: 'row',
    marginEnd: 10,
  },
  singleIcon: {
    marginEnd: 10,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    marginStart: '3%',
    marginEnd: '3%',
  },
});

export default Header;
