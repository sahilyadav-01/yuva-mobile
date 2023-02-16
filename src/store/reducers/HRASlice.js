import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const continueHRAThunk = createAsyncThunk(
  'hra/continueHRAThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/section-continue';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveHRAData = createAsyncThunk(
  'hra/saveHRAThunk',
  async ({answers, sectionId}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/section';
      const response = await YuvaService.put(endpoint, {answers, sectionId});
      console.log('Response', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchSavedHRA = createAsyncThunk(
    'hra/fetchSavedHRAThunk',
    async ({sectionId}, {fulfillWithValue, rejectWithValue}) => {
      try {
        const endpoint = `/hra/section?sectionId=${sectionId}`;
        const response = await YuvaService.get(endpoint);
        console.log('Response', response);
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
  continueHRA: false,
};

const hraSlice = createSlice({
  name: 'hra',
  initialState,
  reducers: {
    resetHRA(state) {
      state.continueHRA = false;
    },
  },
  extraReducers: {
    [continueHRAThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.apiError = false;
      state.continueHRA = false;
    },
    [continueHRAThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.continueHRA = payload.data;
    },
    [continueHRAThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError = true;
    },
  },
});

export const hraInit = hraSlice.getInitialState();
export const {resetHRA} = hraSlice.actions;
export default hraSlice.reducer;
