import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const section2QThunk = createAsyncThunk(
  'section2/section2QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/2';
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
    Q6: '',
    Q7: '',
    Q8: '',
    Q9: '',
    Q10: '',
    Q11: '',
    Q12: '',
    Q13: '',
    Q14: '',
  },
  answers: {
    Q6: '',
    Q7: '',
    Q8: '',
    Q9: '',
    Q10: '',
    Q11: '',
    Q12: '',
    Q13: '',
    Q14: '',
  },
};

const section2Slice = createSlice({
  name: 'section2',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
  },

  extraReducers: {
    // questions thunk
    [section2QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section2QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section2QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option} = section2Slice.actions;
export const section2Init = section2Slice.getInitialState();
export default section2Slice.reducer;
