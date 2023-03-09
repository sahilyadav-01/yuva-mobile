import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const downloadHraReportThunk = createAsyncThunk(
  'hra-pdf-report',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra-pdf-report';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const downloadDiagnosticReportThunk = createAsyncThunk(
  'reports',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/reports';
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
};

const downlodReportSlice = createSlice({
  name: 'downloadReport',
  initialState,
  extraReducers: {
    [downloadHraReportThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [downloadHraReportThunk.fulfilled]: (state, action) => {
      state.downloadHraReport = action.payload?.data || [];

    },
    [downloadHraReportThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    [downloadDiagnosticReportThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [downloadDiagnosticReportThunk.fulfilled]: (state, action) => {
      state.downloadDiagnosticReport = action.payload?.data || [];

    },
    [downloadDiagnosticReportThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
  },
});
export const downloadInit = downlodReportSlice.getInitialState();
export default downlodReportSlice.reducer;
