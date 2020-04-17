import React, {Component} from 'react';
import axios from 'axios';
import {PricingCard} from 'react-native-elements';
import {ScrollView} from 'react-native';

export default class Subscribe extends Component {
  state = {isSubscriber: false};

  render() {
    return (
      <ScrollView>
        <PricingCard
          color="#4f9deb"
          title="Daily Plan"
          price="$1.99"
          info={['24 hours plan', 'Charged only once', 'No Ads']}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Daily')}
        />

        <PricingCard
          color="#4f9deb"
          title="Weekly"
          price="$8.99"
          info={[
            'Save $5',
            '36% discount',
            '7 Days Plan',
            'Charged only once',
            'No Ads',
          ]}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Weekly')}
        />

        <PricingCard
          color="#4f9deb"
          title="Monthly"
          price="$35.99"
          info={[
            'Save $23.74',
            ' 40% discount',
            '7 Days Plan',
            'Charged only once',
            'No Ads',
          ]}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Monthly')}
        />
      </ScrollView>
    );
  }
}

function _checkSubscription() {
  axios.get('https');
}
