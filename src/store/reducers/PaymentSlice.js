import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firebaseMessaging from '@react-native-firebase/messaging';
import {YuvaService} from '../../../App';
import {
  clearJwt,
  clearRefreshToken,
  getRefreshToken,
  setJwt,
  setRefreshToken,
} from '../LocalStore';

export const createOrderThunk = createAsyncThunk(
  'payment/createOrder',
  async (
    {
      plan,
      cod,
      bookingRequestDto,
      subscriptionRequestDto,
      name,
      age,
      gender,
      cart,
    },
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = '/order';
      const reqBody = plan
        ? {bookingRequestDto, subscriptionRequestDto, cod, cart}
        : {
            bookingRequestDto,
            subscriptionRequestDto,
            name,
            age,
            genderEnum: gender?.toUpperCase() ?? undefined,
            cart,
            cod,
          };
      const refreshToken = await getRefreshToken();
      const fcmToken = await firebaseMessaging().getToken();
      const refreshTokenResp = await YuvaService.post('/refresh-token', {
        token: refreshToken,
        fcmToken,
      });
      await clearJwt();
      await clearRefreshToken();
      await setJwt(refreshTokenResp.data.data.jwt);
      await setRefreshToken(refreshTokenResp.data.data.refreshToken);
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
  async ({email, token}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/paymentGateway/status?emailOrNumber=${email}&token=${token}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const subscriptionDetails = createAsyncThunk(
  'payment/subscriptionDetails',
  async (params = null, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/onmood9';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
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
  paymentStatusLoading: false,
  paymentError: false,
  paymentStatus: null,
  order: null,
  subscriptionDetails: null,
  onMood9Loading: false,
  onMood9Error: false,
  cod: false,
  onMood9ErrorMessage: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    resetPaymentMethod(state, payload) {
      state.cod = payload?.payload;
    },
    changePaymentMethod(state, {payload}) {
      state.cod = payload;
    },
  },
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
      state.order = payload?.data;
      state.createOrderLoading = false;
      state.createOrderError = false;
    },
    [createOrderThunk.rejected]: state => {
      state.orderId = '';
      state.createOrderLoading = false;
      state.createOrderError = true;
    },
    [paymentStatus.pending]: state => {
      state.paymentStatusLoading = true;
      state.paymentError = false;
      state.paymentStatus = null;
    },
    [paymentStatus.fulfilled]: (state, {payload}) => {
      state.paymentStatusLoading = false;
      state.paymentStatus = payload?.data?.paymentStatus;
      state.paymentError = false;
    },
    [paymentStatus.rejected]: state => {
      state.paymentStatusLoading = false;
      state.paymentError = true;
      state.paymentStatus = null;
    },
    [subscriptionDetails.pending]: state => {
      state.onMood9Loading = true;
      state.onMood9Error = false;
      state.subscriptionDetails = null;
      state.onMood9ErrorMessage = '';
    },
    [subscriptionDetails.fulfilled]: (state, {payload}) => {
      state.onMood9Loading = false;
      state.onMood9Error = false;
      state.subscriptionDetails = payload?.data;
      state.onMood9ErrorMessage = '';
    },
    [subscriptionDetails.rejected]: (state, {payload}) => {
      state.onMood9Loading = false;
      state.onMood9Error = true;
      state.subscriptionDetails = null;
      state.onMood9ErrorMessage = payload?.errorMessage;
    },
  },
});

export const paymentInit = paymentSlice.getInitialState();
export const {resetPaymentMethod, changePaymentMethod} = paymentSlice.actions;

export default paymentSlice.reducer;
