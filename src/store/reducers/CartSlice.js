import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {YuvaService} from '../../network/yuvaService';
import {getDeviceId} from '../../utils/utils';
import store from '../Store';

export const getCartUserThunk = createAsyncThunk(
  'cart/getCartUser',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const sessionId = await getDeviceId();
      const endpoint = `/cart?fromWeb=false&sessionId=${sessionId}`;
      const response = await YuvaService.get(endpoint);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCartGuestThunk = createAsyncThunk(
  'cart/getCartGuest',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const sessionId = await getDeviceId();
      const endpoint = `/cart/guest?sessionId=${sessionId}`;
      const response = await YuvaService.get(endpoint);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createCartUserThunk = createAsyncThunk(
  'cart/createCartUser',
  async ({cartDto}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/cart';
      const response = await YuvaService.post(endpoint, cartDto);
      if (response?.data?.status) {
        store.dispatch(getCartUserThunk());
      }
    } catch (error) {
      Alert.alert('Alert', 'Unable to add item to cart');
    }
  },
);

export const createCartGuestThunk = createAsyncThunk(
  'cart/createCartGuest',
  async ({cartDto}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const sessionId = await getDeviceId();
      const endpoint = `/cart/guest?sessionId=${sessionId}`;
      const response = await YuvaService.post(endpoint, cartDto);
      if (response?.data?.status) {
        store.dispatch(getCartGuestThunk());
      }
    } catch (error) {
      Alert.alert('Alert', 'Unable to add item to cart');
    }
  },
);

export const deleteCartThunk = createAsyncThunk(
  'cart/deleteCart',
  async ({itemId}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const sessionId = await getDeviceId();
      const endpoint = `/cart/item?fromWeb=false&itemId=${itemId}&sessionId=${sessionId}`;
      const response = await YuvaService.delete(endpoint);
      return fulfillWithValue(response);
    } catch (error) {
      Alert.alert('Alert', 'Unable to remove item to cart');
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  cart: {
    itemDtoList: [],
    totalCost: 0,
    isRemoved: false,
    amountToBePaid: 0,
    totalDiscount: 0,
    couponViewCart: null,
    discountBeforeCoupon:0,
    orderAmount:0,
  },
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  existingIds: [],
  addToCartLoad: false,
  termsAndCondtionChecked:false,
  cartCouponDiscount:0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeCouponCart(state) {
      state.cart.couponViewCart = null;
    },
    setTermsAndCondtionChecked(state, {payload}) {
      state.termsAndCondtionChecked = payload;
    },
  },
  extraReducers: {
    [getCartUserThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.cart = {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
    },
    [getCartUserThunk.fulfilled]: (state, {payload}) => {
      state.cart.itemDtoList= payload?.data?.data?.itemDtoList || []
      state.cart.totalCost= payload?.data?.data?.totalCost || 0
      state.cart.amountToBePaid= payload?.data?.data?.amountToBePaid || 0
      state.cart.totalDiscount= payload?.data?.data?.totalDiscount || 0
      if(typeof payload?.data?.data?.itemDtoList === 'object' && payload?.data?.data?.itemDtoList.length >= 0){
        state.existingIds = payload?.data?.data?.itemDtoList.map(item=>item.productId)
      }
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
      state.cart.couponViewCart= payload?.data?.data?.couponCode || null;
      state.cart.cartCouponDiscount= payload?.data?.data?.discountForCoupon;
      state.cart.orderAmount= payload?.data?.data?.costAfterDiscount;
      state.cart.discountBeforeCoupon= payload?.data?.data?.discountBeforeCoupon;
    },
    [getCartUserThunk.rejected]: (state, {payload}) => {
      state.cart = {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
      state.existingIds = [];
      state.apiError = true;
      state.apiErrorMessage = payload.data.message;
      state.loading = false;
    },
    [getCartGuestThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.cart = {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
    },
    [getCartGuestThunk.fulfilled]: (state, {payload}) => {
      state.cart.itemDtoList = payload?.data?.data?.itemDtoList || [];
      state.cart.totalCost = payload?.data?.data?.totalCost || 0;
      state.cart.amountToBePaid = payload?.data?.data?.amountToBePaid || 0;
      state.cart.totalDiscount = payload?.data?.data?.totalDiscount || 0;
      if (
        typeof payload?.data?.data?.itemDtoList === 'object' &&
        payload?.data?.data?.itemDtoList.length >= 0
      ) {
        state.existingIds = payload?.data?.data?.itemDtoList.map(
          item => item.productId,
        );
      }
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
      state.cart.couponViewCart= payload?.data?.data?.couponCode || null;
      state.cart.cartCouponDiscount= payload?.data?.data?.discountForCoupon;
      state.cart.orderAmount= payload?.data?.data?.costAfterDiscount;
      state.cart.discountBeforeCoupon= payload?.data?.data?.discountBeforeCoupon;
    },
    [getCartGuestThunk.rejected]: (state, {payload}) => {
      state.cart = {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
      state.existingIds = [];
      state.apiError = true;
      state.apiErrorMessage = payload.data.message;
      state.loading = false;
    },
    [deleteCartThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.cart.isRemoved = false;
      state.addToCartLoad = true;
    },
    [deleteCartThunk.fulfilled]: (state, {payload}) => {
      if(payload?.data?.status){
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.cart.isRemoved = true;
      state.addToCartLoad = false;
      }
    },
    [deleteCartThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.apiErrorMessage = payload.data.message;
      state.loading = false;
      state.cart.isRemoved = false;
      state.addToCartLoad = false;
    },
  },
});
export const {setTermsAndCondtionChecked} = cartSlice.actions;
export const cartInit = cartSlice.getInitialState();
export const {removeCouponCart} = cartSlice.actions;
export default cartSlice.reducer;
