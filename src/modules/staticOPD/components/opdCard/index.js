import {View, Text} from 'react-native';
import React from 'react';
import {CASHLESS_OPD, WHAT_IS_CASHLESS_OPD, DESCRIPTION} from '../../constant';
import {styles} from './styles';
const OpdCard = () => {
  return (
    <View>
      <Text style={styles.title}>{CASHLESS_OPD}</Text>
      <Text style={styles.textStyle}>{WHAT_IS_CASHLESS_OPD}</Text>
      <Text style={styles.description}>{DESCRIPTION}</Text>
    </View>
  );
};

export default OpdCard;
