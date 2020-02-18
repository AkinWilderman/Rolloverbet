import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const GameView = () => {
  return (
    <ScrollView>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: '#79AF1B'}}> Jan </Text>
            <Text style={{color: '#79AF1B', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#79AF1B'}}> 2020 </Text>
          </View>
          <View style={styles.gameCard}>
            <View>
              <Text style={{color: '#79AF1B'}}> German Bundesliga </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
              <Text style={{color: 'grey', fontSize: 20}}> Real Madrid </Text>
              <Text style={{color: 'grey', fontSize: 20}}> vs </Text>
              <Text style={{color: 'grey', fontSize: 20}}> Barcelona </Text>
            </View>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: '#79AF1B', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'grey', fontSize: 20}}>
            Barcelona and over 2.5
          </Text>
        </View>
      </Card>
    </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '85%',
    alignItems: 'center',
    padding: 5,
  },
  prediction: {
    padding: 10,
    flexDirection: 'row',
  },
});

export default GameView;
