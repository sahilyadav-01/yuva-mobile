import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

const baseEndpoint = 'http://' + SERVER + ':8080/api/v1/yuva';

export const getServicesThunk = createAsyncThunk(
  'attribute/getServices',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await axios.get(`${baseEndpoint}/services/dropdown`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("hhhhhhhh",response)
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

export default attributeSlice.reducer;
