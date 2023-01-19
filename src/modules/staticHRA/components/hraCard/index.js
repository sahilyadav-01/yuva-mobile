import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HRA, WHAT_IS_HRA, HRA_DESC} from '../../constant';
const HraCard = () => {
  return (
    <View>
      <Text style={styles.headTitle}>{HRA}</Text>
      <Text style={styles.title}>{WHAT_IS_HRA}</Text>
      <Text style={styles.description}>{HRA_DESC}</Text>
    </View>
  );
};

export default HraCard;
