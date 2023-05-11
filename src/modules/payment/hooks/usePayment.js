import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createOrderThunk,
  encReqThunk,
} from '../../../store/reducers/PaymentSlice';
import {CANCEL_URL, REDIRECT_URL} from '../../../utils/utils';

export const usePayment = paymentProps => {
  const {plan, bookingRequestDto, subscriptionRequestDto, name, age, gender} =
    paymentProps;
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const navigation = useNavigation();
  const {encReqLoading, encReq, createOrderLoading, orderId,order} = useSelector(
    state => state.payment,
  );
  const [createOrder, setCreateOrder] = useState(false);
  const [renderData, setRenderData] = useState(false);
  useEffect(() => {
    if (navigation.isFocused()) {
      BackHandler.addEventListener('hardwareBackPress', () => true);
      setRenderData(false);
      dispatch(
        createOrderThunk({
          plan,
          bookingRequestDto,
          subscriptionRequestDto,
          name,
          age,
          gender,
        }),
      );
      setCreateOrder(true);
    }
  }, [focused]);

  useEffect(() => {
    if (createOrder && !createOrderLoading && orderId && !order?.amountZero) {
      dispatch(
        encReqThunk({
          plan,
          orderId,
          redirectUrl: REDIRECT_URL,
          cancelUrl: CANCEL_URL,
        }),
      );
    }
    else if (createOrder && !createOrderLoading && orderId && order?.amountZero){
      navigation.navigate("HomeService");
    }
  }, [createOrderLoading, orderId, createOrder]);

  useEffect(() => {
    if (createOrder && orderId && !encReqLoading && encReq) {
      setRenderData(true);
    }
  }, [createOrder, orderId, encReqLoading, encReq]);

  const postPaymentNavigation = (url,key) => {
    const params = url?.split(key)[1];
    const tokenString = params?.split('&email=')[0];
    const token = tokenString?.substring(6, tokenString?.length);
    const email = params?.split('&email=')[1];
    navigation.navigate('Payment', {
      screen: 'PaymentStatus',
      params: {token, email},
    });
  };

  return {
    encRequest: encReq ?? null,
    renderData,
    postPaymentNavigation,
  };
};
