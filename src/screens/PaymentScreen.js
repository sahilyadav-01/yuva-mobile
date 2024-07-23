import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Payment from '../modules/payment';
import {styles} from './styles';

const PaymentScreen = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Payment paymentProps={props?.route?.params?.paymentProps} />
    </SafeAreaView>
  );
};

export default PaymentScreen;
