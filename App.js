import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Platform, ScrollView} from 'react-native';
import Header from './src/components/Header';
import GameLists from './src/components/GameLists';
import Index from './src/components/Index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          //To set the background color in IOS Status Bar also
          style={{
            backgroundColor: '#2D3A4A',
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
        <ScrollView>
          <Index />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3A4A',
  },
});
