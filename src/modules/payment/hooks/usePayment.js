import {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';
import {
  createOrderThunk,
  encReqThunk,
} from '../../../store/reducers/PaymentSlice';

export const usePayment = paymentProps => {
  const {plan, bookingRequestDto, subscriptionRequestDto, name, age, gender, cart} =
    paymentProps;
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const navigation = useNavigation();
  const {encReqLoading, encReq, createOrderLoading, orderId,order, cod} = useSelector(
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
          cod: plan ? cod ? 'true': 'false' : cod,
          bookingRequestDto,
          subscriptionRequestDto,
          name,
          age,
          gender,
          cart
        }),
      );
      setCreateOrder(true);
    }
  }, [focused]);

  useEffect(() => {
    if (createOrder && !createOrderLoading && orderId && !cod && !order?.amountZero) {
      dispatch(
        encReqThunk({
          plan,
          orderId,
          redirectUrl: Config.REDIRECT_URL,
          cancelUrl: Config.CANCEL_URL,
        }),
      );
    }
    else if (createOrder && !createOrderLoading && orderId && !cod && order?.amountZero){
      navigation.navigate('Payment', {
        screen: 'PaymentStatus',
        params: {zeroPayment:true},
      });
    }
    else if (createOrder && !createOrderLoading && orderId && !order?.amountZero && cod ){
      navigation.navigate('Payment', {
        screen: 'PaymentStatus',
        params: {cod:true},
      });
    }
  }, [createOrderLoading, orderId, createOrder]);

  useEffect(() => {
    if (createOrder && orderId && !encReqLoading && encReq) {
      setRenderData(true);
    }
  }, [createOrder, orderId, encReqLoading, encReq]);

  const postPaymentNavigation = (url,key) => {
    const params = url?.split(key)[1];
    const tokenString = params?.split('&emailOrNumber=')[0];
    const token = tokenString?.substring(6, tokenString?.length);
    const email = params?.split('&emailOrNumber=')[1];
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
