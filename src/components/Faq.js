import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import FaqDetail from './FaqDetail';

class Faq extends Component {
  state = {faq: []};
  UNSAFE_componentWillMount() {
    axios
      .get('https://751ad277.ngrok.io')
      .then(res => this.setState({faq: res.data}));
  }

  // render function for each faq
  renderFaq() {
    return this.state.faq.map(faq => (
      <FaqDetail key={faq.question} faq={faq} />
    ));
  }

  render() {
    return (
      <ScrollView>
        <View styles={styles.container}>{this.renderFaq()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  belowItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    padding: '2%',
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: '#D6D8DC',
    borderBottomWidth: 0.5,
  },
});

export default Faq;
