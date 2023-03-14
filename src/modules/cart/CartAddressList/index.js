import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProgressBar from '../../../components/ProgressBar';
import Header from '../../../components/Header';

import {styles} from './styles';
import AddressList from '../../../components/Address';
import OrderDetails from '../../../components/OrderDetails';
import {CONFIRM_ADDRESS} from './constant';
import {useCartAddressList} from './hook/useCartAddressList';

const CartAddressList = props => {
  const {ConfirmAddress} = useCartAddressList();

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <OrderDetails />
      <View style={styles.bodyContainer}>
        <ProgressBar progress="0" showDateTimeSection={true} />
      </View>
      <AddressList isNavScreen={'CheckoutAddressList'}/>
      <TouchableOpacity onPress={ConfirmAddress} style={styles.touchableButton}>
        <Text style={styles.textBook}>{CONFIRM_ADDRESS}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartAddressList;
