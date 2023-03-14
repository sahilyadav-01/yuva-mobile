import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  createOrderThunk,
  encReqThunk,
} from '../../../store/reducers/PaymentSlice';

export const usePayment = paymentProps => {
  const {plan, bookingRequestDto, subscriptionRequestDto} = paymentProps;
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
        createOrderThunk({plan, bookingRequestDto, subscriptionRequestDto}),
      );
      setCreateOrder(true);
    }
  }, [focused]);

  useEffect(() => {
    if (createOrder && !createOrderLoading && orderId) {
      dispatch(encReqThunk({plan, orderId}));
    }
  }, [createOrderLoading, orderId, createOrder]);

  useEffect(() => {
    if (createOrder && orderId && !encReqLoading && encReq) {
      setRenderData(true);
    }
  }, [createOrder, orderId, encReqLoading, encReq]);

  return {
    encRequest: encReq ?? null,
    renderData,
  };
};
