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
            <Text style={{color: 'white'}}> Jan </Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#fff'}}> 2020 </Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={{color: 'white', fontSize: 20}}> Real Madrid </Text>
            <Text style={{color: 'white', fontSize: 20}}> vs </Text>
            <Text style={{color: 'white', fontSize: 20}}> Barcelona </Text>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: 'white', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            Barcelona and over 2.5
          </Text>
        </View>
      </Card>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: 'white'}}> Jan </Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#fff'}}> 2020 </Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={{color: 'white', fontSize: 20}}> Chelsea </Text>
            <Text style={{color: 'white', fontSize: 20}}> vs </Text>
            <Text style={{color: 'white', fontSize: 20}}> Manchester City </Text>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: 'white', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'white', fontSize: 20}}>2 and over 1.5</Text>
        </View>
      </Card>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: 'white'}}>Jan</Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#fff'}}>2020</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={{color: 'white', fontSize: 20}}> Arsenal </Text>
            <Text style={{color: 'white', fontSize: 20}}> vs </Text>
            <Text style={{color: 'white', fontSize: 20}}> Newcastle </Text>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: 'white', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            1 & over 2.5
          </Text>
        </View>
      </Card>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: 'white'}}>Jan</Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#fff'}}>2020</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={{color: 'white', fontSize: 20}}> Bayern Munich </Text>
            <Text style={{color: 'white', fontSize: 20}}> vs </Text>
            <Text style={{color: 'white', fontSize: 20}}> Liepzeig </Text>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: 'white', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            X & over 1.5
          </Text>
        </View>
      </Card>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: 'white'}}>Jan</Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#fff'}}>2020</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={{color: 'white', fontSize: 20}}> Lazio </Text>
            <Text style={{color: 'white', fontSize: 20}}> vs </Text>
            <Text style={{color: 'white', fontSize: 20}}> Inter Milan </Text>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: 'white', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            Both teams to score - Yes
          </Text>
        </View>
      </Card>
      <Card>
        <CardSection>
          <View style={styles.dateCard}>
            <Text style={{color: 'white'}}>Jan</Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              22
            </Text>
            <Text style={{color: '#fff'}}>2020</Text>
          </View>
          <View style={styles.gameCard}>
            <Text style={{color: 'white', fontSize: 20}}> Lazio </Text>
            <Text style={{color: 'white', fontSize: 20}}> vs </Text>
            <Text style={{color: 'white', fontSize: 20}}> Inter Milan </Text>
          </View>
        </CardSection>
        <View style={styles.prediction}>
          <Text style={{color: 'white', fontSize: 20}}> Prediction: </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            Both teams to score - Yes
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
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  prediction: {
    padding: 10,
    flexDirection: 'row',
  },
});

export default GameView;
