import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {getDateInFormat, getTimeInFormat} from '../../../utils/utils';
import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import ProgressBar from '../../../components/ProgressBar';
import FinalAddress from '../../../components/FinalAddress';
import {TO_BE_PAID} from './constant';
import {styles} from './styles';
import { useSelector } from 'react-redux';

const PaymentReconfirmList = props => {
  const { scheduleDate } = useSelector(state => state.checkOut);
  const renderDate = getDateInFormat(new Date(scheduleDate.date), 'dd/mm/yyyy');
  const renderTime = getTimeInFormat(new Date(scheduleDate.time), 'hh:mm:ss');
  const { cart } = useSelector(state => state.cart);
  const { amountToBePaid } = cart || {};
  return (
    <>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <ScrollView>
        <OrderDetails />
        <View style={styles.bodyContainer}>
          <ProgressBar progress="0.99" showDateTimeSection={true} />
        </View>

        <FinalAddress />

        <View style={styles.dateContainer}>
          <Text style={styles.timeSlotStyle}>{renderDate}</Text>
          <Text style={styles.timeSlotStyle}>{renderTime}</Text>
        </View>
        {/*  to do ranjit component */}

        <TouchableOpacity style={styles.touchableButton}>
          <Text style={styles.textBook}>{TO_BE_PAID(amountToBePaid)}</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default PaymentReconfirmList;
