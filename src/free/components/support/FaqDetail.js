import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const FaqDetail = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert(props.faq.question, props.faq.answer)}>
        <Text style={styles.text}>{props.faq.question}</Text>
        <Separator />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#2D3A4A',
    margin: 15,
    fontSize: 16,
    flex: 1,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
});

export default FaqDetail;
