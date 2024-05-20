import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDeviceId } from '../../utils/utils';
import { YuvaService } from '../../../App';

export const couponSliceThunk = createAsyncThunk(
  '/coupon/getAllCoupons/user',
  async ({ pageNo, pageSize, isLoggedIn, isPlan, planTypeEnum, planUuid }, { fulfillWithValue, rejectWithValue }) => {
    let endpoint;
    const sessionId = await getDeviceId();
    if (isPlan) {
      if (isLoggedIn) {
        endpoint = `/coupon/getAllCoupons/user?pageNo=${pageNo}&pageSize=${pageSize}&planTypeEnum=${planTypeEnum}&planUuid=${planUuid}`;
      }
      else {
        endpoint = `/coupon/getAllCoupons/user?pageNo=${pageNo}&pageSize=${pageSize}&planTypeEnum=${planTypeEnum}&planUuid=${planUuid}`;
      }
    } else {
      if (isLoggedIn) {
        endpoint = `/coupon/getAllCoupons/user?pageNo=${pageNo}&pageSize=${pageSize}`;
      }
      else {
        endpoint = `/coupon/getAllCoupons/user?pageNo=${pageNo}&pageSize=${pageSize}`;
      }
    }
    try {
      const response = await YuvaService.post(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const redeemCouponsSliceThunk = createAsyncThunk(
  '/coupon/redeem',
  async ({ isLoggedIn, couponCode }, { fulfillWithValue, rejectWithValue }) => {
    let endpoint;
    const sessionId = await getDeviceId();
    if (isLoggedIn) {
      if (couponCode) {
        endpoint = `/cart?couponCode=${couponCode}`;
      } else {
        endpoint = `/cart?clearCoupon=true`;
      }
    } else {
      if (couponCode) {
        endpoint = `/cart/guest?sessionId=${sessionId}&couponCode=${couponCode}`;
      } else {
        endpoint = `/cart/guest?&clearCoupon=true`;
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
export const redeemCouponsPlanSliceThunk = createAsyncThunk(
  '/coupon/plan',
  async ({couponCode, planUuid,planType}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/plan/amount?couponCode=${couponCode}&planUuid=${planUuid}&planTypeEnum=${planType}`;
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
  amountToBePaidCoupon: 0,
  totalDiscount: 0,
  couponMessage: false,
  selectedCouponCode: '',
  couponDiscount: 0,
  planCouponDiscount:null,
  planCouponFinalAmount:null,
  planeCouponCode:null,
  couponId:null,
  planCouponData: null,
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
    selectedCoupon(state, payload) {
      state.selectedCouponCode = payload.payload.couponCode;
    },
    selectedPlaneCouponCode(state, payload) {
      state.planeCouponCode = payload?.payload?.couponCode;
    },
    removePlaneCoupon(state) {
      state.planeCouponCode = null;
    },
    clearApiErrorMessage(state, payload) {
      state.apiErrorMessage = payload?.payload;
    },
  },
  extraReducers: {
    [couponSliceThunk.pending]: (state, { payload }) => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [couponSliceThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.coupon = action.payload?.data?.userCouponResponseDtoList || [];
    },
    [couponSliceThunk.rejected]: (state, action) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = action?.payload?.message;
    },
     [redeemCouponsPlanSliceThunk.pending]: (state, { payload }) => {
      state.loading = true;
      state.apiErrorMessage = '';
      state.apiError = false;
      state.planCouponDiscount = null;
      state.planCouponFinalAmount = null;
      state.planeCouponCode = null;
      state.planCouponData = null;
    },
    [redeemCouponsPlanSliceThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.apiErrorMessage = '';
      state.planCouponDiscount = action?.payload?.data?.planAmountResponse;
      state.planCouponFinalAmount = action?.payload?.data?.planAmountResponse;
      state.planeCouponCode = action?.payload?.data?.couponCode;
      state.planCouponData = Object.values(action?.payload?.data?.planAmountResponse).find(item=>item?.price > 0);
    },
    [redeemCouponsPlanSliceThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action?.payload?.errorMessage;
    },

  },
});

export const { couponInit } = couponSlice.getInitialState();
export const { coupon, removeCoupon, selectedCoupon, selectedPlaneCouponCode, removePlaneCoupon, clearApiErrorMessage } = couponSlice.actions;
export default couponSlice.reducer;