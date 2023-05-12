import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCartGuestThunk, getCartUserThunk } from '../../../store/reducers/CartSlice';
import { couponSliceThunk, redeemCouponsPlanSliceThunk, redeemCouponsSliceThunk } from '../../../store/reducers/CouponSlice';

export const useCouponCard = (isPlan ,planUuid,planType) => {
    const [couponCode, setCouponCode] = useState('');
    const [alertCheck, setAlertCheck] = useState(false);

    const dispatch = useDispatch();
    const { loggedIn } = useSelector(state => state.auth);
    const isLoggedIn = loggedIn === 'loggedIn';
    const { coupon, couponView, planeCouponCode, redeemCoupons } = useSelector(state => state.coupon);
    const { cart } = useSelector(state => state.cart);

  const {  couponViewCart} = cart || {};
  console.log('couponViewCart',couponViewCart);
  console.log('couponView',couponView);

    const onCouponValue = (value) => {

        setCouponCode(value)
    }
    const onApply = () => {

        if (isPlan) {
            dispatch(redeemCouponsPlanSliceThunk({ couponCode, planUuid }));
          } else {
            dispatch(redeemCouponsSliceThunk({ isLoggedIn, couponCode }));
          }
        if (isLoggedIn) {
            dispatch(getCartUserThunk());
          } else {
            dispatch(getCartGuestThunk());
          }
       
          setAlertCheck(true) 
    }
 
    useEffect(() => {
        if(couponViewCart || couponView){

             Alert.alert('ALERT', 'Applied Successfully');
          setAlertCheck(false) ;

          }
          else if(couponViewCart==null && alertCheck)
        {
             Alert.alert('ALERT', redeemCoupons);
          }
    }, [couponView, couponViewCart]);
        

    useEffect(() => {
        if(isPlan){
            if (isLoggedIn) {
                dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10, isLoggedIn, isPlan, planTypeEnum:planType, planUuid }));
            }
            else {
                dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10 }));
            }
        }else{
            if (isLoggedIn) {
                dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10, isLoggedIn }));
            }
            else {
                dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10 }));
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
    };
}