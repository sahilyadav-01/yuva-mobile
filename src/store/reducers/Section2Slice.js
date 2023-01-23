import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

// Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
const SECTION_QUESTION =
  'http://' + SERVER + ':8080/api/v1/yuva/hra/questions/2';

// Load section question
export const section2QThunk = createAsyncThunk(
  'section2/section2QThunk',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;

      return await axios
        .get(SECTION_QUESTION, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        })
        .then(resp => resp.data);
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

/**
 * initialState
 */

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
