import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDeviceId } from 'react-native-device-info';
import { YuvaService } from '../../network/yuvaService';

export const couponSliceThunk = createAsyncThunk(
  '/coupon/getAllCoupons/user',
  async ({ pageNo, pageSize, couponFilterDto }, { fulfillWithValue, rejectWithValue }) => {

    try {
      const endpoint = `/coupon/getAllCoupons/user?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=ID&sortOrder=DESC`;
      const response = await YuvaService.post(endpoint, couponFilterDto);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const redeemCouponsSliceThunk = createAsyncThunk(
  '/coupon/redeem',
  async ({ isLoggedIn, couponCode }, { fulfillWithValue, rejectWithValue }) => {
    console.log("login", isLoggedIn)
    let endpoint;
    const sessionId =  getDeviceId();
    if (isLoggedIn) {
      if (couponCode) {
        endpoint = `/cart?couponCode=${couponCode}&fromWeb=false`;
      } else {
        endpoint = `/cart?clearCoupon=true&fromWeb=false`;
      }
    } else {
      if (couponCode) {
        endpoint = `/cart/guest?sessionId=${sessionId}&couponCode=${couponCode}&fromWeb=false`;
      } else {
        endpoint = `/cart/guest?sessionId=${sessionId}&clearCoupon=true&fromWeb=false`;
      }
    }

    try {
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  coupon: [],
  redeemCoupons: '',
  couponView: null,
  totalCost: 0,
  amountToBePaid: 0,
  totalDiscount: 0,
  couponMessage: false,

}

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    coupon(state, action) {
      state.coupon = action.payload?.data?.userCouponResponseDtoList || [];
    },
    removeCoupon(state) {
      state.couponView = null;
    },
  },
  extraReducers: {
    /**
     */
    /** getAllCoupons */
    [couponSliceThunk.pending]: (state, { payload }) => {
      state.loading = true;
      // state.couponView = null;
      // state.totalCost = 0;
      // state.amountToBePaid = 0;
      // state.totalDiscount = 0;
      // state.redeemCoupons = '';
      // state.couponMessage = false;
    },
    [couponSliceThunk.fulfilled]: (state, action) => {
      state.coupon = action.payload?.data?.userCouponResponseDtoList || [];
    },
    [couponSliceThunk.rejected]: (state, action) => {
      state.apiError = true;
    },

    /** redeemCoupons */
    [redeemCouponsSliceThunk.pending]: (state, { payload }) => {
      state.loading = true;
      state.couponView = null;
      state.totalCost = 0;
      state.amountToBePaid = 0;
      state.totalDiscount = 0;
      state.couponMessage = false;
    },
    [redeemCouponsSliceThunk.fulfilled]: (state, action) => {
      state.redeemCoupons = action?.payload?.message || '';
      state.totalCost = action?.payload?.data?.totalCost || 0;
      state.amountToBePaid = action?.payload?.data?.amountToBePaid || 0;
      state.totalDiscount = action?.payload?.data?.totalDiscount || 0;
      state.couponMessage = true;
      state.couponView = action?.payload?.data?.couponCode || null;
    },
    [redeemCouponsSliceThunk.rejected]: (state, action) => {
      state.redeemCoupons = action.payload?.errorMessage || '';
      state.apiError = true;
      state.couponMessage = true;
      state.couponView = null;
    },

  },
});

export const { couponInit } = couponSlice.getInitialState();
export const { coupon, redeemCoupons, couponView, removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;