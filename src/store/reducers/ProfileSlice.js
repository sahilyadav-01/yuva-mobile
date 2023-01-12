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
  async ({jwt, userId}, {fulfillWithValue, rejectWithValue}) => {
    const id = 7;
    try {
      const response = await axios.get(`${profileEndpoint}/employee/relation`, {
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
  profile: {
    companyName: '',
    dob: '',
    email: '',
    gender: '',
    name: '',
    number: '',
  },
  userDetails: null,
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  id: '',
  status: false,
  activeRelations: [],
  relations: [],
  dataUpdated: false,
  relationAdded: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: {
    [getProfile.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [getProfile.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.profile = action.payload.data;
      state.userDetails = payload.data.data;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.dataUpdated = false;
    },
    [getProfile.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.userDetails = null;
      state.loading = false;
      state.dataUpdated = false;
      state.apiErrorMessage = action.payload.message;
      state.status = false;
    },
    [getRelations.pending]: state => {
      state.loading = true;
    },
    [getRelations.fulfilled]: (state, {payload}) => {
      state.relations = payload.data.data;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.relationAdded = false;
    },
    [getRelations.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.relationAdded = false;
      state.apiErrorMessage = action.payload.message;
      state.status = false;
    },
    [getActiveRelations.pending]: state => {
      state.loading = true;
    },
    [getActiveRelations.fulfilled]: (state, {payload}) => {
      state.activeRelations = payload.data.data;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
    },
    [getActiveRelations.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = action.payload.message;
      state.status = false;
    },
    [updateProfile.pending]: state => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, {payload}) => {
      state.userDetails = null;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = true;
      state.dataUpdated = true;
    },
    [updateProfile.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.userDetails = null;
      state.loading = false;
      state.apiErrorMessage = action.payload.message;
      state.status = false;
    },
    [addRelation.pending]: state => {
      state.loading = true;
    },
    [addRelation.fulfilled]: (state, {payload}) => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = true;
      state.relationAdded = true;
    },
    [addRelation.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = action.payload.message;
      state.status = false;
    },
  },
});

export default profileSlice.reducer;
