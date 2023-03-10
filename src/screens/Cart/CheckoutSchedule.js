import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import FinalAddress from '../../components/FinalAddress';
import {styles} from './styles';
import ProgressBar from '../../components/ProgressBar';
import OrderDetails from '../../components/OrderDetails';
import DateAndTime from '../../components/DateAndTime';
import {CONFIRM_DATE_TIME} from './constant';
import Header from '../../components/Header';
import {useCartAddressList} from '../../modules/cart/CartAddressList/hook/useCartAddressList';

const CheckoutSchedule = () => {
  const {ConfirmDateAndTime} = useCartAddressList();

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
        onPress={ConfirmDateAndTime}
        style={styles.touchableButton}>
        <Text style={styles.textBook}>{CONFIRM_DATE_TIME}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckoutSchedule;
