import React from 'react';
import {SafeAreaView} from 'react-native';

import CheckoutAddAddressList from '../../modules/cart/CheckoutAddAddress';
import {styles} from './styles';

const CheckoutAddAddress = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <CheckoutAddAddressList />
    </SafeAreaView>
  );
};

export default CheckoutAddAddress;
