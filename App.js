import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import GameLists from './src/components/GameLists';

export default function App() {
  return (
    <View style={styles.container}>
      <Header headerText={'Rolloverbet Predictions'} />
      <GameLists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3A4A',
  },
});
