import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { SERVER } from "../../utils/utils";

const GET_APPOINTMENT =   'http://' + SERVER + ':8080/api/v1/yuva/talkToDr/user';
const ADD_REQUEST = 'http://' + SERVER + ':8080/api/v1/yuva/talkToDr';

export const getAppointmentThunk = createAsyncThunk(
  'talkToDoctor/getAppointmentThunk',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;
      return await axios
        .get(GET_APPOINTMENT, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          }
        })
        .then(resp => resp.data);
    } catch(e) {
      return;
    }
  }
);

export const addRequestThunk = createAsyncThunk(
  'talkToDoctor/addRequestThunk',
  async ({jwt, data}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;
      return await axios
        .post(ADD_REQUEST, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          }
        })
        .then(resp => resp.data);
    } catch (e) {
      return;
    }
  }
);

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  consultationList: [],
  isRequested: false,
  id: null,
};

const talkToDoctorSlice = createSlice({
  name: 'talkToDoctor',
  initialState,
  reducers: {
    clearRequest(state) {
      state.isRequested = false;
    },
  },
  extraReducers: {
    [getAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [getAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.apiError=false;
      state.apiErrorMessage = '';
      state.consultationList = payload.data;
    },
    [getAppointmentThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError=true;
      state.apiErrorMessage = payload.error;
    },
    [addRequestThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.isRequested = false;
      state.id = null;
    },
    [addRequestThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.apiError=false;
      state.apiErrorMessage = '';
      state.isRequested = true;
      state.id = payload.id;
    },
    [addRequestThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError=true;
      state.apiErrorMessage = payload.error;
      state.isRequested = false;
      state.id = null;
    },
  }
});

export const { clearRequest } = talkToDoctorSlice.actions;
export default talkToDoctorSlice.reducer;