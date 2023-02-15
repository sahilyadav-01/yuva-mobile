

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';


  export const lifeStyleSliceThunk = createAsyncThunk(
    'lifestyle-package/view-all',
    async ({ fulfillWithValue, rejectWithValue }) => {
      try {
        const endpoint = `/lifestyle-package/view-all`;
        const response = await YuvaService.get(endpoint);
          console.log("This is lifestle packages",response)
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
  lifestylePackage: [],
}

const lifeStyleSlice = createSlice({
    name: 'lifestylePackage',
    initialState,
    reducers: {
      lifestylePackage(state, action) {
        state.lifestylePackage =  payload?.data;
      },
    },
    extraReducers: {
      /**
       */
       [lifeStyleSliceThunk.pending]: (state, { payload }) => {
        state.loading = true;
      },
      [lifeStyleSliceThunk.fulfilled]: (state, action) => {
        state.lifestylePackage = action.payload?.data || [];
      },
      [lifeStyleSliceThunk.rejected]: (state, action) => {
        state.apiError = true;
      },
    },
});

export const {lifestylePackageInit} = lifeStyleSlice.getInitialState();
export const {lifestylePackage} = lifeStyleSlice.actions;
export default lifeStyleSlice.reducer;
