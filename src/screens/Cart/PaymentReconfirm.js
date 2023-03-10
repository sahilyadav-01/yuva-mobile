import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import DateAndTime from '../../components/DateAndTime';
import FinalAddress from '../../components/FinalAddress';
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';
import {styles} from './styles';
import {TO_BE_PAID} from './constant';
import ProgressBar from '../../components/ProgressBar';

const PaymentReconfirm = () => {
  // const {PaymentReconfirm} = useCartAddressList();
  return (
    <ScrollView>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <OrderDetails />
      <View style={styles.bodyContainer}>
        <ProgressBar progress="0" showDateTimeSection={true} />
      </View>
      <DateAndTime />
      <FinalAddress />
      <TouchableOpacity
        //onPress={PaymentReconfirm}
        style={styles.touchableButton}>
        <Text style={styles.textBook}>{TO_BE_PAID}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentReconfirm;
