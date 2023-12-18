import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  setObject,
  getObject,
  removeObject,
  setJwt,
  clearJwt,
  setProfileStatus,
  clearProfileStatus,
  setRole,
  clearRole,
  setRefreshToken,
  clearRefreshToken,
} from '../LocalStore';
import {Freshchat} from 'react-native-freshchat-sdk';
import { YuvaService } from '../../../App';
import {handleNetworkError} from '../../utils/utils';
import { Alert } from 'react-native';

export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async ({emailOrNumber,inputType}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/forgot-password?emailOrNumber=${emailOrNumber}`;
      const response = await YuvaService.post(endpoint, {});
      if (response.data.status) {
        inputType !== 'number' && Alert.alert('Alert',response.data.message);
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    }
    catch (error) {
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
      const endpoint = '/reset-password';
      const response = await YuvaService.put(endpoint, {
        emailOrNumber,
        hash,
        password,
      });
      if(response?.data?.data?.roles?.includes('RETAIL_USER','EMPLOYEE')){
        return {...response.data};
      }
      const error = {error: {message: 'Unauthorized User'}};
      handleNetworkError(
        403, 
        error.error.message ?? null,
      );
      return rejectWithValue(error);
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
  async (
    {emailOrNumber, otp },
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/validate-otp-login`;
      const response = await YuvaService.post(endpoint, {emailOrNumber, otp});
      if (response?.data?.message === 'OTP_INVALID') {
        const errorMsg = {response: 'Invalid OTP'};
        return rejectWithValue(errorMsg);
      }
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

export const verifyChangeThunk = createAsyncThunk(
  'auth/verifyChangeThunk',
  async (
    {emailOrNumber, otp, verificationType},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/validate-otp`;
      const response = await YuvaService.post(endpoint, {emailOrNumber, otp});
      return {...response.data, verificationType};
    } catch(error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({emailOrNumber, otp}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/verify-link?emailOrNumber=${emailOrNumber}&hash=${otp}`
      const response = await YuvaService.get(endpoint);
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
      const endpoint = `/generate-sms-otp?number=${number}`;
      const response = await YuvaService.get(endpoint, {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const verifyEmailThunk = createAsyncThunk(
  'auth/verifyEmailThunk',
  async ({email, name}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/generate-email-otp`;
      const response = await YuvaService.post(endpoint, {
        email: email,
        name: name
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async ({email, password,type}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/login`;
      const response = await YuvaService.post(endpoint, {
        emailOrNumber: email,
        password: password
      });
      if(response?.data?.data === null || response?.data?.data?.roles?.includes('RETAIL_USER','EMPLOYEE')) {
        return {...response.data,type};
      }
      const error = {error: {message: 'Unauthorized User'}};
      handleNetworkError(
        403, 
        error.error.message ?? null,
      );
      return rejectWithValue(error);
      
    } catch (error) {
      handleNetworkError(
        error.response.status,
        error.response.data.errorMessage ?? null,
      );
      return rejectWithValue(error.response.data);
    }
  },
);

export const refreshThunk = createAsyncThunk(
  'auth/refreshThunk',
  async (token, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/refresh-token`;
      const response = await YuvaService.post(endpoint, {token});
      await clearJwt();
      await clearRefreshToken();
      await setJwt(response?.data?.data.jwt);
      await setRefreshToken(response?.data?.data.refreshToken);
      await setRole(response?.data?.data.roles.includes('EMPLOYEE'));
      await setProfileStatus(response?.data?.data.profileUpdated ? 'Y' : 'N');
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
    {email, name, number, numberOtp, password},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/signup`;
      const response = await YuvaService.post(endpoint, {
        name,
        number,
        otp: numberOtp,
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
      const endpoint = `/check/${emailOrNumber}`;
      await YuvaService.get(endpoint);
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
    type:'',
    isEmployee:null,
    numberVerified: false,
    numberError: false,
    numberErrorMsg: '',
    emailVerified: false,
    emailError: false,
    emailErrorMsg: '',
    otpNumber: '',
    otpEmail: '',
    otpErrorMessage:'',
    unauthorised: false,
    resetRoute: 0,
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
    resetExistingNumber(state) {
      state.numberExisting = null;
    },
    resetExistingEmail(state) {
      state.emailExisting = null;
    },
    checkRole(state, {payload}) {
      state.isEmployee = payload;
    },
    resetNumberVerified(state){
      state.numberVerified = false;
    },
    resetEmailVerified(state){
      state.emailVerified = false;
    },
    resetNumberOtp(state){
      state.otpNumber = ''
    },
    resetEmailOtp(state){
      state.otpEmail = '';
    },
    setLoginState(state){
      state.loggedIn = 'loggedIn';
    },
    resetOtpMessage(state) {
      state.otpErrorMessage = '';
    },
    setUnauthorisedStatus(state,{payload}){
      state.unauthorised = payload;
    },
    resetRoute(state,{payload = 0}){
      state.resetRoute = payload;
    }
  },
  extraReducers: {
    [loginThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.loggedIn = 'notLoggedIn';
      state.user.status = false;
      state.apiError = false;
      state.type = ''
    },
    [loginThunk.fulfilled]: (state, action) => {
      if (action.payload.data) {
        setJwt(action.payload.data.jwt);
        setRefreshToken(action.payload.data.refreshToken);
        setRole(action.payload.data.roles.includes('EMPLOYEE'));
        setProfileStatus(action.payload.data.profileUpdated ? 'Y' : 'N')
        state.isEmployee = action.payload.data.roles.includes('EMPLOYEE');
        state.loading = false;
        const userData = {
          name: action.payload.data.name,
          jwt: action.payload.data.jwt,
          roles: action.payload.data.roles[0],
          id: action.payload.data.id,
        };
        action.payload.data.jwt && setObject('user', userData);
        state.user.name = action.payload.data.name || 'User';
        state.user.jwt = action.payload.data.jwt;
        state.user.roles = action.payload.data.roles[0];
        state.loggedIn = action.payload.data.jwt ? 'loggedIn' : state.loggedIn;
        state.user.status = true;
        state.user.id = action.payload.data.id;
        state.navigateToRegister = false;
        state.type = action.payload.type;
        state.unauthorised = false;
      } else if (action.payload.data === null) {
        state.navigateToRegister = true;
        state.user.status = true;
        state.type = action.payload.type;
      }
    },
    [loginThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.error.message;
    },
    [refreshThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.loggedIn = 'notLoggedIn';
      state.user.status = false;
      state.apiError = false;
      state.type = ''
    },
    [refreshThunk.fulfilled]: (state, action) => {
      if (action.payload.data) {
        state.isEmployee = action.payload.data.roles.includes('EMPLOYEE');
        state.loading = false;
        const userData = {
          name: action.payload.data.name,
          jwt: action.payload.data.jwt,
          roles: action.payload.data.roles[0],
          id: action.payload.data.id,
        };
        action.payload.data.jwt && setObject('user', userData);
        state.user.name = action.payload.data.name || 'User';
        state.user.jwt = action.payload.data.jwt;
        state.user.roles = action.payload.data.roles[0];
        state.loggedIn = action.payload.data.jwt ? 'loggedIn' : state.loggedIn;
        state.user.status = true;
        state.user.id = action.payload.data.id;
        state.navigateToRegister = false;
        state.type = action.payload.type;
        state.unauthorised = false;
        state.resetRoute+= 1;
      } else if (action.payload.data === null) {
        state.navigateToRegister = true;
        state.user.status = true;
        state.type = action.payload.type;
      }
    },
    [refreshThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.error.message;
      state.resetRoute = -1;
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
      state.user.status = false;
      state.loggedIn = 'notLoggedIn';
      state.user.name = '';
      state.user.jwt = '';
      state.isAppReady = true;
      state.isEmployee = null;
      clearJwt();
      clearRefreshToken();
      clearRole();
      clearProfileStatus();
    },
    [logoutThunk.rejected]: (state, {payload}) => {},
    [signupThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.signUpLoading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [signupThunk.fulfilled]: (state, {payload}) => {
      if (payload.data) {
      setJwt(payload.data.jwt);
      setRefreshToken(payload.data.refreshToken);
      setRole(payload.data.roles.includes('EMPLOYEE'));
      setProfileStatus(payload.data.profileUpdated ? 'Y' : 'N');
      state.isEmployee = payload.data.roles.includes('EMPLOYEE');
      state.loading = false;
      state.signUpLoading = false;
      const userData = {
        name: payload.data.name,
        jwt: payload.data.jwt,
        roles: payload.data.roles[0],
        id: payload.data.id,
      };
      state.user.jwt = payload.data.jwt;
      payload.data.jwt && setObject('user', userData);
      state.user.name = payload.data.name || 'User';
      state.user.roles = payload.data.roles[0];
      state.loggedIn = payload.data.jwt ? 'loggedIn' : state.loggedIn;
      state.user.status = true;
      state.user.id = payload.data.id;
      state.navigateToRegister = false;
      state.unauthorised = false;
    }
    else if (payload.data === null) {
      state.navigateToRegister = true;
      state.user.status = true;
    }
    },
    [signupThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.signUpLoading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.response;
    },
    [verifyEmailThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.emailError = false;
      state.emailErrorMsg = '';
    },
    [verifyEmailThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.emailError = false;
      state.emailErrorMsg = '';
    },
    [verifyEmailThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.emailError = true;
      state.emailErrorMsg = action.payload.errorMessage;
    },
    [verifySmsThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.numberError = false;
      state.numberErrorMsg = '';
    },
    [verifySmsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.numberError = false;
      state.numberErrorMsg = '';
    },
    [verifySmsThunk.rejected]: (state, action) => {
      state.user.status = false;
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
      state.numberError = true;
      state.numberErrorMsg = action.payload.errorMessage;
    },
    [verifyChangeThunk.pending]: (state, {meta}) => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.numberVerified = meta?.arg?.verificationType === 'number' ? false: state.numberVerified;
      state.emailVerified = meta?.arg?.verificationType === 'email' ? false: state.emailVerified;
      state.otpErrorMessage = '';
    },
    [verifyChangeThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.numberVerified = action?.payload?.verificationType === 'number' ? action.payload.data: state.numberVerified;
      state.emailVerified = action?.payload?.verificationType === 'email' ? action.payload.data: state.emailVerified;
      state.otpNumber = action?.payload?.verificationType === 'number' ? action?.meta?.arg?.otp: state.otpNumber;
      state.otpEmail = action?.payload?.verificationType === 'email'? action?.meta?.arg?.otp: state.otpEmail;
      state.otpErrorMessage = '';
    },
    [verifyChangeThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.errorMessage;
      state.numberVerified = action?.meta?.arg?.verificationType === 'number'? false: state.numberVerified;
      state.emailVerified = action?.meta?.arg?.verificationType === 'email'? false: state.emailVerified;
      state.otpErrorMessage = action.payload.errorMessage ?? action.payload.otp ?? 'Invalid otp';
    },
    [verifyThunk.pending]: (state, action) => {
      state.loading = true;
      state.signUpLoading = true;
      state.user.status = false;
    },
    [verifyThunk.fulfilled]: (state, {payload}) => {
      if(payload.data){
      setJwt(payload.data.jwt);
      setRefreshToken(payload.data.refreshToken);
      setRole(payload.data.roles.includes('EMPLOYEE'));
      setProfileStatus(payload.data.profileUpdated ? 'Y' : 'N');
      state.isEmployee = payload.data.roles.includes('EMPLOYEE');
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
      state.unauthorised = false;
    }
      else if (payload.data === null) {
        state.navigateToRegister = true;
        state.user.status = true;
      }
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
      if(action?.payload?.response?.data?.data){
      state.verifyLinkLoading = false;
      state.verifyLinkSuccessOtp = action.payload.hash;
      }
      else{
        Alert.alert('Alert','OTP is Incorrect/Expired')
      }
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
      if(payload.data){
      state.changePasswordLoading = false;
      state.changePasswordApiError = false;
      state.changePasswordSuccess = true;
      const userData = {
        name: payload.data.name,
        jwt: payload.data.jwt,
        roles: payload.data.roles[0],
        id: payload.data.id,
      };
      setJwt(payload.data.jwt);
      setRefreshToken(payload.data.refreshToken);
      setRole(payload.data.roles.includes('EMPLOYEE'));
      setProfileStatus(payload.data.profileUpdated ? 'Y' : 'N');
      state.isEmployee = payload.data.roles.includes('EMPLOYEE');
      state.user.jwt = payload.data.jwt;
      payload.jwt && setObject('user', userData);
      state.user.name = payload.data.name || 'User';
      state.user.roles = payload.data.roles[0];
      state.loggedIn = payload.data.jwt ? 'loggedIn' : state.loggedIn;
      state.user.status = true;
      state.user.id = payload.data.id;
      state.navigateToRegister = false;
      state.unauthorised = false;
    }
    else if (payload.data === null) {
      state.navigateToRegister = true;
      state.user.status = true;
    }
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
  resetExistingNumber,
  resetExistingEmail,
  checkRole,
  resetEmailVerified,
  resetNumberVerified,
  resetEmailOtp,
  resetNumberOtp,
  setLoginState,
  resetOtpMessage,
  setUnauthorisedStatus,
  resetRoute,
} = authSlice.actions;
export const authInit = authSlice.getInitialState();
export default authSlice.reducer;
