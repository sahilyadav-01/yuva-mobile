import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setObject, getObject, removeObject} from '../LocalStore';
import axios from 'axios';
import {SERVER} from '../../utils/utils';
/**
 * Contants
 */
// const ANDRIOD_SERVER = "10.0.2.2"
// const LOCAL_SERVER  = "localhost:8080"
const SINGUP_URI = 'http://' + SERVER + ':8080/api/v1/yuva/signup';
const GETSMS_URI = 'http://' + SERVER + ':8080/api/v1/yuva/otp/generateSmsOtp';
const EMAILOTP_URI =
  'http://' + SERVER + ':8080/api/v1/yuva/otp/generateEmailOtp';
const VERIFY_URI = 'http://' + SERVER + ':8080/api/v1/yuva/otp/validate';
const FORGOT_PASSWORD =
  'http://' + SERVER + ':8080/api/v1/yuva/password/forgot';
/**
 * Thunks
 */
export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async ({email}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const uri = FORGOT_PASSWORD + '?emailOrNumber=' + email;
      return await axios.post(uri, {}).then(resp => {
        if (resp.data.status) {
          return resp.data;
        } else {
          return rejectWithValue(resp.data);
        }
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyEmailOtpThunk = createAsyncThunk(
  'auth/verifyEmailOtpThunk',
  async ({email}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const uri = EMAILOTP_URI + '?email=' + email;
      return await axios.get(uri, {}).then(resp => resp.data);
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
      return await axios
        .post(VERIFY_URI, {
          emailOrNumber,
          otp,
        })
        .then(resp => {
          if(resp?.data?.message === 'OTP_INVALID') {
            const errorMsg = {response: 'Invalid OTP'}
            return rejectWithValue(errorMsg);
          }
          return {...resp.data, resendVar};
        });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const verifySmsThunk = createAsyncThunk(
  'auth/verifySmsThunk',
  async ({number}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const uri = GETSMS_URI + '?number=' + number;
      
      return await axios.get(uri, {}).then(resp => resp.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async ({email, password}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const uri =
        'http://' +
        SERVER +
        ':8080/api/v1/yuva/login?emailOrNumber=' +
        email +
        '&password=' +
        password;
      return await axios.post(uri, {}).then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)

      return rejectWithValue(error.response.data);
    }
  },
);
export const initialLoad = createAsyncThunk(
  'auth/initialLoad',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const value = await getObject('user');
      //return fulfillWithValue(data)

      return value;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error);
    }
  },
);
/**
 * Logout thunk
 */
export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const value = await removeObject('user');
      //return fulfillWithValue(data)

      return value;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error);
    }
  },
);
/**
 * Signup thunk
 */
export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (
    {email,emailOtp,name,number,numberOtp,password}, 
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      return await axios
        .post(SINGUP_URI, {email,emailOtp,name,number,numberOtp,password})
        .then(res => {
          return res.data
        });
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error);
    }
  },
);
/**
 * Slices
 */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      jwt: '',
      version: '1',
    },
    loggedIn: 'init',
    loading: false,
    apiError: false,
    apiErrorMessage: '',
    signUp: {
      verifyEmail: false,
      verifySms: false,
    },
    verified: {smsVerified: false, emailVerified: false},
    forgotStatus: false,
  },
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
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.loading = false;

      const userData = {name: action.payload.name, jwt: action.payload.jwt};
      setObject('user', userData);
      state.user.name = action.payload.name;
      state.user.jwt = action.payload.jwt;
      state.loggedIn = 'loggedIn';
    },
    [loginThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
    },
    /**
     * Initial loading thunk handler
     */
    [initialLoad.pending]: (state, {payload}) => {},
    [initialLoad.fulfilled]: (state, {payload}) => {
      if (payload == null) {
        state.loggedIn = 'notLoggedIn';
      } else {
        state.loggedIn = 'loggedIn';
        state.user.name = payload.name;
        state.user.jwt = payload.jwt;
      }
    },
    [initialLoad.rejected]: (state, {payload}) => {},
    /**
     * Logout thunk handler
     */
    [logoutThunk.pending]: (state, {payload}) => {},
    [logoutThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = 'init';
      state.user.name = '';
      state.user.jwt = '';
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
        action.payload?.resendVar === 'phone'
          ? false
          : state.verified.smsVerified;
      state.verified.emailVerified =
        action.payload?.resendVar === 'email'
          ? false
          : state.verified.emailVerified;
    },
    [verifyThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.emailOrNumber = action.payload?.emailOrNumber;
      state.user.otp = action.payload?.otp;
      state.verified.smsVerified =
        action.payload?.resendVar === 'phone' ? action.payload?.message === 'OTP_VALID' : state.verified.smsVerified;
      state.verified.emailVerified =
        action.payload?.resendVar === 'email' ? action.payload?.message === 'OTP_VALID': state.verified.emailVerified;
    },
    [verifyThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.response;
      state.verified.smsVerified =
        action.payload?.resendVar === 'phone'
          ? false
          : state.verified.smsVerified;
      state.verified.emailVerified =
        action.payload?.resendVar === 'email'
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
export default authSlice.reducer;
