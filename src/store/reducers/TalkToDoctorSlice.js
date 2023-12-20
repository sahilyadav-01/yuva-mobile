import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

export const getAppointmentThunk = createAsyncThunk(
  'talkToDoctor/getAppointmentThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/talkToDr/user';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (e) {
      return;
    }
  },
);

export const addRequestThunk = createAsyncThunk(
  'talkToDoctor/addRequestThunk',
  async ({data}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/talkToDr';
      const response = await YuvaService.post(endpoint, data);
      return response.data;
    } catch (e) {
      return;
    }
  },
);

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  consultationList: [],
  isRequested: false,
  id: null,
  programData:''
};

const talkToDoctorSlice = createSlice({
  name: 'talkToDoctor',
  initialState,
  reducers: {
    clearRequest(state) {
      state.isRequested = false;
    },
    programOrPlanData(state,{payload}){
      state.programData=payload;
    }
  },
  extraReducers: {
    [getAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [getAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.consultationList = payload.data;
    },
    [getAppointmentThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = payload.error;
    },
    [addRequestThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.isRequested = false;
      state.id = null;
    },
    [addRequestThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.isRequested = true;
      state.id = payload.id;
    },
    [addRequestThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = payload.error;
      state.isRequested = false;
      state.id = null;
    },
  },
});

export const {clearRequest,programOrPlanData} = talkToDoctorSlice.actions;
export const talkToDoctorInit = talkToDoctorSlice.getInitialState();
export default talkToDoctorSlice.reducer;
