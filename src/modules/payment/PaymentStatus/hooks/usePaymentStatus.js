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
    if (navigation.isFocused() && !params?.zeroPayment && !params?.cod) {
      BackHandler.addEventListener('hardwareBackPress', () => true);
      dispatch(paymentStatusThunk({token: params?.token, email: params?.email}));
    }
  }, [focused]);

  useEffect(() => {
    if(params?.zeroPayment) setLoading(false);
    else if(params?.cod) setLoading(false);
    else if (!paymentStatusLoading && !paymentError && paymentStatus === 'ABORTED' && !params?.zeroPayment && !params?.cod) {
      navigation.reset({index:0,routes:[{name:'HomeScreen'}]})
    }
    else if (!paymentStatusLoading && !paymentError && paymentStatus !== null && !params?.zeroPayment && !params?.cod) {
      paymentStatus === 'PAID' ? setPaymentSuccess(true) : setPaymentSuccess(false);
      setLoading(false);
    }
  }, [paymentStatusLoading]);

  const onCrossPress = () => {
    navigation.reset({index:0,routes:[{name:'HomeScreen'}]})
  }

  return {paymentSuccess, loading, onCrossPress};
};
