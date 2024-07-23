import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

export const lifeStyleSliceThunk = createAsyncThunk(
  'lifestyle-package/view-all',
  async ({fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/lifestyle-package/view-all';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

export const lifeStyleEnumData = createAsyncThunk(
  'lifestyle-package/getData',
  async ({enumName, search}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/lifestyle-package/${enumName}${
        search ? `?search=${search}` : ''
      }`;
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
  lifestylePackage: [],
  packageDataLoading: false,
  packageData: [],
  testData: [],
  packageDataError: null,
};

const lifeStyleSlice = createSlice({
  name: 'lifestylePackage',
  initialState,
  reducers: {
    lifestylePackage(state, {payload}) {
      state.lifestylePackage = payload?.data;
    },
  },
  extraReducers: {
    [lifeStyleSliceThunk.pending]: state => {
      state.loading = true;
    },
    [lifeStyleSliceThunk.fulfilled]: (state, action) => {
      state.lifestylePackage = action?.payload?.data || [];
    },
    [lifeStyleSliceThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    [lifeStyleEnumData.pending]: state => {
      state.packageDataLoading = true;
      state.packageData = [];
      state.testData = [];
      state.packageDataError = null;
    },
    [lifeStyleEnumData.fulfilled]: (state, {payload}) => {
      state.packageDataLoading = false;
      state.packageData = payload.data.popularPackageResponseDtoList;
      state.testData = payload.data.popularTestResponseDtoList;
      state.packageDataError = null;
    },
    [lifeStyleEnumData.rejected]: (state, {payload}) => {
      state.packageDataLoading = false;
      state.packageDataError = payload;
    },
  },
});

export const {lifestylePackageInit} = lifeStyleSlice.getInitialState();
export const {lifestylePackage} = lifeStyleSlice.actions;
export default lifeStyleSlice.reducer;
