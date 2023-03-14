import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useCartAddressList = () => {
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
    navigation.navigate('PaymentReconfirm', {
      date,
      time,
    });
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
