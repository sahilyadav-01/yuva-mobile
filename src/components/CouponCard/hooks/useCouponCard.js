import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { couponSliceThunk, redeemCouponsSliceThunk } from '../../../store/reducers/CouponSlice';
import { Alert } from 'react-native';
import { ALERT } from '../constant';

export const useCouponCard = (props) => {
    const [couponCode, setcouponCode] = useState('');
    const couponFilterDto = {
        productType: "",
        searchKey: ""
    }
    const dispatch = useDispatch();
    const { coupon, couponView, redeemCoupons,couponMessage } = useSelector(state => state.coupon);
    const { showCoupon } = useSelector(state => state.cart);

    const couponValue = (value) => {

        setcouponCode(value)
    }
    const [couponName, setCouponName] = useState('');
    const onApply = () => {
        dispatch(redeemCouponsSliceThunk({ couponCode }));
    }
    useEffect(() => {

        dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10, couponFilterDto }));

    }, []);

    useEffect(() => {
        if (  redeemCoupons.length>0 && couponMessage) {
          Alert.alert(ALERT, redeemCoupons);
        }
      }, [redeemCoupons]);

    return {
        couponName,
        setCouponName,
        coupon,
        couponView,
        onApply,
        couponValue,
    };
}