import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {paymentStatus as paymentStatusThunk} from '../../../../store/reducers/PaymentSlice';

export const usePaymentStatus = params => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const {paymentStatusLoading, paymentError, paymentStatus} = useSelector(
    state => state.payment,
  );
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (navigation.isFocused()) {
      BackHandler.addEventListener('hardwareBackPress', () => true);
      dispatch(paymentStatusThunk({token: params?.token, email: params?.email}));
    }
  }, [focused]);

  useEffect(() => {
    if (!paymentStatusLoading && !paymentError && paymentStatus !== null) {
      paymentStatus === 'PAID' ? setPaymentSuccess(true) : setPaymentSuccess(false);
      setLoading(false);
    }
  }, [paymentStatusLoading]);

  return {paymentSuccess, loading};
};
