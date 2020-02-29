import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FreeTipLists from './FreeTipLists';
import Index from './Index';
import Header from './Header';

const APPNavigator = createStackNavigator({
  index: {
    screen: Index,
    navigationOptions: {
      headerShown: false,
    },
  },
  freeTips: {
    screen: FreeTipLists,
    navigationOptions: {
      header: () => <Header headerText={'free tips'} />,
    },
  },
});

export default createAppContainer(APPNavigator);
