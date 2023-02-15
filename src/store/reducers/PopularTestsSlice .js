

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';


  export const popularTestsSliceThunk = createAsyncThunk(
    'test/popular',
    async ({ fulfillWithValue, rejectWithValue }) => {
      try {
        const endpoint = `/test/popular?pageNo=1&pageSize=4`;
        const response = await YuvaService.get(endpoint);
          console.log("This is popular Test",response)
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
  popularTest: [],
}

const popularTestsSlice = createSlice({
    name: 'popularTests',
    initialState,
    reducers: {
      popularTest(state, action) {
        state.popularTest =  payload?.data;
      },
    },
    extraReducers: {
      /**
       */
       [popularTestsSliceThunk.pending]: (state, { payload }) => {
        state.loading = true;
      },
      [popularTestsSliceThunk.fulfilled]: (state, action) => {
        state.popularTest = action.payload?.data || [];
      },
      [popularTestsSliceThunk.rejected]: (state, action) => {
        state.apiError = true;
      },
    },
});

export const {popularTestsInit} = popularTestsSlice.getInitialState();
export const {popularTest} = popularTestsSlice.actions;
export default popularTestsSlice.reducer;
