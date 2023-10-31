import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const documentTypeThunk = createAsyncThunk(
  'Emrm/getDocumentType',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/erms/documentType`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const getAllErmReportThunk = createAsyncThunk(
  'Emrm/getAllErm',
  async ({ pageNo,pageSize, searchKey, documentType }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/erms/viewAll?pageNo=${pageNo}&pageSize=${pageSize}`;
      const ermFilterDto = {searchKey,documentType};
      const response = await YuvaService.post(endpoint, ermFilterDto);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const addErmThunk = createAsyncThunk(
  'Emrm/erms',
  async ({ document, ermRequest }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('ermRequest', JSON.stringify({
        medicalDocument: ermRequest?.medicalDocument,
        date: ermRequest?.date,
        healthCentre: ermRequest?.healthCentre,
        documentType: ermRequest?.documentType
      }));

      formData.append('medicalDocument', document);

      const response = await YuvaService.post('/erms', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json'
        }
      });

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
  dropDownData: [],
  ermReportData:{},
  downloadedReports:[],
  emrmUploadMessage:''
};

const EmrmSlice = createSlice({
  name: 'Emrm',
  initialState,
  reducers: {
    resetSuccessMessage(state) {
      state.emrmUploadMessage= '';
    },
    resetAddErmThunkError(state) {
      state.apiErrorMessage= '';
    },
  },
  extraReducers: {
    /** getDocumentType Dropdown Data */

    [documentTypeThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [documentTypeThunk.fulfilled]: (state, action) => {
      state.dropDownData = action.payload?.data || [];
      state.loading = false;
    },
    [documentTypeThunk.rejected]: (state, action) => {
      state.apiError = true;
      state.loading = false;
    },

    /** getAllErmReport */

    [getAllErmReportThunk.pending]: (state, {action}) => {
      state.loading = true;
    },
    [getAllErmReportThunk.fulfilled]: (state, action) => {
      state.ermReportData = action.payload?.data || {};
      state.loading = false;
    },
    [getAllErmReportThunk.rejected]: (state, action) => {
      state.apiError = true;
      state.loading = false;
    },

    /** Emrm Document upload*/

    [addErmThunk.pending]: state => {
      state.loading = true;
      state.apiErrorMessage = '';
      state.apiError = false;
    },
    [addErmThunk.fulfilled]: (state, { payload }) => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.emrmUploadMessage = payload?.message;
    },
    [addErmThunk.rejected]: (state, { payload }) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload?.message;
    },
  },
});
export const {resetSuccessMessage, resetAddErmThunkError} = EmrmSlice.actions;
export const EmrmInit = EmrmSlice.getInitialState();
export default EmrmSlice.reducer;