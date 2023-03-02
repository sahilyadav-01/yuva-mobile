import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const popularTestsSliceThunk = createAsyncThunk(
  'test/popular',
    async ({ pageNo,pageSize, search }, { fulfillWithValue, rejectWithValue }) => {

    try {
      const endpoint = `/test/popular?pageNo=${pageNo}&pageSize=${pageSize}${search ? `&search=${search}` : ''}`;
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
  popularTest: null,
}

const popularTestsSlice = createSlice({
  name: 'popularTests',
  initialState,
  reducers: {
    popularTest(state, action) {
      state.popularTest = action?.payload?.data;
    },
    resetTests(state) {
      state.popularTest = null
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

export const { popularTestsInit } = popularTestsSlice.getInitialState();
export const { popularTest,resetTests } = popularTestsSlice.actions;
export default popularTestsSlice.reducer;
