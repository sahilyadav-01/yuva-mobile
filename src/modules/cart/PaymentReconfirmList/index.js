import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { getDateInFormat, getTimeInFormat } from '../../../utils/utils';
import Header from '../../../components/Header';
import OrderDetails from '../../../components/OrderDetails';
import ProgressBar from '../../../components/ProgressBar';
import FinalAddress from '../../../components/FinalAddress';
import { TO_BE_PAID } from './constant';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutPriceDetails from '../../../components/CheckoutPriceDetails'
import { usePaymentReconfirm } from './hooks/usePaymentReconfirm';
import { getCartGuestThunk, getCartUserThunk } from '../../../store/reducers/CartSlice';

const PaymentReconfirmList = props => {
  const { onPayPress } = usePaymentReconfirm();
  const { scheduleDate } = useSelector(state => state.checkOut);
  const renderDate = getDateInFormat(new Date(scheduleDate.date), 'dd/mm/yyyy');
  const renderTime = getTimeInFormat(new Date(scheduleDate.time), 'hh:mm:ss');
  const { cart } = useSelector(state => state.cart);
  const { amountToBePaid, itemDtoList, totalCost, totalDiscount } = cart || {};
  const { coupon } = useSelector(state => state.coupon);
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCartUserThunk());
    } else {
      dispatch(getCartGuestThunk());
    }
  }, []);

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
        <View style={styles.PriceDetails}>
          <CheckoutPriceDetails  isPrice={{ amountToBePaid, Quantity: itemDtoList.length, totalCost, totalDiscount }} />
        </View>

        <TouchableOpacity onPress={onPayPress} style={styles.touchableButton}>
          <Text style={styles.textBook}>{TO_BE_PAID(amountToBePaid)}</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default PaymentReconfirmList;