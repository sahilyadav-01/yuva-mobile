import React from 'react';
import {SafeAreaView} from 'react-native';
import PaymentStatus from '../modules/payment/PaymentStatus';
import {styles} from './styles';

const PaymentStatusScreen = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <PaymentStatus
        paymentProps={{
          token: props?.route?.params?.token ?? '',
          email: props?.route?.params?.email ?? '',
          zeroPayment: props?.route?.params?.zeroPayment ?? false,
          cod: props?.route?.params?.cod ?? false,
        }}
      />
    </SafeAreaView>
  );
};

export default PaymentStatusScreen;
