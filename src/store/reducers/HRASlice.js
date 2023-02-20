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
        return {data:response.data.data,sectionId};
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    },
  );

  export const resetHRAData = createAsyncThunk(
    'hra/resetHRADataThunk',
    async (params={}, {fulfillWithValue, rejectWithValue}) => {
      try {
        const endpoint = '/hra/section';
        await YuvaService.delete(endpoint);
        return null;
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
  continueHRAStatus: false,
  sectionData: null,
  saveHRALoading: false,
  saveHRAError: false,
  sectionId: null,
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
      state.continueHRAStatus = false;
    },
    [continueHRAThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.continueHRA = payload.data;
      state.continueHRAStatus = true;
    },
    [continueHRAThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError = true;
    },
    [fetchSavedHRA.pending]: (state) => {
      state.saveHRALoading = true;
      state.saveHRAError = false;
      state.sectionData = null;
      state.sectionId = null;
    },
    [fetchSavedHRA.fulfilled]: (state,{payload}) => {
      state.saveHRALoading = false;
      state.sectionData = payload.data ? JSON.parse(payload.data) : null;
      state.sectionId = payload.sectionId;
    },
    [fetchSavedHRA.rejected]: (state) => {
      state.saveHRALoading = false;
      state.saveHRAError = true;
    }
  },
});

export const hraInit = hraSlice.getInitialState();
export const {resetHRA} = hraSlice.actions;
export default hraSlice.reducer;
