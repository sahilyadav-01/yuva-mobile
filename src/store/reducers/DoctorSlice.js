import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

/**
 * URIs
 */
// const LOCAL_SERVER='localhost'
// const SERVER = LOCAL_SERVER;
const DOCTOR_SEARCH =
  'http://' + SERVER + ':8080/api/v1/yuva/doctor/search?fromApp=true';

/**
 * Thunks
 */

export const searchDoctorThunk = createAsyncThunk(
  'doctor/search',
  async ({search, jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;
      return await axios
        .get(DOCTOR_SEARCH + search, {
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
 * Initial State
 */

const initialState = {
  loading: false,
  data: [],
  apiError: false,
  apiErrorMessage: '',
  appointment: {},
  tabBarVisible: true,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setTabBarVisible(state, action) {
      state.tabBarVisible = action.payload;
    },
  },
  extraReducers: {
    [searchDoctorThunk.pending]: (state, {payload}) => {},
    [searchDoctorThunk.fulfilled]: (state, {payload}) => {
      let data = payload.data;
      state.data = [...data];
    },
    [searchDoctorThunk.rejected]: (state, {payload}) => {},
  },
});
export const {setTabBarVisible} = doctorSlice.actions;
export default doctorSlice.reducer;
