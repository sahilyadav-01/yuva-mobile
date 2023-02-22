import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const newAppointmentThunk = createAsyncThunk(
  'appointment/newAppointment',
  async (
    {
      alternateContactNumber,
      description,
      doctorId,
      plan,
      programOrPlanUuid,
      selected: relationId,
      epoch: timeSlot,
      userPlanVersion,
      version,
    },
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const data = {
        alternateContactNumber,
        description,
        doctorId,
        plan,
        programOrPlanUuid,
        relationId,
        timeSlot,
        userPlanVersion,
        version,
      };
      const endpoint = '/appointment?fromWeb=false';
      const response = await YuvaService.post(endpoint, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const cancelAppointmentThunk = createAsyncThunk(
  'appointment/cancelAppointment',
  async ({id}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const data = {};
      const endpoint = `/appointment/cancel/${id}`;
      const response = await YuvaService.put(endpoint, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const rescheduleAppointmentThunk = createAsyncThunk(
  'appointment/rescheduleAppointment',
  async ({id, timeSlot}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const data = {};
      const endpoint = `/appointment/reschedule/${id}?timeSlot=${timeSlot}`;
      const response = await YuvaService.put(endpoint, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const allAppointmentThunk = createAsyncThunk(
  'appointment/allAppointment',
  async ({isActive}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const url = `/appointment/user/${isActive}`;
      const response = await YuvaService.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

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
  newMessage: '',
  appointmentDescription: '',
  rescheduleAppointment: '',
  errorAppointment: '',
};
const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    resetMessage(state) {
      state.newMessage = null;
      state.appointmentDescription = null;
      state.rescheduleAppointment = null;
      state.errorAppointment = null;
    },
    newAppointment(state, {payload}) {
      state.appointment['name'] = payload.name;
      state.appointment['specialization'] = payload.specialization;
      state.appointment['doctorId'] = payload.doctorId;
    },
    currentAppointment(state, {payload}) {
      console.log(payload, 'allu arjun');
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
    resetAppointments(state) {
      state.userAppointments = [];
    },
  },
  extraReducers: {
    [newAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [newAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.homeRefresh = true;
      state.newMessage = payload;
    },
    [newAppointmentThunk.rejected]: (state, {payload}) => {
      state.appointmentDescription = payload;
    },

    [allAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [allAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.userAppointments = payload.data;
      state.homeRefresh = false;
    },
    [allAppointmentThunk.rejected]: (state, {payload}) => {
      state.userAppointments = [];
    },

    [cancelAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [cancelAppointmentThunk.fulfilled]: (state, {payload}) => {},
    [cancelAppointmentThunk.rejected]: (state, {payload}) => {},

    [rescheduleAppointmentThunk.pending]: (state, {payload}) => {
      state.loading = false;
    },
    [rescheduleAppointmentThunk.fulfilled]: (state, {payload}) => {
      state.rescheduleAppointment = payload;
    },
    [rescheduleAppointmentThunk.rejected]: (state, {payload}) => {
      state.errorAppointment = payload;
    },
  },
});

export const {
  newAppointment,
  currentAppointment,
  resetMessage,
  resetAppointments,
} = appointmentSlice.actions;
export const appointmentInit = appointmentSlice.getInitialState();

export default appointmentSlice.reducer;
