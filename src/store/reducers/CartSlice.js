import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';
import { getDeviceId } from '../../utils/utils';

const sessionId = getDeviceId();
export const getCartUserThunk = createAsyncThunk(
  'cart/getCartUser',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
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
      const response = await YuvaService.post(endpoint, {cartDto});
      if(response.data === 200){
        
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
      const endpoint = '/cart/guest';
      const response = await YuvaService.post(endpoint, {cartDto, sessionId});
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
      const endpoint = '/cart/item';
      const params = {
        fromWeb: false,
        itemId,
        sessionId,
      };
      const response = await YuvaService.delete(endpoint, {params});
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
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
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
    },
    [getCartUserThunk.fulfilled]: (state, {payload}) => {
      state.cart= {...payload.data.data, isRemoved: false};
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
    },
    [getCartGuestThunk.fulfilled]: (state, {payload}) => {
      state.cart= {...payload.data.data, isRemoved: false};
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
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
    },
    [createCartGuestThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart= {};
    },
    [createCartGuestThunk.fulfilled]: (state, {payload}) => {
      state.cart= payload.data.data;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
    },
    [createCartGuestThunk.rejected]: (state, {payload}) => {
      state.cart= {};
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
    },
    [createCartUserThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart= {};
    },
    [createCartUserThunk.fulfilled]: (state, {payload}) => {
      state.cart= payload.data.data;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
    },
    [createCartUserThunk.rejected]: (state, {payload}) => {
      state.cart= {};
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
    },
    [deleteCartThunk.pending]: (state) => {
      state.loading = true;
      state.apiError= false;
      state.apiErrorMessage= '';
      state.cart.isRemoved = false;
    },
    [deleteCartThunk.fulfilled]: (state, {payload}) => {
      state.apiError= false;
      state.apiErrorMessage= '';
      state.loading= false;
      state.cart.isRemoved = true;
    },
    [deleteCartThunk.rejected]: (state, {payload}) => {
      state.apiError= true;
      state.apiErrorMessage= payload.data.message;
      state.loading= false;
      state.cart.isRemoved = false;
    },    
  },
});

export const cartInit = cartSlice.getInitialState();
export default cartSlice.reducer;