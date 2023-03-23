import React from 'react';
import {SafeAreaView} from 'react-native';
import CheckoutScheduleList from '../../modules/cart/CheckoutScheduleList';
import {styles} from './styles';

const CheckoutAddress = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <CheckoutScheduleList />
    </SafeAreaView>
  );
};

export default CheckoutAddress;
