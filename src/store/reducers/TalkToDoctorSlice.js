import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { SERVER } from "../../utils/utils";

const GET_APPOINTMENT =   'http://' + SERVER + ':8080/api/v1/yuva/talkToDr/user';
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

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  consultationList: [],
};

const talkToDoctorSlice = createSlice({
  name: 'talkToDoctor',
  initialState,
  reducers: {

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
  }
});

export default talkToDoctorSlice.reducer;