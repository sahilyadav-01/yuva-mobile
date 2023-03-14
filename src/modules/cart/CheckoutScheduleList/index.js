import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {useCartAddressList} from '../CartAddressList/hook/useCartAddressList';
import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import ProgressBar from '../../../components/ProgressBar';
import {styles} from './styles';
import DateAndTime from '../../../components/DateAndTime';
import FinalAddress from '../../../components/FinalAddress';
import {CONFIRM_DATE_TIME} from './constant';
const CheckoutScheduleList = () => {
  const {ConfirmDateAndTime, handleDate, handleTime, date, time} =
    useCartAddressList();

  return (
    <ScrollView>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <OrderDetails />
      <View style={styles.bodyContainer}>
        <ProgressBar progress="0.65" showDateTimeSection={true} />
      </View>
      <DateAndTime
        handleDate={handleDate}
        handleTime={handleTime}
        date={date}
        time={time}
      />
      <FinalAddress />
      <TouchableOpacity
        onPress={ConfirmDateAndTime}
        style={styles.touchableButton}>
        <Text style={styles.textBook}>{CONFIRM_DATE_TIME}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckoutScheduleList;
