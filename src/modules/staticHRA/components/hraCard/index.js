import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HRA, WHAT_IS_HRA, HRA_DESC, GET_HRA_NOW} from '../../constant';
import {useNavigation} from '@react-navigation/native';
const HraCard = () => {
  const navigation = useNavigation();
  const onLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <Text style={styles.headTitle}>{HRA}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={onLogin}>
        <Text style={styles.title1}>{GET_HRA_NOW} </Text>
      </TouchableOpacity>
      <Text style={styles.title}>{WHAT_IS_HRA}</Text>
      <Text style={styles.description}>{HRA_DESC}</Text>
    </View>
  );
};

export default HraCard;
