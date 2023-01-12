import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

const profileEndpoint = 'http://' + SERVER + ':8080/api/v1/yuva';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await axios.get(`${profileEndpoint}/profile`, {
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

export const getActiveRelations = createAsyncThunk(
  'profile/getActiveRelations',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await axios.get(
        `${profileEndpoint}/employee/relation/active`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getRelations = createAsyncThunk(
  'profile/getRelations',
  async ({jwt,userId}, {fulfillWithValue, rejectWithValue}) => {
    const id = 7;
    try {
      const response = await axios.get(
        `${profileEndpoint}/employee/relation`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (
    {jwt, dob, gender, userDetails},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      await axios.put(
        `${profileEndpoint}/profile/update`,
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

export const addRelation = createAsyncThunk(
  'profile/addRelation',
  async ({jwt, age, name, relation}, {fulfillWithValue, rejectWithValue}) => {
    try {
      await axios.post(
        `${profileEndpoint}/employee/relation`,
        {age, name, relation},
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
  relationAdded: false,
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
      state.dataUpdated = false;
    },
    [getRelations.pending]: state => {
      state.loading = true;
    },
    [getRelations.fulfilled]: (state, {payload}) => {
      state.relations = payload.data.data;
      state.error = null;
      state.loading = false;
      state.relationAdded = false;
    },
    [getRelations.rejected]: (state, {payload}) => {
      state.error = payload;
      state.loading = false;
      state.relationAdded = false;
    },
    [getActiveRelations.pending]: state => {
      state.loading = true;
    },
    [getActiveRelations.fulfilled]: (state, {payload}) => {
      state.activeRelations = payload.data.data;
      state.error = null;
      state.loading = false;
    },
    [getActiveRelations.rejected]: (state, {payload}) => {
      state.error = payload;
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
    [addRelation.pending]: state => {
      state.loading = true;
    },
    [addRelation.fulfilled]: (state, {payload}) => {
      state.error = null;
      state.loading = true;
      state.relationAdded = true;
    },
    [addRelation.rejected]: (state, {payload}) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {action} = profileSlice.actions;
export default profileSlice.reducer;
