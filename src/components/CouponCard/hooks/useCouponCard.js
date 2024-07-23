import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCartUserThunk} from '../../../store/reducers/CartSlice';
import {
  couponSliceThunk,
  redeemCouponsPlanSliceThunk,
  redeemCouponsSliceThunk,
  selectedCoupon,
} from '../../../store/reducers/CouponSlice';
import {ALERT, COUPON_MESSAGE} from '../constant';

export const useCouponCard = (isPlan, planUuid, planType) => {
  const focused = useIsFocused();
  const [couponCode, setCouponCode] = useState('');
  const [planTypee, setPlanTypee] = useState();
  const dispatch = useDispatch();
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const {
    coupon,
    couponView,
    planeCouponCode,
    apiErrorMessage,
    selectedCouponCode,
  } = useSelector(state => state.coupon);
  const {cart} = useSelector(state => state.cart);
  const {couponViewCart} = cart || {};
  const onCouponValue = value => {
    setCouponCode(value);
  };
  useEffect(() => {
    if (planType === 'Annually') {
      setPlanTypee('ANNUALLY');
    } else if (planType === 'Quarterly') {
      setPlanTypee('QUARTERLY');
    } else if (planType === 'Half Yearly') {
      setPlanTypee('HALF_YEARLY');
    }
  }, [planType]);

  const onApply = () => {
    if (couponCode === '') {
      Alert.alert(ALERT, COUPON_MESSAGE);
    } else {
      if (couponCode) {
        dispatch(selectedCoupon({couponCode}));
      }
      if (isPlan) {
        dispatch(
          redeemCouponsPlanSliceThunk({
            couponCode,
            planUuid,
            planType: planTypee,
          }),
        );
      } else {
        dispatch(redeemCouponsSliceThunk({isLoggedIn, couponCode}));
      }
      dispatch(getCartUserThunk());
    }
  };
  useEffect(() => {
    if (focused) {
      if (apiErrorMessage !== '' && apiErrorMessage !== undefined) {
        Alert.alert(ALERT, apiErrorMessage);
      }
    }
  }, [apiErrorMessage]);
  useEffect(() => {
    if (isPlan) {
      if (isLoggedIn) {
        dispatch(
          couponSliceThunk({
            pageNo: 1,
            pageSize: 10,
            isLoggedIn,
            isPlan,
            planTypeEnum: planTypee,
            planUuid,
          }),
        );
      } else {
        dispatch(couponSliceThunk({pageNo: 1, pageSize: 10}));
      }
    }
  }, [planTypee, planType]);

  useEffect(() => {
    if (isPlan) {
      if (isLoggedIn) {
        dispatch(
          couponSliceThunk({
            pageNo: 1,
            pageSize: 10,
            isLoggedIn,
            isPlan,
            planTypeEnum: planTypee,
            planUuid,
          }),
        );
      } else {
        dispatch(couponSliceThunk({pageNo: 1, pageSize: 10}));
      }
    } else {
      if (isLoggedIn) {
        dispatch(couponSliceThunk({pageNo: 1, pageSize: 10, isLoggedIn}));
      } else {
        dispatch(couponSliceThunk({pageNo: 1, pageSize: 10}));
      }
    }
  }, []);

  return {
    coupon,
    couponView,
    onApply,
    onCouponValue,
    cart,
    planeCouponCode,
    selectedCouponCode,
    couponViewCart,
    planTypee,
  };
};
