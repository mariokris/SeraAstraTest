import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

const OverviewDetail = ({item, value}) => (
  <View style={styles.overviewDetailContainer}>
    <Text style={{color: '#9E9E9E'}}>{item}</Text>
    <Text style={{color: '#25282B'}}>{value}</Text>
  </View>
);

export default OverviewDetail;
