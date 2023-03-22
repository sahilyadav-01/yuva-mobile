import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { useSelector } from 'react-redux';

const FinalAddress = () => {
  const { relationData,addressData } = useSelector(state => state.checkOut);
  return (
    <View style={styles.containView}>
      <Text style={styles.nameStyle}>{relationData.name}</Text>
      <Text style={styles.addressStyle}>{addressData.address}</Text>
      <Text style={styles.numberStyle}>{addressData.contact}</Text>
    </View>
  );
};

export default FinalAddress;
