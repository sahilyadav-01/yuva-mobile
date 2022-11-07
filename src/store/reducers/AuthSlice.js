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

/**
 * Thunks
 */

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
      console.log(error);
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
      console.log(value);
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
      console.log(value);
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
  async ({email, number, password}, {fulfillWithValue, rejectWithValue}) => {
    try {
      axios.post(SINGUP_URI, {email, number, password}).then(res => res.data);
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
  },
  reducers: {
    hideErrorBox(state) {
      state.apiError = false;
      state.apiErrorMessage = '';
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
      // console.log(action.payload)
      const userData = {name: action.payload.name, jwt: action.payload.jwt};
      setObject('user', userData);
      state.user.name = action.payload.name;
      state.user.jwt = action.payload.jwt;
      state.loggedIn = 'loggedIn';
    },
    [loginThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      console.log(action.payload);
      state.apiErrorMessage = action.payload.response;
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
    [initialLoad.rejected]: (state, {payload}) => {
      console.log('rejected');
    },

    /**
     * Logout thunk handler
     */

    [logoutThunk.pending]: (state, {payload}) => {},
    [logoutThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = 'init';
      state.user.name = '';
      state.user.jwt = '';
    },
    [logoutThunk.rejected]: (state, {payload}) => {
      console.log('rejected');
    },

    /**
     * signup thunk handler
     */

    [signupThunk.pending]: (state, {payload}) => {
      console.log('pending');
      state.loading = true;
    },
    [signupThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      console.log('completed');
    },
    [signupThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      console.log('rejected');
    },
  },
});

export const {hideErrorBox} = authSlice.actions;

export default authSlice.reducer;
