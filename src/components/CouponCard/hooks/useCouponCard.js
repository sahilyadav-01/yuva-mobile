import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { couponSliceThunk, redeemCouponsSliceThunk } from '../../../store/reducers/CouponSlice';

export const useCouponCard = (props) => {
    const [couponCode, setcouponCode] = useState('');
    const couponFilterDto = {
        productType: "",
        searchKey: ""
    }
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(state => state.auth);
    const isLoggedIn = loggedIn === 'loggedIn';

    const { coupon, couponView } = useSelector(state => state.coupon);
    const { cart } = useSelector(state => state.cart);
    const couponValue = (value) => {

        setcouponCode(value)
    }
    const [couponName, setCouponName] = useState('');
    const onApply = () => {
        dispatch(redeemCouponsSliceThunk({ isLoggedIn,couponCode }));
    }
    useEffect(() => {

        dispatch(couponSliceThunk({ pageNo: 1, pageSize: 10, couponFilterDto }));

    }, []);

    return {
        couponName,
        setCouponName,
        coupon,
        couponView,
        onApply,
        couponValue,
        cart,
    };
}