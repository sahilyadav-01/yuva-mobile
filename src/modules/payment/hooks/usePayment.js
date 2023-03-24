import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  createOrderThunk,
  encReqThunk,
} from '../../../store/reducers/PaymentSlice';

export const usePayment = paymentProps => {
  const {plan, bookingRequestDto, subscriptionRequestDto, name, age, gender} = paymentProps;
  const redirectUrl = 'http://ec2-3-111-222-20.ap-south-1.compute.amazonaws.com:8080/api/v1/yuva/paymentGateway/response';
  const cancelUrl = 'http://ec2-3-111-222-20.ap-south-1.compute.amazonaws.com:8082/cancelPayment'
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const navigation = useNavigation();
  const {encReqLoading, encReq, createOrderLoading, orderId} = useSelector(
    state => state.payment,
  );
  const [createOrder, setCreateOrder] = useState(false);
  const [renderData, setRenderData] = useState(false);
  useEffect(() => {
    if (navigation.isFocused()) {
      setRenderData(false);
      dispatch(
        createOrderThunk({plan, bookingRequestDto, subscriptionRequestDto,name,age,gender}),
      );
      setCreateOrder(true);
    }
  }, [focused]);

  useEffect(() => {
    if (createOrder && !createOrderLoading && orderId) {
      dispatch(encReqThunk({plan, orderId, redirectUrl, cancelUrl}));
    }
  }, [createOrderLoading, orderId, createOrder]);

  useEffect(() => {
    if (createOrder && orderId && !encReqLoading && encReq) {
      setRenderData(true);
    }
  }, [createOrder, orderId, encReqLoading, encReq]);

  const postPaymentNavigation = (url) => {
    
    //navigation.navigate('Payment',{screen:'PaymentStatus',params:{url}})
  }

  return {
    encRequest: encReq ?? null,
    renderData,
    postPaymentNavigation
  };
};
