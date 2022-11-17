import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';

/**
 * Thunks
 */

// Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
const SECTION_QUESTION =
  'http://' + SERVER + ':8080/api/v1/yuva/hra/questions/6';

// Load section question
export const section6QThunk = createAsyncThunk(
  'section6/section6QThunk',
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
    Q39: '',
    Q40: '',
  },
  answers: {
    Q39: '',
    Q40: '',
  },
};

const section6Slice = createSlice({
  name: 'section6',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
  },

  extraReducers: {
    // questions thunk
    [section6QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section6QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section6QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option} = section6Slice.actions;

export default section6Slice.reducer;
