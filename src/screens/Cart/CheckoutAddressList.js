import React from 'react';
import {SafeAreaView} from 'react-native';
import CartAddressList from '../../modules/cart/CartAddressList';
import {styles} from '../styles';

const CheckoutAddressList = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <CartAddressList />
    </SafeAreaView>
  );
};

export default CheckoutAddressList;
