import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartGuestThunk, getCartUserThunk } from '../../../store/reducers/CartSlice';
import { couponSliceThunk, redeemCouponsPlanSliceThunk, redeemCouponsSliceThunk, selectedPlaneCouponCode } from '../../../store/reducers/CouponSlice';

export const useCouponCard = (isPlane ,planeType,planUuid) => {
    const [couponCode, setCouponCode] = useState('');
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(state => state.auth);
    const isLoggedIn = loggedIn === 'loggedIn';
    const { coupon, couponView } = useSelector(state => state.coupon);
    const { cart } = useSelector(state => state.cart);
    const onCouponValue = (value) => {

        setCouponCode(value)
    }
    const [couponName, setCouponName] = useState('');
    const onApply = () => {
        if (isPlane) {
            dispatch(selectedPlaneCouponCode({ couponCode: couponCode }));
            dispatch(redeemCouponsPlanSliceThunk({ couponCode, planeType, planUuid }));
          } else {
            dispatch(redeemCouponsSliceThunk({ isLoggedIn, couponCode }));
          }
        if (isLoggedIn) {
            dispatch(getCartUserThunk());
          } else {
            dispatch(getCartGuestThunk());
          }
    }
    useEffect(() => {
        if(isPlane){
            if (isLoggedIn) {
                dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10, isLoggedIn, isPlane, planTypeEnum:planeType, planUuid }));
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
        couponName,
        setCouponName,
        coupon,
        couponView,
        onApply,
        onCouponValue,
        cart,
    };
}