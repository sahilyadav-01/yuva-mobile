import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

/**
 * URIs
 */
// const LOCAL_SERVER='localhost'
// const SERVER = LOCAL_SERVER;
const NEW_APPOINTMENT =
  'http://' + SERVER + ':8080/api/v1/yuva/appointment?fromWeb=false';
const USER_APPOINTMENTS =
  'http://' + SERVER + ':8080/api/v1/yuva/appointment/user';
const CANCEL_APPOINTMENT =
  'http://' + SERVER + ':8080/api/v1/yuva/appointment/';

/**
 * Thunks
 */

export const newAppointmentThunk = createAsyncThunk(
  'appointment/newAppointment',
  async (
    {doctorId, description, jwt, epoch,selected},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const data = {
        doctorId,
        description,
        relationId:selected,
        timeSlot: epoch,      
      };
      return await axios
        .post(NEW_APPOINTMENT, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        })
        .then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

/**
 * Cancel appointment
 */
export const cancelAppointmentThunk = createAsyncThunk(
  'appointment/cancelAppointment',
  async ({id, jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const data = {};
      return await axios
        .put(CANCEL_APPOINTMENT + id + '?cancelled=true', data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        })
        .then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);


export const rescheduleAppointmentThunk = createAsyncThunk(
  'appointment/rescheduleAppointment',
  async ({id, jwt, timeSlot}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const data = {};
      return await axios
        .put(
          CANCEL_APPOINTMENT + id + '?cancelled=false&timeSlot=' + timeSlot,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: authToken,
            },
          },
        )
        .then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

export const allAppointmentThunk = createAsyncThunk(
  'appointment/allAppointment',
  async ({jwt, isActive}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${USER_APPOINTMENTS}/${isActive}`;
      return await axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        })
        .then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

/**
 * InitialState
 */
const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  homeRefresh: false,
  appointment: {
    name: '',
    specialization: '',
    doctorId: '',
  },
  userAppointments: [],
  currentAppointment: {},
  newMessage:'',
  appointmentDescription:'',
  rescheduleAppointment:'',
  errorAppointment:'',
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    resetMessage(state){
   
      state.newMessage=null;
      state.appointmentDescription=null;
       state.rescheduleAppointment=null;
       state.errorAppointment=null;
     
    },
    newAppointment(state, {payload}) {
      state.appointment['name'] = payload.name;
      state.appointment['specialization'] = payload.specialization;
      state.appointment['doctorId'] = payload.doctorId;
    },
    currentAppointment(state, {payload}) {
      state.currentAppointment['id'] = payload.id;
      state.currentAppointment['doctorName'] = payload.doctorName;
      state.currentAppointment['address'] = payload.address;
      state.currentAppointment['status'] = payload.status;
      state.currentAppointment['speciality'] = payload.speciality;
      state.currentAppointment['description'] = payload.description;
      state.currentAppointment['slot'] = payload.slot;
      state.currentAppointment['otp'] = payload.otp;
      state.currentAppointment['hospitalName'] = payload.hospitalName;
    },
  },
  extraReducers: {
    [newAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
 
    },
    [newAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.homeRefresh = true;
      state.newMessage=payload;
    },
    [newAppointmentThunk.rejected]: (state, {payload}) => {
      state.appointmentDescription=payload;
    },

    [allAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [allAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.userAppointments = payload.data;
      state.homeRefresh = false;
    },
    [allAppointmentThunk.rejected]: (state, {payload}) => {},

    [cancelAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [cancelAppointmentThunk.fulfilled]: (state, {payload}) => {},
    [cancelAppointmentThunk.rejected]: (state, {payload}) => {},

    [rescheduleAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [rescheduleAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.rescheduleAppointment=payload;
    },
    [rescheduleAppointmentThunk.rejected]: (state, {payload}) => {
      state.errorAppointment=payload;
    },
  },
});

export const {newAppointment, currentAppointment,resetMessage,resetAppointments} = appointmentSlice.actions;
export const appointmentInit = appointmentSlice.getInitialState();

export default appointmentSlice.reducer;
