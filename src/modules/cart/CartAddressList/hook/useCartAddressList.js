import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dispatch_addressData, dispatch_scheduleData } from '../../../../store/reducers/CheckOutSlice';
import { ADDRESS_CHECK, ALERT, CHECKOUT_SCHEDULE_NAVIGATION, PAYMENT_PAGE_NAVIGATION, TIME_CHECK } from '../constant';

export const useCartAddressList = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const navigation = useNavigation();
  const { selectedAddress } = useSelector(state => state.profile);
  const currentDate = new Date();
  const twoHoursCheck = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000);

  const handleDate = arg => {
    setDate(arg);
  };

  const handleTime = arg => {
    setTime(arg);
  };

  const ConfirmAddress = () => {

    if (selectedAddress.address !== undefined) {
      dispatch(dispatch_addressData({ selectedAddress }));
      navigation.navigate(CHECKOUT_SCHEDULE_NAVIGATION);
    } else {
      Alert.alert(ALERT, ADDRESS_CHECK)
    }
  };
  const ConfirmDateAndTime = () => {
    if (date > currentDate) {
      dispatch(dispatch_scheduleData({ date, time }));
      navigation.navigate(PAYMENT_PAGE_NAVIGATION);
    }
    else if (time > twoHoursCheck) {
      dispatch(dispatch_scheduleData({ date, time }));
      navigation.navigate(PAYMENT_PAGE_NAVIGATION);
    }
    else {
      Alert.alert(ALERT, TIME_CHECK)
    }
  };

  return {
    ConfirmAddress,
    ConfirmDateAndTime,
    handleDate,
    handleTime,
    date,
    time,
  };
};
