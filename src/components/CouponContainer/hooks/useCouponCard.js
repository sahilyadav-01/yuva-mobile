import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  couponSliceThunk,
  redeemCouponsPlanSliceThunk,
  redeemCouponsSliceThunk,
  selectedCoupon,
} from '../../../store/reducers/CouponSlice';
import {ALERT, COUPON_MESSAGE} from '../constant';
import {updateFinalAmount} from '../../../store/reducers/ProgramAndPlanSlice';

export const useCouponCard = (isPlan, planUuid, planType) => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const [couponCode, setCouponCode] = useState('');
  const [planTypee, setPlanTypee] = useState();
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [couponApply, setCouponApply] = useState(false);
  const dispatch = useDispatch();
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const {
    coupon,
    couponView,
    planeCouponCode,
    apiErrorMessage,
    selectedCouponCode,
    planCouponData,
  } = useSelector(state => state.coupon);
  const {cart} = useSelector(state => state.cart);
  const {couponViewCart} = cart || {};

  useEffect(() => {
    if (couponApply && selectedCouponCode && isPlan) {
      setCouponApply(false);
      dispatch(
        redeemCouponsPlanSliceThunk({
          couponCode: selectedCouponCode,
          planUuid,
          planType: planType?.id,
        }),
      );
    } else if (couponApply && selectedCouponCode) {
      dispatch(
        redeemCouponsSliceThunk({
          isLoggedIn,
          couponCode: selectedCouponCode,
        }),
      );
    }
  }, [couponApply, selectedCouponCode]);

  useEffect(() => {
    if (couponSuccess) {
      dispatch(
        couponSliceThunk({
          pageNo: 1,
          pageSize: 10,
          isLoggedIn: isLoggedIn ?? undefined,
        }),
      );
    }
  }, [couponSuccess]);

  useEffect(() => {
    switch (planType) {
      case 'Annually':
        setPlanTypee('ANNUALLY');
        break;
      case 'Quarterly':
        setPlanTypee('QUARTERLY');
        break;
      case 'Half Yearly':
        setPlanTypee('HALF_YEARLY');
        break;
    }
  }, [planType]);

  useEffect(() => {
    if (focused) {
      if (apiErrorMessage !== '' && apiErrorMessage !== undefined) {
        Alert.alert(ALERT, apiErrorMessage);
      }
    }
  }, [apiErrorMessage]);

  useEffect(() => {
    if (planCouponData) {
      dispatch(updateFinalAmount(planCouponData));
    }
  }, [planCouponData]);

  useEffect(() => {
    if (
      navigation.isFocused() &&
      isPlan &&
      isLoggedIn &&
      planType?.id?.length > 0
    ) {
      dispatch(
        couponSliceThunk({
          pageNo: 1,
          pageSize: 10,
          isLoggedIn,
          isPlan,
          planTypeEnum: planType?.id,
          planUuid,
        }),
      );
    } else if (navigation.isFocused() && isPlan && !isLoggedIn) {
      setCouponSuccess(true);
    }
  }, [planType, focused]);

  useEffect(() => {
    if (navigation.isFocused() && !isPlan && isLoggedIn) {
      dispatch(
        couponSliceThunk({
          pageNo: 1,
          pageSize: 10,
          isLoggedIn,
        }),
      );
    } else if (navigation.isFocused() && !isPlan && !isLoggedIn) {
      setCouponSuccess(true);
    }
  }, [planType, focused]);

  const onCouponValue = value => {
    setCouponCode(value);
  };

  const onSuccess = couponCode => {
    if (couponCode === couponViewCart) {
      setCouponApply(true);
      dispatch(selectedCoupon({couponCode: ''}));
      dispatch(redeemCouponsSliceThunk({isLoggedIn, couponCode: ''}));
    } else {
      setCouponApply(true);
      dispatch(selectedCoupon({couponCode}));
    }
  };

  const onApply = () => {
    if (couponCode?.trim()?.length === 0) {
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
            planType: planType?.id,
          }),
        );
      } else {
        dispatch(redeemCouponsSliceThunk({isLoggedIn, couponCode}));
      }
    }
  };

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
    onSuccess,
  };
};
