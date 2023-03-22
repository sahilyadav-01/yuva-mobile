import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { dispatch_scheduleData } from '../../../../store/reducers/CheckOutSlice';

export const useCartAddressList = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const navigation = useNavigation();

  const handleDate = arg => {
    setDate(arg);
  };

  const handleTime = arg => {
    setTime(arg);
  };

  const ConfirmAddress = () => {
    navigation.navigate('CheckoutSchedule');
  };
  const ConfirmDateAndTime = () => {
    navigation.navigate('PaymentReconfirm');
  };
useEffect(()=>{
  dispatch(dispatch_scheduleData({date,time}));
},[date,time])


  return {
    ConfirmAddress,
    ConfirmDateAndTime,
    handleDate,
    handleTime,
    date,
    time,
  };
};
