// color scheme
// normal - #D69137
// won - #79AF1B

import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TipDetail = props => {
  let gameResult = props.game.result;
  return (
    <View>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: '#D69137'}}> {props.game.date}</Text>
            <Text style={{color: '#D69137', fontWeight: 'bold', fontSize: 20}}>
              {props.game.time}
            </Text>
            <Text style={{color: '#D69137'}}>{props.game.id}</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={styles.predictionText}> -{props.game.home} -</Text>
            <Text style={styles.predictionText}>-{props.game.away} </Text>
            <Text style={styles.predictionText}>-{props.game.prediction} </Text>
          </View>
          <View style={styles.dateCard}>
            <Text style={{color: '#D69137', fontWeight: 'bold'}}>
              {props.game.Country} {''}
            </Text>
            <Text style={{color: '#D69137'}}>{props.game.competition}</Text>
            <Text style={{color: '#D69137'}}>{props.game.certainty}</Text>
            <Text
              style={[
                gameResult === 'won'
                  ? styles.wonColor
                  : gameResult === 'lost'
                  ? styles.lostColor
                  : {color: '#D69137', fontWeight: 'bold'},
              ]}>
              {' '}
              {props.game.odds}{' '}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  dateCard: {
    backgroundColor: '#2D3A4A',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#1D252E',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '23%',
  },
  gameCard: {
    backgroundColor: '#2D3A4A',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#1D252E',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  prediction: {
    padding: 10,
    flexDirection: 'row',
  },
  predictionText: {
    color: '#fff',
  },
  wonColor: {
    color: '#79AF1B',
  },
  lostColor: {
    color: '#FF0000',
  },
});

export default TipDetail;
