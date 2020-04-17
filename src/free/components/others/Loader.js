import React, {Component} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
const Loader = props => {
  const {loading, ...attributes} = props;
  return <Modal visible={loading} />;
};
export default Loader;
