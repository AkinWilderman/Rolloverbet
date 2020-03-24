import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FreeTip from '../free/FreeTip';
import Index from './Index';
import TwoOddsDaily from '../premium/TwoOddsDaily';
import ThirtyOddsWeekly from '../premium/ThirtyOddsWeekly';
import Accumulator from '../premium/Accumulator';
import Faq from '../support/Faq';
import Payment from '../payment/Payment';

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
  ThirtyOdds: {
    screen: ThirtyOddsWeekly,
    navigationOptions: {
      headerTitle: '30 Odds Weekly',
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
  Payment: {
    screen: Payment,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(APPNavigator);
