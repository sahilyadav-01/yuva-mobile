import {View, Text} from 'react-native';
import React from 'react';
import {ADDRESS, NAME, PHONE_NUMBER} from './constant';
import {styles} from './styles';

const FinalAddress = () => {
  return (
    <View style={styles.containView}>
      <Text style={styles.nameStyle}>{NAME}</Text>
      <Text style={styles.addressStyle}>{ADDRESS}</Text>
      <Text style={styles.numberStyle}>{PHONE_NUMBER}</Text>
    </View>
  );
};

export default FinalAddress;
