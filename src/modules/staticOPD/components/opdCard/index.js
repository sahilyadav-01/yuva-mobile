import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  CASHLESS_OPD,
  GET_OPD_NOW,
  WHAT_IS_CASHLESS_OPD,
  DESCRIPTION,
} from '../../constant';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
const OpdCard = () => {
  const navigation = useNavigation();
  const onLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <Text style={styles.title}>{CASHLESS_OPD}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={onLogin}>
        <Text style={styles.title1}>{GET_OPD_NOW} </Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>{WHAT_IS_CASHLESS_OPD}</Text>
      <Text style={styles.description}>{DESCRIPTION}</Text>
    </View>
  );
};

export default OpdCard;
