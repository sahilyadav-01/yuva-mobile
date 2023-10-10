import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const getPopularTestsPackages = createAsyncThunk(
  'homeSearch/getPopularTestsPackages',
  async (
    {pageNo, pageSize, rangeEnum, testPackageRequestDto},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const endpoint = `/package/test-package-list?pageNo=${pageNo}&pageSize=${pageSize}&rangeEnum=${rangeEnum}`;
      const response = await YuvaService.post(endpoint, testPackageRequestDto);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getSearchTests = createAsyncThunk(
  'homeSearch/getSearchTests',
  async (search, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/search/result?search=${search}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  showSearchView: false,
  getPopularTestsLoading: false,
  getPopularTestsError: false,
  popularTestsPackages: [],
  totalDocuments: 0,
  totalPages: 0,
  searchLoading: false,
  searchError: false,
  searchData: null,
};

const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState,
  reducers: {
    setHomeSearch(state, {payload}) {
      state.showSearchView = payload;
    },
  },
  extraReducers: {
    [getPopularTestsPackages.pending]: state => {
      state.getPopularTestsLoading = true;
      state.getPopularTestsError = false;
    },
    [getPopularTestsPackages.fulfilled]: (state, {payload}) => {
      state.getPopularTestsLoading = false;
      state.getPopularTestsError = false;
      state.popularTestsPackages = payload?.data.testPackageResponseDtoList;
      state.totalDocuments = payload?.data.totalDocuments;
      state.totalPages = payload?.data.totalPages;
    },
    [getPopularTestsPackages.rejected]: state => {
      state.getPopularTestsLoading = false;
      state.getPopularTestsError = true;
    },
    [getSearchTests.pending]: state => {
      state.searchLoading = true;
      state.searchError = false;
    },
    [getSearchTests.fulfilled]: (state, {payload}) => {
      state.searchLoading = false;
      state.searchError = false;
      state.searchData = payload.data;
    },
    [getSearchTests.rejected]: state => {
      state.searchLoading = false;
      state.searchError = true;
    },
  },
});
export const {setHomeSearch} = homeSearchSlice.actions;
export const homeSearchInit = homeSearchSlice.getInitialState();
export default homeSearchSlice.reducer;
