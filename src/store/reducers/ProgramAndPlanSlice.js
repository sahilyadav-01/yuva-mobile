

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

  export const popularPackageNameThunk = createAsyncThunk(
    'package/popular',
    async ({ fulfillWithValue, rejectWithValue }) => {
      try {
        const endpoint = `/package/popular?pageNo=1&pageSize=4`;
        const response = await YuvaService.get(endpoint);
        console.log("gg",response.data);
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
  popularPackageName: [],
}

const programAndPlanSlice = createSlice({
    name: 'programAndPlan',
    initialState,
    reducers: {
      popularPackageName(state, action) {
        state.popularPackageName =  payload?.data;
      },
    },
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
  
    /**
     * popularPackageName
     */
    [popularPackageNameThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [popularPackageNameThunk.fulfilled]: (state, { payload }) => {
      state.popularPackageName = payload?.data;
    },
    [popularPackageNameThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    },
});

export const {programAndPlanInit} = programAndPlanSlice.getInitialState();
export const {popularPackageName} = programAndPlanSlice.actions;
export default programAndPlanSlice.reducer;
