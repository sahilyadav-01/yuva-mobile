

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const programAndPlanThunk = createAsyncThunk(
    'programAndPlan',
    async ({ serviceUuid }, { fulfillWithValue, rejectWithValue }) => {
      try {
        const endpoint = `?serviceUuid=${serviceUuid}`
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

    },
  });

export const programAndPlanInit = programAndPlanSlice.getInitialState();
export default programAndPlanSlice.reducer;
