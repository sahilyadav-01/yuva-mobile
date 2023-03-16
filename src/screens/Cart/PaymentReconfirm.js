import React from 'react';
import {SafeAreaView} from 'react-native';
import PaymentReconfirmList from '../../modules/cart/PaymentReconfirmList';
import {styles} from './styles';

const PaymentReconfirm = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <PaymentReconfirmList />
    </SafeAreaView>
  );
};

export default PaymentReconfirm;
