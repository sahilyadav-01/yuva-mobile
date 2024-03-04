import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

export const section4QThunk = createAsyncThunk(
  'section4/section4QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/4';
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
    Q31: '',
    Q32: '',
    Q33: '',
    Q34: '',
  },
  answers: {
    Q31: '',
    Q32: '',
    Q33: '',
    Q34: '',
  },
  alcohol: false,
};

const section4Slice = createSlice({
  name: 'section4',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
    dispatch_condition_1(state,{payload}) {
      state.alcohol = payload;
    }
  },

  extraReducers: {
    // questions thunk
    [section4QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section4QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section4QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option, dispatch_condition_1} = section4Slice.actions;
export const section4Init = section4Slice.getInitialState();
export default section4Slice.reducer;
