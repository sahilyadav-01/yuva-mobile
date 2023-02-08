

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const programAndPlanThunk = createAsyncThunk(
    'programAndPlan',
    async ({ serviceUuid }, { fulfillWithValue, rejectWithValue }) => {
      try {
        const endpoint = `/programAndPlan?serviceUuid=${serviceUuid}`
        const response = await YuvaService.get(endpoint);
        return response.data;
      } catch (error) {
        //const errorOject =  JSON.stringify(error.response.data)
        return rejectWithValue(error.response.data);
      }
    },
  );

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  programAndPlan: [],
}

const programAndPlanSlice = createSlice({
    name: 'programAndPlan',
    initialState,
    extraReducers: {
      /**
       */
       [programAndPlanThunk.pending]: (state, { payload }) => {
        state.loading = true;
      },
      [programAndPlanThunk.fulfilled]: (state, action) => {
        state.programAndPlan = action.payload?.data || [];
      },
      [programAndPlanThunk.rejected]: (state, action) => {
        state.apiError = true;
      },

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
  }
});

export const programAndPlanInit = programAndPlanSlice.getInitialState();
export default programAndPlanSlice.reducer;
