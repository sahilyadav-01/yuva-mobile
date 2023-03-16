import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {getDateInFormat, getTimeInFormat} from '../../../utils/utils';
import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import ProgressBar from '../../../components/ProgressBar';
import FinalAddress from '../../../components/FinalAddress';
import {TO_BE_PAID} from './constant';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';

const PaymentReconfirmList = props => {
  const route = useRoute();
  const {date, time} = route?.params;
  const renderDate = getDateInFormat(new Date(date), 'dd/mm/yyyy');
  const renderTime = getTimeInFormat(new Date(time), 'hh:mm:ss');
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
          <Text style={styles.textBook}>{TO_BE_PAID}</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default PaymentReconfirmList;
