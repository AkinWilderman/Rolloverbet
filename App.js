import React from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import Header from './src/components/Header';
import GameLists from './src/components/GameLists';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        //To set the background color in IOS Status Bar also
        style={{
          backgroundColor: '#50FA7B',
          height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        }}>
        <StatusBar
          barStyle="light-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#00BCD4"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
      </View>
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
