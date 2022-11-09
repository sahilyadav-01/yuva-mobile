import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {SERVER}  from '../../utils/utils'

/**
 * URIs
 */
// const LOCAL_SERVER='localhost'
// const SERVER = LOCAL_SERVER;
const NEW_APPOINTMENT = "http://"+SERVER+":8080/api/v1/yuva/appointment?fromWeb=false"
const USER_APPOINTMENTS = "http://"+SERVER+":8080/api/v1/yuva/appointment/user"
const CANCEL_APPOINTMENT = "http://"+SERVER+":8080/api/v1/yuva/appointment/"



/**
 * Thunks
 */

export const newAppointmentThunk = createAsyncThunk(
    'appointment/newAppointment',
    async ({doctorId, description, jwt, epoch}, {fulfillWithValue, rejectWithValue}) => {
        try {
             const authToken = 'Bearer '+jwt
             const data ={
                    doctorId, 
                    description, 
                    timeSlot:epoch, 
                 }
             return await axios.post(NEW_APPOINTMENT, data, {
               headers: {
               'Content-Type': 'application/json',
               'Authorization':authToken
               }
             })
             .then(resp => resp.data)
        }catch(error){
            //const errorOject =  JSON.stringify(error.response.data)
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    } 
  )


  /**
   * Cancel appointment
   */
  export const cancelAppointmentThunk = createAsyncThunk(
    'appointment/cancelAppointment',
    async ({id, jwt}, {fulfillWithValue, rejectWithValue}) => {
        try {
             const authToken = 'Bearer '+jwt
             const data ={}
             return await axios.put(CANCEL_APPOINTMENT+id+"?cancelled=true", data, {
               headers: {
               'Content-Type': 'application/json',
               'Authorization':authToken
               }
             })
             .then(resp => resp.data)
        }catch(error){
            //const errorOject =  JSON.stringify(error.response.data)
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    } 
  )

  /**
   * Reschedule time slot
   */

  export const rescheduleAppointmentThunk = createAsyncThunk(
    'appointment/rescheduleAppointment',
    async ({id, jwt, timeSlot}, {fulfillWithValue, rejectWithValue}) => {
        try {
             const authToken = 'Bearer '+jwt
             const data ={}
             return await axios.put(CANCEL_APPOINTMENT+id+"?cancelled=false&timeSlot="+timeSlot, data, {
               headers: {
               'Content-Type': 'application/json',
               'Authorization':authToken
               }
             })
             .then(resp => resp.data)
        }catch(error){
            //const errorOject =  JSON.stringify(error.response.data)
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    } 
  )

  export const allAppointmentThunk = createAsyncThunk(
    'appointment/allAppointment',
    async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
        try {
             const authToken = 'Bearer '+jwt
             return await axios.get(USER_APPOINTMENTS,{
               headers: {
               'Content-Type': 'application/json',
               'Authorization':authToken
               }
             })
             .then(resp => resp.data)
        }catch(error){
            //const errorOject =  JSON.stringify(error.response.data)
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    } 
  )


  /**
   * InitialState
   */
  const  initialState = {
      loading:false,
      apiError:false,
      apiErrorMessage:"",
      homeRefresh:false,
      appointment:{
          name:'',
          specialization:'',
          doctorId:''
      },
      userAppointments:[],
      currentAppointment:{}
  }

  const appointmentSlice = createSlice({
    name:'appointment',
    initialState,
    reducers:{
        newAppointment(state, {payload}){
            state.appointment["name"]  = payload.name;
            state.appointment["specialization"] = payload.specialization;
            state.appointment["doctorId"] = payload.doctorId;
        },
        currentAppointment(state, {payload}){
            state.currentAppointment["id"]  = payload.id;
            state.currentAppointment["doctorName"] = payload.doctorName;
            state.currentAppointment["address"] = payload.address;
            state.currentAppointment["status"] = payload.status;
            state.currentAppointment["speciality"] = payload.speciality;
            state.currentAppointment["description"] = payload.description;
            state.currentAppointment["slot"] = payload.slot;
            state.currentAppointment["otp"] = payload.otp;
            state.currentAppointment["hospitalName"] = payload.hospitalName;
        }
    },
    extraReducers:{

        [newAppointmentThunk.pending]:  (state, {payload}) => {
            state.loading=false
            console.log("pending")
        },
        [newAppointmentThunk.fulfilled]:  (state, {payload}) => {
            console.log("completed")
            state.homeRefresh=true;
        },
        [newAppointmentThunk.rejected]:  (state, {payload}) => {
            console.log("rejected")
        },


        [allAppointmentThunk.pending]:  (state, {payload}) => {
            state.loading=false
            console.log("pending")
        },
        [allAppointmentThunk.fulfilled]:  (state, {payload}) => {
            console.log("completed")
            console.log(payload.data)
            state.userAppointments = payload.data;
            state.homeRefresh=false;
        },
        [allAppointmentThunk.rejected]:  (state, {payload}) => {
            console.log("rejected")
        },


        [cancelAppointmentThunk.pending]:  (state, {payload}) => {
            state.loading=false
            console.log("pending")
        },
        [cancelAppointmentThunk.fulfilled]:  (state, {payload}) => {
            console.log("completed")
        },
        [cancelAppointmentThunk.rejected]:  (state, {payload}) => {
            console.log("rejected")
        },



        [rescheduleAppointmentThunk.pending]:  (state, {payload}) => {
            state.loading=false
            console.log("pending")
        },
        [rescheduleAppointmentThunk.fulfilled]:  (state, {payload}) => {
            console.log("completed")
        },
        [rescheduleAppointmentThunk.rejected]:  (state, {payload}) => {
            console.log("rejected")
        },
    }
})

export const {newAppointment, currentAppointment}  = appointmentSlice.actions;

export default appointmentSlice.reducer