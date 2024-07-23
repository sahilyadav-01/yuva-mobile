import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

export const popularTestsSliceThunk = createAsyncThunk(
  'test/popular',
  async ({pageNo, pageSize, search}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/test/popular?pageNo=${pageNo}&pageSize=${pageSize}${
        search ? `&search=${search}` : ''
      }`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);
export const testPackageSearchThunk = createAsyncThunk(
  'test-package/search',
  async ({search}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/search?search=${search}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const getElasticSearchResult = createAsyncThunk(
  'search/result',
  async (
    {search, uuid, productTypeEnum},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/search/result?${search}${uuid}${productTypeEnum}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  popularTest: null,
  testPackageSearch: null,
  elasticResult: '',
};

const popularTestsSlice = createSlice({
  name: 'popularTests',
  initialState,
  reducers: {
    popularTest(state, action) {
      state.popularTest = action?.payload?.data;
    },
    resetTests(state) {
      state.popularTest = null;
    },
  },
  extraReducers: {
    [popularTestsSliceThunk.pending]: state => {
      state.loading = true;
    },
    [popularTestsSliceThunk.fulfilled]: (state, action) => {
      state.popularTest = action.payload?.data || [];
    },
    [popularTestsSliceThunk.rejected]: state => {
      state.apiError = true;
    },
    [testPackageSearchThunk.pending]: state => {
      state.loading = true;
    },
    [testPackageSearchThunk.fulfilled]: (state, action) => {
      state.testPackageSearch = action.payload?.data || [];
      state.loading = false;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [testPackageSearchThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.error;
    },
    [getElasticSearchResult.pending]: state => {
      state.loading = true;
    },
    [getElasticSearchResult.fulfilled]: (state, action) => {
      state.elasticResult = action.payload?.data || [];
      state.loading = false;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [getElasticSearchResult.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.error;
    },
  },
});

export const {popularTestsInit} = popularTestsSlice.getInitialState();
export const {popularTest, resetTests} = popularTestsSlice.actions;
export default popularTestsSlice.reducer;
