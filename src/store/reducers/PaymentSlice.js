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
        plan
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

export const paymentStatus = createAsyncThunk(
  'payment/paymentStatus',
  async ({email,token}) => {
    try {
      const endpoint = `/paymentGateway/status?email=${email}&token=${token}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  encReqLoading: false,
  encReqError: false,
  encReq: '',
  createOrderLoading: false,
  createOrderError: false,
  orderId: '',
  paymentStatusLoading: false,
  paymentError: false,
  paymentStatus: null,
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
    [paymentStatus.pending]: (state) => {
      state.paymentStatusLoading = true;
      state.paymentError = false;
      state.paymentStatus = null;
    },
    [paymentStatus.fulfilled]: (state,{payload}) => {
      state.paymentStatusLoading = false;
      state.paymentStatus = payload?.data?.paymentStatus;
      state.paymentError = false;
    },
    [paymentStatus.rejected]: (state) => {
      state.paymentStatusLoading = false;
      state.paymentError = true;
      state.paymentStatus = null;
    }
  },
});

export const paymentInit = paymentSlice.getInitialState();

export default paymentSlice.reducer;
