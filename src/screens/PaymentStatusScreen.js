import React from 'react';
import {SafeAreaView} from 'react-native';
import PaymentStatus from '../modules/payment/PaymentStatus';
import {styles} from './styles';

const PaymentStatusScreen = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <PaymentStatus paymentSuccess={props?.route?.params?.paymentSuccess} />
    </SafeAreaView>
  );
};

export default PaymentStatusScreen;
