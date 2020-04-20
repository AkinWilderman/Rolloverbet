import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FreeTip from '../free/FreeTip';
import Index from './Index';
import Faq from '../support/Faq';
import Daily from '../payment/Daily';
import Support from '../support/Support';
import Weekly from '../payment/Weekly';
import Monthly from '../payment/Monthly';
import Subscribe from '../payment/Subscribe';
import Activate from '../premium/Activate';

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
  Faq: {
    screen: Faq,
    navigationOptions: {
      headerTitle: 'FAQs',
      headerStatusBarHeight: 0,
    },
  },
  Daily: {
    screen: Daily,
    navigationOptions: {
      headerTitle: 'Daily Subscription',
      headerStatusBarHeight: 0,
    },
  },
  Weekly: {
    screen: Weekly,
    navigationOptions: {
      headerTitle: 'Weekly Subscription',
      headerStatusBarHeight: 0,
    },
  },
  Monthly: {
    screen: Monthly,
    navigationOptions: {
      headerTitle: 'Monthly Subscription',
      headerStatusBarHeight: 0,
    },
  },
  Subscribe: {
    screen: Subscribe,
    navigationOptions: {
      headerTitle: 'Subscribe',
      headerStatusBarHeight: 0,
    },
  },
  Activate: {
    screen: Activate,
    navigationOptions: {
      headerTitle: 'Activate Subscription',
      headerStatusBarHeight: 0,
    },
  },
  Support: {
    screen: Support,
    navigationOptions: {
      headerTitle: 'Support',
      headerStatusBarHeight: 0,
    },
  },
});

export default createAppContainer(APPNavigator);
