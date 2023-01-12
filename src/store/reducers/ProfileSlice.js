import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

const profileEndpoint = 'http://' + SERVER + ':8080/api/v1/yuva/profile';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await axios.get(profileEndpoint, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({jwt, dob, gender, userDetails}, {fulfillWithValue, rejectWithValue}) => {
    try {
      await axios.put(
        `${profileEndpoint}/update`,
        {
          dob,
          gender,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  loading: true,
  error: null,
  userDetails: null,
  activeRelations: [],
  relations: [],
  dataUpdated: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.pending]: state => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, {payload}) => {
      state.userDetails = payload.data.data;
      state.error = null;
      state.loadUserData = false;
      state.loading = false;
      state.dataUpdated = false;
    },
    [getProfile.rejected]: (state, {payload}) => {
      state.error = payload;
      state.userDetails = null;
      state.loadUserData = false;
      state.loading = false;
    },
    [updateProfile.pending]: state => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, {payload}) => {
      state.userDetails = null;
      state.error = null;
      state.loading = true;
      state.dataUpdated = true;
    },
    [updateProfile.rejected]: (state, {payload}) => {
      state.error = payload;
      state.userDetails = null;
      state.loading = false;
    },
  },
});

export const {action} = profileSlice.actions;
export default profileSlice.reducer;
