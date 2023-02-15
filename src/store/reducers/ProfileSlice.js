import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const profileThunk = createAsyncThunk(
  'profile/profileThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await YuvaService.get('/profile');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getActiveRelations = createAsyncThunk(
  'profile/getActiveRelations',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await YuvaService.get('/relation/active');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getRelations = createAsyncThunk(
  'profile/getRelations',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await YuvaService.get('/relation');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({dob, gender, address, cityId, pinCode}, {fulfillWithValue, rejectWithValue}) => {
    try {
      await YuvaService.put('/profile', {dob, gender, address, cityId, pinCode});
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addRelation = createAsyncThunk(
  'profile/addRelation',
  async ({age, name, relation}, {fulfillWithValue, rejectWithValue}) => {
    try {
      await YuvaService.post('/relation', {
        age,
        name,
        relation,
      });
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
  relationId: [],
  dataUpdated: false,
  relationAdded: false,
  userDetailsErrorMessage: '',
  activeRelationsErrorMessage: '',
  relationsErrorMessage: '',
  enableAddMember: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: {
    [profileThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [profileThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.profile = payload.data;
      state.userDetails = payload.data.data;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.dataUpdated = false;
      state.userDetailsErrorMessage = '';
    },
    [profileThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.userDetails = null;
      state.loading = false;
      state.dataUpdated = false;
      state.apiErrorMessage = payload.message;
      state.status = false;
      state.userDetailsErrorMessage = payload.message;
    },
    [getRelations.pending]: state => {
      state.loading = true;
    },
    [getRelations.fulfilled]: (state, {payload}) => {
      state.relations = payload.data.data.relativeResponseDto;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.relationAdded = false;
      state.relationId = payload?.data.data || [];
      state.relationsErrorMessage = '';
      state.enableAddMember = payload.data.data.enableAddMember;
    },
    [getRelations.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.relationAdded = false;
      state.apiErrorMessage = payload.message;
      state.status = false;
      state.relationsErrorMessage = payload.message;
    },
    [getActiveRelations.pending]: state => {
      state.loading = true;
    },
    [getActiveRelations.fulfilled]: (state, {payload}) => {
      state.activeRelations = payload.data.data;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.activeRelationsErrorMessage = '';
    },
    [getActiveRelations.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.message;
      state.status = false;
      state.activeRelationsErrorMessage = payload.message;
    },
    [updateProfile.pending]: state => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: state => {
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
      state.apiErrorMessage = payload.message;
      state.status = false;
    },
    [addRelation.pending]: state => {
      state.loading = true;
    },
    [addRelation.fulfilled]: state => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = true;
      state.relationAdded = true;
    },
    [addRelation.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.message;
      state.status = false;
    },
  },
});

export const profileInit = profileSlice.getInitialState();
export default profileSlice.reducer;
