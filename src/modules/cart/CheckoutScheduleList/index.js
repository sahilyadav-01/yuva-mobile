import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {useCartAddressList} from '../CartAddressList/hook/useCartAddressList';
import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import ProgressBar from '../../../components/ProgressBar';
import {styles} from './styles';
import CustomDatePicker from '../../../components/CustomDatePicker';
import FinalAddress from '../../../components/FinalAddress';
import {CONFIRM_DATE_TIME} from './constant';
const CheckoutScheduleList = () => {
  const {ConfirmDateAndTime, handleDateTime} = useCartAddressList();

  return (
    <>
      <Header title={'Checkout'} showSearch={false} showBackButton={true} />
      <ScrollView>
        <OrderDetails />
        <View style={styles.bodyContainer}>
          <ProgressBar progress="0.65" showDateTimeSection={true} />
        </View>
        <View style={styles.separator}/>
        <CustomDatePicker onDateTimeSelect={handleDateTime} OPD={false}/>
        <FinalAddress />
        <TouchableOpacity
          onPress={ConfirmDateAndTime}
          style={styles.touchableButton}>
          <Text style={styles.textBook}>{CONFIRM_DATE_TIME}</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default CheckoutScheduleList;
