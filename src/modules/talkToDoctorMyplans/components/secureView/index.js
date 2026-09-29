import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GREY} from '../../../../styles/colors';
import {SECURE_TEXT} from '../../constant';
import {styles} from './styles';

const SecureView = () => {
  return (
    <View style={styles.container}>
      <Icon name={'lock-outline'} color={GREY} />
      <Text style={styles.text}>{SECURE_TEXT}</Text>
    </View>
  );
};

export default SecureView;
