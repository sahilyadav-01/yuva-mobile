import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

export const section1QThunk = createAsyncThunk(
  'section1/section1QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/1';
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
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q58: '',
  },
  answers: {
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q58: '',
  },
};

const section1Slice = createSlice({
  name: 'section1',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
  },

  extraReducers: {
    // questions thunk
    [section1QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section1QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section1QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option} = section1Slice.actions;
export const section1Init = section1Slice.getInitialState();
export default section1Slice.reducer;
