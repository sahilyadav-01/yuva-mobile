import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setObject, getObject, removeObject} from '../LocalStore';
import axios from 'axios';
import {handleNetworkError, SERVER} from '../../utils/utils';
import {Freshchat} from 'react-native-freshchat-sdk';
import { Alert } from 'react-native';

const SINGUP_URI = 'http://' + SERVER + ':8080/api/v1/yuva/signup';
const CHECK_URI = 'http://' + SERVER + ':8080/api/v1/yuva/check';
const GETSMS_URI = 'http://' + SERVER + ':8080/api/v1/yuva/generate-sms-otp';
const VERIFY_URI = 'http://' + SERVER + ':8080/api/v1/yuva/validate-otp';
const FORGOT_PASSWORD =
  'http://' + SERVER + ':8080/api/v1/yuva/forgot-password';
const VERIFY_OTP = 'http://' + SERVER + ':8080/api/v1/yuva/verify-link';
const RESET_PASSWORD = 'http://' + SERVER + ':8080/api/v1/yuva/reset-password';

export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async ({emailOrNumber,inputType}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const uri = FORGOT_PASSWORD + '?emailOrNumber=' + emailOrNumber;
      return await axios.post(uri, {}).then(resp => {
        if (resp.data.status) {
          inputType !== 'number' && Alert.alert('Alert',resp.data.message);
          return resp.data;
        } else {
          return rejectWithValue(resp.data);
        }
      });
    } catch (error) {
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
      return rejectWithValue(error.response.data);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetpassword',
  async (
    {emailOrNumber, hash, password},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const response = await axios.put(RESET_PASSWORD, {
        emailOrNumber,
        hash,
        password,
      });
      return response.data;
    } catch (error) {
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyThunk = createAsyncThunk(
  'auth/verifyThunk',
  async ({emailOrNumber, otp}, {fulfillWithValue, rejectWithValue}) => {
    try {
      return await axios
        .post(VERIFY_URI, {
          emailOrNumber,
          otp,
        })
        .then(resp => {
          if (resp?.data?.message === 'OTP_INVALID') {
            const errorMsg = {response: 'Invalid OTP'};
            return rejectWithValue(errorMsg);
          }
          return {...resp.data};
        });
    } catch (error) {
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({emailOrNumber, otp}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await axios.get(
        `${VERIFY_OTP}?emailOrNumber=${emailOrNumber}&hash=${otp}`,
      );
      return {response, hash: otp};
    } catch (error) {
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
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
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
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
      //return fulfillWithValue(data)
      try {
        Freshchat.resetUser();
      } catch (e) {}
      return value;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error);
    }
  },
);

export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (
    {email, name, number, numberOtp, password},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const response = await axios.post(SINGUP_URI, {
        email,
        name,
        number,
        numberOtp,
        password,
      });
      return response.data;
    } catch (error) {
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
      return rejectWithValue(error);
    }
  },
);

export const verifyUserExistenceThunk = createAsyncThunk(
  'auth/verifyEmailOrNumber',
  async ({emailOrNumber, isNumber}, {fulfillWithValue, rejectWithValue}) => {
    try {
      await axios.get(`${CHECK_URI}/${emailOrNumber}`);
      return null;
    } catch (error) {
      let existing = null;
      const {status} = error.response;
      if (status === 302) existing = true;
      else if (status === 404) existing = false;
      else existing = null;
      if (existing !== null) {
        return fulfillWithValue({
          type: isNumber ? 'numberExisting' : 'emailExisting',
          existing,
        });
      }
      return rejectWithValue({
        ...error,
        type: isNumber ? 'numberExisting' : 'emailExisting',
      });
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      jwt: '',
      status: false,
      roles: [],
      version: '1',
      id: '',
    },
    navigateToRegister: false,
    loggedIn: 'init',
    isAppReady: false,
    loading: false,
    apiError: false,
    apiErrorMessage: '',
    forgotStatus: false,
    emailExisting: null,
    numberExisting: null,
    signUpLoading: false,
    verifyLinkLoading: false,
    verifyLinkApiError: false,
    verifyLinkApiErrorMessage: false,
    verifyLinkSuccessOtp: '',
    forgotPasswordLoading: false,
    forgotPasswordApiError: false,
    forgotPasswordSuccess: false,
    changePasswordLoading: false,
    changePasswordApiError: false,
    changePasswordApiErrorMessage: '',
    changePasswordSuccess: false,
  },
  reducers: {
    hideErrorBox(state) {
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    resetForgotPassword(state) {
      state.forgotStatus = false;
    },
    resetHash(state) {
      state.verifyLinkSuccessOtp = '';
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.loggedIn = 'notLoggedIn';
      state.user.status = false;
      state.apiError = false;
    },
    [loginThunk.fulfilled]: (state, action) => {
      if (action.payload.data) {
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
        state.navigateToRegister = false;
      } else if (action.payload.data === null) {
        state.navigateToRegister = true;
        state.user.status = true;
      }
    },
    [loginThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.error.message;
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
    [logoutThunk.pending]: (state, {payload}) => {},
    [logoutThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = 'notLoggedIn';
      state.user.name = '';
      state.user.jwt = '';
    },
    [logoutThunk.rejected]: (state, {payload}) => {},
    [signupThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.signUpLoading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [signupThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.signUpLoading = false;
      const userData = {
        name: payload.data.name,
        jwt: payload.data.jwt,
        roles: payload.data.roles[0],
        id: payload.data.id,
      };
      state.user.jwt = payload.data.jwt;
      payload.jwt && setObject('user', userData);
      state.user.name = payload.data.name || 'User';
      state.user.roles = payload.data.roles[0];
      state.loggedIn = payload.data.jwt ? 'loggedIn' : state.loggedIn;
      state.user.status = true;
      state.user.id = payload.data.id;
      state.navigateToRegister = false;
    },
    [signupThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.signUpLoading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.response;
    },
    [verifySmsThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [verifySmsThunk.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [verifySmsThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
    },
    [verifyThunk.pending]: (state, action) => {
      state.loading = true;
      state.signUpLoading = true;
    },
    [verifyThunk.fulfilled]: (state, {payload}) => {
      state.signUpLoading = false;
      const userData = {
        name: payload.data.name,
        jwt: payload.data.jwt,
        roles: payload.data.roles[0],
        id: payload.data.id,
      };
      state.user.jwt = payload.data.jwt;
      payload.jwt && setObject('user', userData);
      state.user.name = payload.data.name || 'User';
      state.user.roles = payload.data.roles[0];
      state.loggedIn = payload.data.jwt ? 'loggedIn' : state.loggedIn;
      state.user.status = true;
      state.user.id = payload.data.id;
      state.navigateToRegister = false;
    },
    [verifyThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.response;
    },
    [forgotPassword.pending]: (state, {payload}) => {
      state.forgotPasswordLoading = true;
      state.forgotPasswordSuccess = false;
      state.forgotPasswordApiError = false;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.forgotPasswordLoading = false;
      state.forgotPasswordSuccess = true;
      state.forgotPasswordApiError = false;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.forgotPasswordLoading = false;
      state.forgotPasswordSuccess = false;
      state.forgotPasswordApiError = true;
    },
    [verifyUserExistenceThunk.pending]: (state, {meta}) => {
      const {isNumber} = meta.arg;
      let argumentType = isNumber ? 'numberExisting' : 'emailExisting';
      state[argumentType] = null;
    },
    [verifyUserExistenceThunk.fulfilled]: (state, {payload}) => {
      if (payload) {
        const {type, existing} = payload;
        state[type] = existing;
      }
    },
    [verifyUserExistenceThunk.rejected]: (state, {payload}) => {
      state[payload.type] = null;
    },
    [verifyOtp.pending]: (state, action) => {
      state.verifyLinkLoading = true;
      state.verifyLinkApiError = false;
      state.verifyLinkApiErrorMessage = '';
    },
    [verifyOtp.fulfilled]: (state, action) => {
      state.verifyLinkLoading = false;
      state.verifyLinkSuccessOtp = action.payload.hash;
    },
    [verifyOtp.rejected]: (state, action) => {
      state.verifyLinkLoading = false;
      state.verifyLinkApiError = true;
    },
    [resetPassword.pending]: state => {
      state.changePasswordLoading = true;
      state.changePasswordApiError = false;
      state.changePasswordSuccess = false;
    },
    [resetPassword.fulfilled]: (state, {payload}) => {
      state.changePasswordLoading = false;
      state.changePasswordApiError = false;
      state.changePasswordSuccess = true;
      const userData = {
        name: payload.data.name,
        jwt: payload.data.jwt,
        roles: payload.data.roles[0],
        id: payload.data.id,
      };
      state.user.jwt = payload.data.jwt;
      payload.jwt && setObject('user', userData);
      state.user.name = payload.data.name || 'User';
      state.user.roles = payload.data.roles[0];
      state.loggedIn = payload.data.jwt ? 'loggedIn' : state.loggedIn;
      state.user.status = true;
      state.user.id = payload.data.id;
      state.navigateToRegister = false;
    },
    [resetPassword.rejected]: () => {
      state.changePasswordLoading = false;
      state.changePasswordApiError = true;
      state.changePasswordSuccess = false;
    },
  },
});
export const {
  hideErrorBox,
  resetSignUp,
  resetForgotPassword,
  resetVerifyEmail,
  resetVerifySms,
  resetHash,
} = authSlice.actions;
export default authSlice.reducer;
