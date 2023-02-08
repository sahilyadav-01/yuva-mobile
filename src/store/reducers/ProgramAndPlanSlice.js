import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LogBox } from 'react-native';
import { SERVER } from '../../utils/utils';
const PROGRAM_AND_PLAN = 'http://' + SERVER + ':8080/api/v1/yuva/programAndPlan';
const PACKAGES_AND_PLAN_NAME = 'http://' + SERVER + ':8080/api/v1/yuva/package/popular';

export const programAndPlanThunk = createAsyncThunk(
  'programAndPlan',
  async ({ jwt, serviceUuid }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const authToken = 'Bearer ' + jwt;
      const url = PROGRAM_AND_PLAN + '?serviceUuid=' + `${serviceUuid}`;
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

export const popularPackageNameThunk = createAsyncThunk(
  'package/popular',
  async ({ fulfillWithValue, rejectWithValue }) => {
    try {
      const url = PACKAGES_AND_PLAN_NAME + '?limited=true';
      return await axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

const programAndPlanSlice = createSlice({
  name: 'programAndPlan',
  initialState: {
    user: {
      name: '',
      jwt: '',
      version: '1',
    },
    loading: false,
    apiError: false,
    apiErrorMessage: '',
    popularPackageName: [],
  },
  reducers: {

    popularPackageName(state, { payload }) {
      state.popularPackageName['packageName'] = payload?.data?.packageName;
      state.popularPackageName['cost'] = payload?.data?.cost;
      state.popularPackageName['featured'] = payload?.data?.featured;
      state.popularPackageName['packageUuid'] = payload?.data?.packageUuid;
      state.popularPackageName['parameterCount'] = payload?.data?.parameterCount;
      state.popularPackageName['totalTest'] = payload?.data?.totalTest;
    },
  },
  extraReducers: {
    /**
     */
    [programAndPlanThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [programAndPlanThunk.fulfilled]: (state, action) => {
      state.programAndPlan = action.payload?.data;
    },
    [programAndPlanThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    /**
     * popularPackageName
     */
    [popularPackageNameThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [popularPackageNameThunk.fulfilled]: (state, { payload }) => {
      state.popularPackageName = payload?.data;;
    },
    [popularPackageNameThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
  
  },
});
export const { popularPackageName} = programAndPlanSlice.actions;
export default programAndPlanSlice.reducer;
