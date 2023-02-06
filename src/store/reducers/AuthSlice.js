import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  setObject,
  getObject,
  removeObject,
  setJwt,
  clearJwt,
} from '../LocalStore';
import {Freshchat} from 'react-native-freshchat-sdk';
import {YuvaService} from '../../network/yuvaService';

export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async ({email}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/password/forgot?emailOrNumber=${email}`;
      const response = await YuvaService.post(endpoint, {});
      if (response.data.status) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyEmailOtpThunk = createAsyncThunk(
  'auth/verifyEmailOtpThunk',
  async ({email}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/otp/generateEmailOtp?email=${email}`;
      const response = await YuvaService.get(endpoint, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyThunk = createAsyncThunk(
  'auth/verifyThunk',
  async (
    {emailOrNumber, otp, resendVar},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/validate-otp`;
      const response = await YuvaService.post(endpoint, {emailOrNumber, otp});
      if (response?.data?.message === 'OTP_INVALID') {
        const errorMsg = {response: 'Invalid OTP'};
        return rejectWithValue(errorMsg);
      }
      return {...response.data, resendVar};
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const verifySmsThunk = createAsyncThunk(
  'auth/verifySmsThunk',
  async ({number}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/generate-sms-otp?number=${number}`;
      const response = await YuvaService.get(endpoint, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async ({email, password}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/login?emailOrNumber=${email}&password=${password}`;
      const response = await YuvaService.post(endpoint, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const initialLoad = createAsyncThunk(
  'auth/initialLoad',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const value = await getObject('user');
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const value = await removeObject('user');
      try {
        Freshchat.resetUser();
      } catch (e) {}
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (
    {email, emailOtp, name, number, numberOtp, password},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/signup`;
      const response = await YuvaService.post(endpoint, {
        email,
        emailOtp,
        name,
        number,
        numberOtp,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  user: {
    name: '',
    jwt: '',
    status: false,
    roles: [],
    version: '1',
    id: '',
  },
  loggedIn: 'init',
  isAppReady: false,
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  signUp: {
    verifyEmail: false,
    verifySms: false,
  },
  verified: {
    smsVerified: false, 
    emailVerified: false
  },
  forgotStatus: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hideErrorBox(state) {
      state.apiError = false;
      state.apiErrorMessage = '';
    },

    resetVerifyEmail(state) {
      state.verified.emailVerified = false;
    },
    resetVerifySms(state) {
      state.verified.smsVerified = false;
    },

    resetForgotPassword(state) {
      state.forgotStatus = false;
    },
  },
  extraReducers: {
    /**
     * Login thunk handler
     */
    [loginThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.loggedIn = 'notLoggedIn';
      state.user.status = false;
    },
    [loginThunk.fulfilled]: (state, action) => {
      setJwt(action.payload.jwt);
      state.loading = false;
      const userData = {
        name: action.payload.data.name,
        jwt: action.payload.data.jwt,
        roles: action.payload.data.roles[0],
        id: action.payload.data.id,
      };
      action.payload.jwt && setObject('user', userData);
      state.user.name = action.payload.data.name || 'User';
      state.user.jwt = action.payload.data.jwt;
      state.user.roles = action.payload.data.roles[0];
      state.loggedIn = action.payload.data.jwt ? 'loggedIn' : state.loggedIn;
      state.user.status = true;
      state.user.id = action.payload.data.id;
    },
    [loginThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
    },
    /**
     * Initial loading thunk handler
     */
    [initialLoad.pending]: (state, {payload}) => {
      state.isAppReady = false;
    },
    [initialLoad.fulfilled]: (state, {payload}) => {
      if (payload == null) {
        state.loggedIn = 'notLoggedIn';
      } else {
        state.loggedIn = 'loggedIn';
        state.user.name = payload.name;
        state.user.jwt = payload.jwt;
      }
      state.isAppReady = true;
    },
    [initialLoad.rejected]: (state, {payload}) => {
      state.isAppReady = true;
    },
    /**
     * Logout thunk handler
     */
    [logoutThunk.pending]: (state, {payload}) => {},
    [logoutThunk.fulfilled]: (state, {payload}) => {
      state.user.status = false;
      state.loggedIn = 'notLoggedIn';
      state.user.name = '';
      state.user.jwt = '';
      state.isAppReady = true;
      clearJwt();
    },
    [logoutThunk.rejected]: (state, {payload}) => {},
    /**
     * signup thunk handler
     */
    [signupThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [signupThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
    },
    [signupThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.response;
    },
    //verifyEmailOtp thunk handler
    [verifyEmailOtpThunk.pending]: (state, action) => {
      state.loading = true;
      state.signUp.verifyEmail = false;
    },
    [verifyEmailOtpThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.signUp.verifyEmail =
        action?.payload?.message === 'OTP_SENT_SUCCESSFULLY';
    },
    [verifyEmailOtpThunk.rejected]: (state, action) => {
      state.loading = false;
      state.signUp.verifyEmail = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
    },

    //verifySms  thunk handler
    [verifySmsThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.signUp.verifySms = false;
    },
    [verifySmsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.signUp.verifySms =
        action?.payload?.message === 'OTP_SENT_SUCCESSFULLY';
    },
    [verifySmsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.signUp.verifySms = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
    },

    //verifyOTP thunk handler
    [verifyThunk.pending]: (state, action) => {
      state.loading = true;
      state.verified.smsVerified =
        action.payload?.resendVar === 'phone' ||
        action.payload?.resendVar === 'phoneCorporate'
          ? false
          : state.verified.smsVerified;
      state.verified.emailVerified =
        action.payload?.resendVar === 'email' ||
        action.payload?.resendVar === 'emailCorporate'
          ? false
          : state.verified.emailVerified;
    },
    [verifyThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.emailOrNumber = action.payload?.emailOrNumber;
      state.user.otp = action.payload?.otp;
      state.verified.smsVerified =
        action.payload?.resendVar === 'phone' ||
        action.payload?.resendVar === 'phoneCorporate'
          ? action.payload?.message === 'OTP_VALID'
          : state.verified.smsVerified;
      state.verified.emailVerified =
        action.payload?.resendVar === 'email' ||
        action.payload?.resendVar === 'emailCorporate'
          ? action.payload?.message === 'OTP_VALID'
          : state.verified.emailVerified;
    },
    [verifyThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.response;
      state.verified.smsVerified =
        action.payload?.resendVar === 'phone' ||
        action.payload?.resendVar === 'phoneCorporate'
          ? false
          : state.verified.smsVerified;
      state.verified.emailVerified =
        action.payload?.resendVar === 'email' ||
        action.payload?.resendVar === 'emailCorporate'
          ? false
          : state.verified.emailVerified;
    },

    //forgot password thunk handler
    [forgotPassword.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.forgotStatus = true;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.forgotStatus = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.message;
    },
  },
});
export const {
  hideErrorBox,
  resetSignUp,
  resetForgotPassword,
  resetVerifyEmail,
  resetVerifySms,
} = authSlice.actions;
export const authInit = authSlice.getInitialState();
export default authSlice.reducer;
