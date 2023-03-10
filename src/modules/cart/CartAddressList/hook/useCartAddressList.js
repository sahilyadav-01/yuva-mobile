import {useNavigation} from '@react-navigation/native';

export const useCartAddressList = () => {
  const navigation = useNavigation();

  const ConfirmAddress = () => {
    navigation.navigate('CheckoutSchedule');
  };
  const ConfirmDateAndTime = () => {
    navigation.navigate('PaymentReconfirm');
  };

  return {
    ConfirmAddress,
    ConfirmDateAndTime,
  };
};
