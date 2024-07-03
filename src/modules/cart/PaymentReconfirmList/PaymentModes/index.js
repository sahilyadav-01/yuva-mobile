import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import RadioButton from '../../../../components/RadioButton';

function PaymentModes({cod, onCodPress, onOnlinePress}) {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <RadioButton selected={!cod} onRadioPress={onOnlinePress} />
        <Text style={styles.paymentText}>Pay Online</Text>
      </View>
      <View style={styles.rowContainer}>
        <RadioButton selected={cod} onRadioPress={onCodPress} />
        <Text style={styles.paymentText}>Cash on Delivery</Text>
      </View>
    </View>
  );
}

export default PaymentModes;
