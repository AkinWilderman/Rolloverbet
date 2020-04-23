import React, {Component} from 'react';
import axios from 'axios';
import {PricingCard} from 'react-native-elements';
import {ScrollView} from 'react-native';

export default class Subscribe extends Component {
  render() {
    return (
      <ScrollView>
        <PricingCard
          color="#4f9deb"
          title="One Day"
          price="$1.99"
          info={['24 hours plan', 'Charged Once', 'No Ads']}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Daily')}
        />

        <PricingCard
          color="#4f9deb"
          title="One Week"
          price="$8.99"
          info={[
            'Save $5',
            '36% Discount',
            '7 Days Plan',
            'Charged Once',
            'No Ads',
          ]}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Weekly')}
        />

        <PricingCard
          color="#4f9deb"
          title="One Month"
          price="$35.99"
          info={[
            'Save $23.74',
            '40% Discount',
            '1 Month Plan',
            'Charged Once',
            'No Ads',
          ]}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Monthly')}
        />
        <PricingCard
          color="#4f9deb"
          title="One Year"
          price="$215.99"
          info={[
            'Save $215',
            '50% Discount',
            '1 year Plan',
            'Charged Once',
            'No Ads',
          ]}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Yearly')}
        />

        <PricingCard
          color="#4f9deb"
          title="One year test"
          price="₦100"
          info={['1 year Plan', 'Charged Once', 'No Ads']}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => this.props.navigation.navigate('Yearly')}
        />
      </ScrollView>
    );
    // https://paystack.com/pay/eri45hfqpv
  }
}
