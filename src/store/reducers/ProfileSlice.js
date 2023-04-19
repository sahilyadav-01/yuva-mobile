import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';
import {setProfileStatus} from '../LocalStore';
import {
  loginThunk,
  signupThunk,
  verifyThunk,
  resetPassword,
  logoutThunk,
} from './AuthSlice';

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
      const queryParams = params?.uuid ? `?uuid=${params?.uuid}&version=${params?.version}` : ''
      const response = await YuvaService.get(`/relation/dropdown${queryParams}`);
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
      const queryParams = params?.uuid ? `?uuid=${params?.uuid}&version=${params?.version}` : ''
      const response = await YuvaService.get(`/relation${queryParams}`);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (
    {dob, gender, address, cityId, pinCode},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      await YuvaService.put('/profile', {
        dob,
        gender,
        address,
        cityId,
        pinCode,
      });
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
export const getUserAddress = createAsyncThunk(
  'user/address',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await YuvaService.get('/user/address');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const planIsSubscribedThunk = createAsyncThunk(
  'plan/isSubscribed',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await YuvaService.get('/plan/isSubscribed');
      return response;
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
  profileUpdated: false,
  selectedAddress:null,
  addressListing:null,
  isSubscribed:false,
  userAddress:[],
  activeRelationsError: false,
  relationsError: false,
  activeRelationsLoading: false,
  relationsLoading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileStatus(state, {payload}) {
      let profileStatus = payload === 'Y' ? true : false;
      state.profileUpdated = profileStatus;
    },
    saveCheckedAddress(state,{payload}){
      state.selectedAddress=payload;
    },
    resetAddress(state){
      state.selectedAddress=null;
    },
    AddressListing(state,{payload}){
      state.addressListing=payload;
    },
  },
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
      state.relationsError = false;
      state.relationsLoading = true;
    },
    [getRelations.fulfilled]: (state, {payload}) => {
      state.relations = payload.data.data;
      state.apiError = false;
      state.relationsError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.relationsLoading = false;
      state.relationAdded = false;
      state.relationId = payload?.data.data || [];
      state.relationsErrorMessage = '';
      state.enableAddMember = payload.data.data.enableAddMember;
    },
    [getRelations.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.relationsError = true;
      state.loading = false;
      state.relationsLoading = false;
      state.relationAdded = false;
      state.apiErrorMessage = payload.message;
      state.status = false;
      state.relationsErrorMessage = payload.message;
    },
    [getActiveRelations.pending]: state => {
      state.loading = true;
      state.activeRelationsError = false;
      state.activeRelationsLoading = true;
    },
    [getActiveRelations.fulfilled]: (state, {payload}) => {
      state.activeRelations = payload.data.data;
      state.apiError = false;
      state.activeRelationsError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.activeRelationsLoading = false;
      state.activeRelationsErrorMessage = '';
    },
    [getActiveRelations.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.activeRelationsError = true;
      state.loading = false;
      state.relationsLoading = false;
      state.apiErrorMessage = payload.message;
      state.status = false;
      state.activeRelationsErrorMessage = payload.message;
    },
    [updateProfile.pending]: state => {
      state.loading = true;
      state.profileUpdated = false;
    },
    [updateProfile.fulfilled]: state => {
      state.userDetails = null;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = true;
      state.dataUpdated = true;
      state.profileUpdated = true;
      setProfileStatus('Y');
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

    [getUserAddress.pending]: state => {
      state.loading = true;
    },
    [getUserAddress.fulfilled]: (state, {payload}) => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.userAddress = payload?.data?.data || [];
    },
    [getUserAddress.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.message;
    },
    [loginThunk.fulfilled]: (state, {payload}) => {
      if (payload.data) state.profileUpdated = payload.data.profileUpdated;
    },
    [signupThunk.fulfilled]: (state, {payload}) => {
      if (payload.data) state.profileUpdated = payload.data.profileUpdated;
    },
    [verifyThunk.fulfilled]: (state, {payload}) => {
      if (payload.data) state.profileUpdated = payload.data.profileUpdated;
    },
    [resetPassword.fulfilled]: (state, {payload}) => {
      if (payload.data) state.profileUpdated = payload.data.profileUpdated;
    },
    [logoutThunk.fulfilled]: state => {
      state.profileUpdated = false;
    },
    /**
     * planIsSubscribed
     */
    [planIsSubscribedThunk.pending]: state => {
      state.loading = true;
    },
    [planIsSubscribedThunk.fulfilled]: (state, {payload}) => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.isSubscribed = payload?.data?.data;
    },
    [planIsSubscribedThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.message;
    },
  },
});

export const {updateProfileStatus,saveCheckedAddress,AddressListing} = profileSlice.actions;
export const profileInit = profileSlice.getInitialState();
export default profileSlice.reducer;
