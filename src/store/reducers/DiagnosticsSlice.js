import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const cityIdThunk = createAsyncThunk(
  'city/getAllCityNames',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/city/getAllCityNames';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const viewMyTestAndPackageThunk = createAsyncThunk(
  'employee/viewMyTestAndPackage',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/employee/viewMyTestAndPackage';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const bookingTestAndPackageThunk = createAsyncThunk(
  'booking/user',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/booking/user';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const diagnosisTestDetailsThunk = createAsyncThunk(
  'services/attribute/test',
  async ({id}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/services/attribute/test/${id}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const diagnosisPackageDetailsThunk = createAsyncThunk(
  'package',
  async ({packageName}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/package/${packageName}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const bookTestThunk = createAsyncThunk(
  '/booking',
  async ({data}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/booking?fromWeb=false';
      const response = await YuvaService.post(endpoint, data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const bookedDetailsByIdThunk = createAsyncThunk(
  'booking',
  async ({id}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/booking/${id}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const rescheduleCancelBookingThunk = createAsyncThunk(
  'booking/',
  async ({id, isCancelled, timeSlot}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/booking/${id}?cancelled=${isCancelled}&timeSlot=${timeSlot}`;
      const data = {};
      const response = await YuvaService.put(endpoint, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const downloadReportThunk = createAsyncThunk(
  'download',
  async ({attachmentId}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/download?attachmentId=${attachmentId}`;
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
  testData: '',
  diagnosticCarouselData: '',
  bookedData: '',
  testDetails: '',
  packageDetails: '',
  testBooked: '',
  bookedDetailsById: '',
  cancelled: '',
  cityId: [],
};

const diagnosticSlice = createSlice({
  name: 'diagnostic',
  initialState,
  reducers: {
    hideErrorBox(state) {
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    resetMesage(state) {
      state.testBooked = null;
      state.apiErrorMessage =null;
      state.reschedule=null;
    },
  },
  extraReducers: {
    /**
     */
    [cityIdThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [cityIdThunk.fulfilled]: (state, action) => {
      state.cityId = action.payload?.data || [];
    },
    [cityIdThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    [viewMyTestAndPackageThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [viewMyTestAndPackageThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.testData = action.payload.data;
    },
    [viewMyTestAndPackageThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [bookingTestAndPackageThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [bookingTestAndPackageThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookedData = action.payload.data ;
    },
    [bookingTestAndPackageThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [diagnosisTestDetailsThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [diagnosisTestDetailsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.packageDetails = '';
      state.testDetails = action.payload.data;
    },
    [diagnosisTestDetailsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [diagnosisPackageDetailsThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [diagnosisPackageDetailsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.testDetails = '';
      state.packageDetails = action.payload.data;
    },
    [diagnosisPackageDetailsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
    [bookTestThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [bookTestThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.testBooked = action.payload;
      state.apiErrorMessage =null;
    },
    [bookTestThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      state.testBooked =null;
      state.apiErrorMessage = action.payload.errorMessage;
    },
    [bookedDetailsByIdThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [bookedDetailsByIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookedDetailsById = action.payload.data;
    },
    [bookedDetailsByIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },

    [rescheduleCancelBookingThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.cancelled = '';
    },
    [rescheduleCancelBookingThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.reschedule = action.payload;
      state.cancelled = action.payload.message;
    },
    [rescheduleCancelBookingThunk.rejected]: (state, action) => {
      state.loading = false;
      state.apiError = true;
      //state.apiErrorMessage = action.payload.errorMessage;
    },
  },
});
export const {hideErrorBox,resetMesage} = diagnosticSlice.actions;
export const diagnosticInit = diagnosticSlice.getInitialState();
export default diagnosticSlice.reducer;
