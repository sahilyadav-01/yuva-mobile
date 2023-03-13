import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';
import { getDeviceId } from '../../utils/utils';
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
      if(response?.data?.status){
        store.dispatch(getCartUserThunk());
      }
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
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
      if(response?.data?.status){
        store.dispatch(getCartGuestThunk());
      }
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  cart: {
    itemDtoList: [],
    totalCost: 0,
    isRemoved: false,
  },
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  existingIds: [],
  addToCartLoad: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTermsAndCondtionChecked(state,{payload}){
      state.TermsAndCondtionChecked=payload;
    },},
  extraReducers: {
    [getCartUserThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart= {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
      state.existingIds = [];
    },
    [getCartUserThunk.fulfilled]: (state, {payload}) => {
      state.cart.itemDtoList= payload?.data?.data?.itemDtoList || []
      if(payload?.data?.data?.itemDtoList && payload?.data?.data?.itemDtoList.length > 0){
        state.existingIds = payload?.data?.data?.itemDtoList.map(item=>item.productId)
      }
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
    },
    [getCartUserThunk.rejected]: (state, {payload}) => {
      state.cart= {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
      state.existingIds = [];
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
    },
    [getCartGuestThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart= {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
};
      state.existingIds = [];
    },
    [getCartGuestThunk.fulfilled]: (state, {payload}) => {
      state.cart.itemDtoList= payload?.data?.data?.itemDtoList || []
      if(payload?.data?.data?.itemDtoList && payload?.data?.data?.itemDtoList.length > 0){
        state.existingIds = payload?.data?.data?.itemDtoList.map(item=>item.productId)
      }
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
    },
    [getCartGuestThunk.rejected]: (state, {payload}) => {
      state.cart= {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
      state.existingIds = [];
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
    },
    [createCartGuestThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart= {};
      state.addToCartLoad = true;
    },
    [createCartGuestThunk.fulfilled]: (state, {payload}) => {
      state.cart= payload.data.data;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
      state.addToCartLoad = false;
    },
    [createCartGuestThunk.rejected]: (state, {payload}) => {
      state.cart= {};
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
      state.addToCartLoad = false;
    },
    [createCartUserThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart= {};
      state.addToCartLoad = true;
    },
    [createCartUserThunk.fulfilled]: (state, {payload}) => {
      state.cart= payload.data.data;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
      state.addToCartLoad = false;
    },
    [createCartUserThunk.rejected]: (state, {payload}) => {
      state.cart= {};
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
      state.addToCartLoad = false;
    },
    [deleteCartThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart.isRemoved = false;
      state.addToCartLoad = true;
    },
    [deleteCartThunk.fulfilled]: (state, {payload}) => {
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
      state.cart.isRemoved = true;
      state.addToCartLoad = false;
    },
    [deleteCartThunk.rejected]: (state, {payload}) => {
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
      state.cart.isRemoved = false;
      state.addToCartLoad = false;
    },    
  },
});
export const {setTermsAndCondtionChecked}=cartSlice.actions;
export const cartInit = cartSlice.getInitialState();
export default cartSlice.reducer;