import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const downloadHraReportThunk = createAsyncThunk(
  'hra-pdf-report',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    const id = params?.id ? `?id=${params?.id}` : '';
    try {
      const endpoint = '/hra-pdf-report';
      const response = await YuvaService.get(`${endpoint}${id}`);
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
export const MyPrescriptionReportThunk = createAsyncThunk(
  'talkToDr/user',
  async ({uuid,pageNo,pageSize}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/my/prescription?pageNo=${pageNo}&pageSize=${pageSize}&serviceUuid=${uuid}`;
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
  downloadHraReport:[],
  downloadDiagnosticReport:[],
  myPrescriptionReport:[],
  hraLoading: false,
  hraError: false,
  prescriptionLoading: false,
  prescriptionError: false,
  diagnosticLoading: false,
  disagnosticError: false,
  hraReportId: null,
};

const downlodReportSlice = createSlice({
  name: 'downloadReport',
  initialState,
  reducers : {
    setHraReportId(state,{payload}) {
      state.hraReportId = payload;
    }
  },
  extraReducers: {
    [downloadHraReportThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.hraLoading = true;
      state.hraError = false;
    },
    [downloadHraReportThunk.fulfilled]: (state, action) => {
      state.downloadHraReport = action.payload?.data || [];
      state.loading = false;
      state.hraLoading = false;
    },
    [downloadHraReportThunk.rejected]: (state, action) => {
      state.apiError = true;
      state.loading = false;
      state.hraLoading = false;
      state.hraError = true;
    },
    [downloadDiagnosticReportThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.diagnosticLoading = true;
      state.diagnosticError = false;
    },
    [downloadDiagnosticReportThunk.fulfilled]: (state, action) => {
      state.downloadDiagnosticReport = action.payload?.data || [];
      state.loading = false;
      state.diagnosticLoading = false;
    },
    [downloadDiagnosticReportThunk.rejected]: (state, action) => {
      state.apiError = true;
      state.loading = false;
      state.diagnosticLoading = false;
      state.diagnosticError = true;
    },
    [MyPrescriptionReportThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.prescriptionLoading = true;
      state.prescriptionError = false;
    },
    [MyPrescriptionReportThunk.fulfilled]: (state, action) => {
      state.myPrescriptionReport = action.payload?.data || [];
      state.loading = false;
      state.prescriptionLoading = false;
    },
    [MyPrescriptionReportThunk.rejected]: (state, action) => {
      state.apiError = true;
      state.loading = false;
      state.prescriptionLoading = false;
      state.prescriptionError = true;
    },
  },
});
export const {setHraReportId} = downlodReportSlice.actions
export const downloadInit = downlodReportSlice.getInitialState();
export default downlodReportSlice.reducer;
