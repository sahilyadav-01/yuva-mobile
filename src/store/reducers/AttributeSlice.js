import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

export const getServicesThunk = createAsyncThunk(
  'attribute/getServices',
  async ({}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/services/dropdown';
      const response = await YuvaService.get(endpoint);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  id: '',
  status: false,
  services: null,
};

const attributeSlice = createSlice({
  name: 'attribute',
  initialState,
  reducers: {},
  extraReducers: {
    [getServicesThunk.pending]: state => {
      state.loading = true;
      state.services = null;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [getServicesThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.services = payload.data.data;

    },
    [getServicesThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.loading = false;
      state.apiErrorMessage = payload.response.statusText;
      state.status = false;
    },
  },
});

export const attributeInit = attributeSlice.getInitialState();
export default attributeSlice.reducer;
