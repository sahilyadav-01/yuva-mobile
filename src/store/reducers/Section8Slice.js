import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

export const section8QThunk = createAsyncThunk(
  'section8/section8QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/8';
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
  rawQuestions: [],
  questions: {
    Q51: '',
    Q52: '',
    Q53: '',
    Q54: '',
    Q55: '',
    Q56: '',
  },
  answers: {
    Q51: '',
    Q52: '',
    Q53: '',
    Q54: '',
    Q55: '',
    Q56: '',
  },
};

const section8Slice = createSlice({
  name: 'section8',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
  },

  extraReducers: {
    // questions thunk
    [section8QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section8QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section8QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option} = section8Slice.actions;
export const section8Init = section8Slice.getInitialState();
export default section8Slice.reducer;
