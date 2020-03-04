import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FreeTip from './FreeTip';
import Index from './Index';
import TwoOddsDaily from './TwoOddsDaily';
import FiftyOddsWeekly from './FiftyOddsWeekly';
import Accumulator from './Accumulator';
import Faq from './Faq';

const APPNavigator = createStackNavigator({
  Home: {
    screen: Index,
    navigationOptions: {
      headerShown: false,
    },
  },
  freeTips: {
    screen: FreeTip,
    navigationOptions: {
      headerTitle: 'Free Tips',
      headerStatusBarHeight: 0,
    },
  },
  TwoOdds: {
    screen: TwoOddsDaily,
    navigationOptions: {
      headerTitle: 'Two Odds Daily',
      headerStatusBarHeight: 0,
    },
  },
  Accumulator: {
    screen: Accumulator,
    navigationOptions: {
      headerTitle: 'Accumulator',
      headerStatusBarHeight: 0,
    },
  },
  FiftyOdds: {
    screen: FiftyOddsWeekly,
    navigationOptions: {
      headerTitle: '50 Odds Weekly',
      headerStatusBarHeight: 0,
    },
  },
  Faq: {
    screen: Faq,
    navigationOptions: {
      headerTitle: 'FAQs',
      headerStatusBarHeight: 0,
    },
  },
});

export default createAppContainer(APPNavigator);
