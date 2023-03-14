import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  async ({ couponCode }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/coupon/redeem?couponCode=${couponCode}`;
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
  couponView: false,
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
      state.couponView = false;
      state.totalCost = 0;
      state.amountToBePaid = 0;
      state.totalDiscount = 0;
    },
    showCouponMessage(state) {
      state.couponMessage = false;
    },
  },
  extraReducers: {
    /**
     */
    /** getAllCoupons */
    [couponSliceThunk.pending]: (state, { payload }) => {
      state.loading = true;
      state.couponView = false;
      state.totalCost = 0;
      state.amountToBePaid = 0;
      state.totalDiscount = 0;
      state.redeemCoupons = '';
      state.couponMessage = false;
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
      state.couponView = false;
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
      state.couponView = true;
      state.couponMessage = true;

    },
    [redeemCouponsSliceThunk.rejected]: (state, action) => {
      state.redeemCoupons = action.payload?.errorMessage || '';
      state.couponView = false;
      state.apiError = true;
      state.couponMessage = true;
    },

  },
});

export const { couponInit } = couponSlice.getInitialState();
export const { coupon, redeemCoupons, couponView, removeCoupon ,showCouponMessage} = couponSlice.actions;
export default couponSlice.reducer;