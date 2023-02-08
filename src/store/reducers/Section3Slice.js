import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const section3QThunk = createAsyncThunk(
  'section3/section3QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/3';
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
    Q15_PHQ: '',
    Q16_PHQ: '',
    Q17_PHQ: '',
    Q18_PHQ: '',
    Q19_PHQ: '',
    Q20_PHQ: '',
    Q21_PHQ: '',
    Q22_PHQ: '',
    Q23_PHQ: '',
    Q24_GAD: '',
    Q25_GAD: '',
    Q26_GAD: '',
    Q27_GAD: '',
    Q28_GAD: '',
    Q29_GAD: '',
    Q30_GAD: '',
  },
  answers: {
    Q15_PHQ: '',
    Q16_PHQ: '',
    Q17_PHQ: '',
    Q18_PHQ: '',
    Q19_PHQ: '',
    Q20_PHQ: '',
    Q21_PHQ: '',
    Q22_PHQ: '',
    Q23_PHQ: '',
    Q24_GAD: '',
    Q25_GAD: '',
    Q26_GAD: '',
    Q27_GAD: '',
    Q28_GAD: '',
    Q29_GAD: '',
    Q30_GAD: '',
  },
};

const section3Slice = createSlice({
  name: 'section3',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
  },

  extraReducers: {
    // questions thunk
    [section3QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section3QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section3QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option} = section3Slice.actions;
export const section3Init = section3Slice.getInitialState();
export default section3Slice.reducer;
