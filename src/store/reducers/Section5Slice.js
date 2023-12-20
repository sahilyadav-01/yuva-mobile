import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

export const section5QThunk = createAsyncThunk(
  'section5/section5QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/5';
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
    Q35: '',
    Q36: '',
    Q37: '',
    Q38: '',
  },
  answers: {
    Q35: '',
    Q36: '',
    Q37: '',
    Q38: '',
  },
  smoke: false,
};

const section5Slice = createSlice({
  name: 'section5',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
    dispatch_condition_1(state,{payload}) {
      state.smoke = payload;
    }
  },

  extraReducers: {
    // questions thunk
    [section5QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section5QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section5QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option, dispatch_condition_1} = section5Slice.actions;
export const section5Init = section5Slice.getInitialState();
export default section5Slice.reducer;
