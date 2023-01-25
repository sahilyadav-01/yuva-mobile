import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BEST_DOCTORS, DOCTOR_DESC} from '../../constant';

const BestDoctors = () => {
  return (
    <View>
      <Text style={styles.title}>{BEST_DOCTORS}</Text>
      <Text style={styles.description}>{DOCTOR_DESC}</Text>
    </View>
  );
};

export default BestDoctors;
