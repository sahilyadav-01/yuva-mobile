import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const createOrderThunk = createAsyncThunk(
  'payment/createOrder',
  async (
    {plan, bookingRequestDto, subscriptionRequestDto, name, age, gender},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/order?plan=${plan}`;
      const reqBody =
        name === -1
          ? {bookingRequestDto, subscriptionRequestDto}
          : {bookingRequestDto, subscriptionRequestDto, name, age, gender};
      const response = await YuvaService.post(endpoint, reqBody);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const encReqThunk = createAsyncThunk(
  'payment/encReq',
  async (
    {plan, orderId, redirectUrl, cancelUrl},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/paymentGateway/redirect?plan=${plan}&orderId=${orderId}&redirectURL=${redirectUrl}&cancelURL=${cancelUrl}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  encReqLoading: false,
  encReqError: false,
  encReq: '',
  createOrderLoading: false,
  createOrderError: false,
  orderId: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  extraReducers: {
    [encReqThunk.pending]: state => {
      state.encReqLoading = true;
      state.encReq = '';
      state.encReqError = false;
    },
    [encReqThunk.fulfilled]: (state, {payload}) => {
      state.encReqLoading = false;
      state.encReq = payload?.data?.encRequest;
    },
    [encReqThunk.rejected]: state => {
      state.encReqLoading = true;
      state.encReqError = true;
    },
    [createOrderThunk.pending]: state => {
      state.orderId = '';
      state.createOrderLoading = true;
      state.createOrderError = false;
    },
    [createOrderThunk.fulfilled]: (state, {payload}) => {
      state.orderId = payload.data.id;
      state.createOrderLoading = false;
      state.createOrderError = false;
    },
    [createOrderThunk.rejected]: state => {
      state.orderId = '';
      state.createOrderLoading = false;
      state.createOrderError = true;
    },
  },
});

export const paymentInit = paymentSlice.getInitialState();

export default paymentSlice.reducer;
