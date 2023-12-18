import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

const fetchDetails = async (
  {position, screenType},
  {fulfillWithValue, rejectWithValue},
) => {
  try {
    const endpoint = `/banner/user?position=${position}&screenType=${screenType}`;
    const response = await YuvaService.get(endpoint);
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const fetchBannerDetails1 = createAsyncThunk(
  'banner/fetchDetails1',
  fetchDetails,
);

export const fetchBannerDetails2 = createAsyncThunk(
  'banner/fetchDetails2',
  fetchDetails,
);

export const fetchBannerDetails3 = createAsyncThunk(
  'banner/fetchDetails3',
  fetchDetails,
);

const initialState = {
  banner1: {
    loading: false,
    error: false,
    data: null,
  },
  banner2: {
    loading: false,
    error: false,
    data: null,
  },
  banner3: {
    loading: false,
    error: false,
    data: null,
  },
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  extraReducers: {
    [fetchBannerDetails1.pending]: state => {
      state.banner1.loading = true;
      state.banner1.error = false;
      state.banner1.data = null;
    },
    [fetchBannerDetails1.fulfilled]: (state, {payload}) => {
      state.banner1.loading = false;
      state.banner1.error = false;
      state.banner1.data = {
        position: payload?.position,
        data: payload?.innerBannerResponseDto,
      };
    },
    [fetchBannerDetails1.rejected]: state => {
      state.banner1.loading = false;
      state.banner1.error = true;
      state.banner1.data = null;
    },
    [fetchBannerDetails2.pending]: state => {
      state.banner2.loading = true;
      state.banner2.error = false;
      state.banner2.data = null;
    },
    [fetchBannerDetails2.fulfilled]: (state, {payload}) => {
      state.banner2.loading = false;
      state.banner2.error = false;
      state.banner2.data = {
        position: payload?.position,
        data: payload?.innerBannerResponseDto,
      };
    },
    [fetchBannerDetails2.rejected]: state => {
      state.banner2.loading = false;
      state.banner2.error = true;
      state.banner2.data = null;
    },
    [fetchBannerDetails3.pending]: state => {
      state.banner3.loading = true;
      state.banner3.error = false;
      state.banner3.data = null;
    },
    [fetchBannerDetails3.fulfilled]: (state, {payload}) => {
      state.banner3.loading = false;
      state.banner3.error = false;
      state.banner3.data = {
        position: payload?.position,
        data: payload?.innerBannerResponseDto,
      };
    },
    [fetchBannerDetails3.rejected]: state => {
      state.banner3.loading = false;
      state.banner3.error = true;
      state.banner3.data = null;
    },
  },
});

export const bannerInit = bannerSlice.getInitialState();
export default bannerSlice.reducer;
