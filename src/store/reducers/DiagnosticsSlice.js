
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LogBox } from 'react-native';
import { SERVER } from '../../utils/utils';


const VIEW_TEST = 'http://' + SERVER + ':8080/api/v1/yuva/employee/viewMyTestAndPackage';
const BOOKED_TEST = 'http://' + SERVER + ':8080/api/v1/yuva/booking/user';

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
        .then(resp =>{
          return {...resp.data, isActive};
         
        });
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
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
    caraouselData: '',
    bookedData: ''
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
      state.bookedData =action.payload.isActive ==="false"? action.payload.data: state.bookedData;
      state.caraouselData =action.payload.isActive ==="true" ?action.payload.data:  state.caraouselData;

    },
    [bookingTestAndPackageThunk.rejected]: (state, action) => {
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
