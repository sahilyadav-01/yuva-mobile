

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LogBox } from 'react-native';
import { SERVER } from '../../utils/utils';


const VIEW_TEST = 'http://' + SERVER + ':8080/api/v1/yuva/employee/viewMyTestAndPackage';
const BOOKED_TEST = 'http://' + SERVER + ':8080/api/v1/yuva/booking/user';
const TEST_DETAILS = 'http://' + SERVER + ':8080/api/v1/yuva/services/attribute/test';
const ADD_BOOKING_TEST = 'http://' + SERVER + ':8080/api/v1/yuva/booking?fromWeb=false';
const PACKAGE_DETAILS = 'http://' + SERVER + ':8080/api/v1/yuva/package';
const BOOKED_DETAILS_BY_ID = 'http://' + SERVER + ':8080/api/v1/yuva/booking';
const RESCHULDE_CANCEL_BOOKING = 'http://' + SERVER + ':8080/api/v1/yuva/booking/';
const CITY_ID='http://' + SERVER + ':8080/api/v1/yuva/city/getAllCityNames';
const DOWNLOAD_LAB_REPORT='http://' + SERVER + ':8080/api/v1/yuva/download';

export const cityIdThunk = createAsyncThunk(
  'city/getAllCityNames',
  async ({ jwt }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = CITY_ID;
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
export const viewMyTestAndPackageThunk = createAsyncThunk(
  'employee/viewMyTestAndPackage',
  async ({ jwt }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = VIEW_TEST;
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
export const bookingTestAndPackageThunk = createAsyncThunk(
  'booking/user',
  async ({ jwt, isActive }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${BOOKED_TEST}/${isActive}`;;
      return await axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        })
        .then(resp => {
          return { ...resp.data, isActive };

        });
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);
export const diagnosisTestDetailsThunk = createAsyncThunk(
  'services/attribute/test',
  async ({ jwt, id }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${TEST_DETAILS}/${id}`;
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
export const diagnosisPackageDetailsThunk = createAsyncThunk(
  'package',
  async ({ jwt, packageName }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${PACKAGE_DETAILS}/${packageName}`;
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
export const bookTestThunk = createAsyncThunk(
  'booking',
  async ({ jwt, data }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${ADD_BOOKING_TEST}`;
      return await axios
        .post(url, data, {
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

export const bookedDetailsByIdThunk = createAsyncThunk(
  'booking',
  async ({ jwt, id }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${BOOKED_DETAILS_BY_ID}/${id}`;;
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



export const rescheduleCancelBookingThunk = createAsyncThunk(
  'booking/',
  async ({ id, jwt, isCancelled, timeSlot }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = `${RESCHULDE_CANCEL_BOOKING}${id}` + '?cancelled=' + isCancelled + '&timeSlot=' + timeSlot
      const data = {};
      return await axios
        .put(url, data, {
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
export const downloadReportThunk = createAsyncThunk(
  'download',
  async ({ jwt,attachmentId }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url =DOWNLOAD_LAB_REPORT+'?attachmentId='+`${attachmentId}`;
      return await axios
        .get(url,{
          headers: {
            'Content-Type': 'application/octet-stream',
            Authorization: authToken,
          },
        })
        .then(resp => resp.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);


const diagnosticSlice = createSlice({
  name: 'diagnostic',
  initialState: {
    user: {
      name: '',
      jwt: '',
      version: '1',
    },
    loading: false,
    apiError: false,
    apiErrorMessage: '',
    testData: '',
    diagnosticCarouselData: '',
    bookedData: '',
    testDetails: '',
    packageDetails: '',
    testBooked: '',
    bookedDetailsById: '',
    cancelled:'',
    cityId:''

  },
  reducers: {
    hideErrorBox(state) {
      state.apiError = false;
      state.apiErrorMessage = '';
    },
  },
  extraReducers: {
    /**
     */
     [cityIdThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [cityIdThunk.fulfilled]: (state, action) => {
      state.cityId = action.payload?.data || [];
    },
    [cityIdThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    [viewMyTestAndPackageThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [viewMyTestAndPackageThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.testData = action.payload.data;
    },
    [viewMyTestAndPackageThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [bookingTestAndPackageThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [bookingTestAndPackageThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookedData = action.payload.isActive === "false" ? action.payload.data : state.bookedData;
      state.diagnosticCarouselData = action.payload.isActive === "true" ? action.payload.data : state.diagnosticCarouselData;

    },
    [bookingTestAndPackageThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [diagnosisTestDetailsThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [diagnosisTestDetailsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.packageDetails = ''
      state.testDetails = action.payload.data;

    },
    [diagnosisTestDetailsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [diagnosisPackageDetailsThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [diagnosisPackageDetailsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.testDetails = ''
      state.packageDetails = action.payload.data;

    },
    [diagnosisPackageDetailsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [bookTestThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [bookTestThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.testBooked = action.payload.data;
    },
    [bookTestThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [bookedDetailsByIdThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [bookedDetailsByIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookedDetailsById = action.payload.data;
    },
    [bookedDetailsByIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },


    [rescheduleCancelBookingThunk.pending]: (state, { payload }) => {
      state.loading = true;
      state.cancelled='';
    },
    [rescheduleCancelBookingThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.reschedule = action.payload.data;
      state.cancelled= action.payload.message;
    },
    [rescheduleCancelBookingThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
  },
});
export const {
  hideErrorBox,
} = diagnosticSlice.actions;
export default diagnosticSlice.reducer;
