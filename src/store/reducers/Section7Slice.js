import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';

export const section7QThunk = createAsyncThunk(
  'section7/section7QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/7';
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
    Q41: '',
    Q42: '',
    Q43: '',
    Q44: '',
    Q45: '',
    Q46: '',
    Q47: '',
    Q48: '',
    Q49: '',
    Q50: '',
  },
  answers: {
    Q41: '',
    Q42: '',
    Q43: '',
    Q44: '',
    Q45: '',
    Q46: '',
    Q47: '',
    Q48: '',
    Q49: '',
    Q50: '',
  },
  extra_questions_Q9A: '',
  extra_questions_Q10A: '',
  medicalCondition: false,
  medicalCondition1 :false,
  medicalConditionDiabetes : false,
  medicalConditionHypertension : false,
  medicalConditionDoYouSufferFromAnyIllness : false,
  medicalConditionAnyCancer : false,
  medicalConditionChronicIllness : false,
};

const section7Slice = createSlice({
  name: 'section7',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
    dispatch_option_extra_questions(state, {payload}) {
      if(payload.key=="setQuestion9A"){

      state.extra_questions_Q9A = payload.value;
        }
      if(payload.key=="setQuestion10A"){
        
      state.extra_questions_Q10A = payload.value;
      }
    },
    dispatch_condition_1(state,{payload}){
      state.medicalCondition = payload;
    },
    dispatch_condition_2(state,{payload}){
      state.medicalCondition1 = payload;
    },
    dispatch_condition_3(state,{payload}){
      state.medicalConditionDiabetes = payload;
    },
    dispatch_condition_4(state,{payload}){
      state.medicalConditionHypertension = payload;
    },
    dispatch_condition_5(state,{payload}){
      state.medicalConditionDoYouSufferFromAnyIllness = payload;
    },
    dispatch_condition_6(state,{payload}){
      state.medicalCondition = payload;
    },
    dispatch_condition_7(state,{payload}){
      state.medicalConditionChronicIllness = payload;
    },
  },

  extraReducers: {
    // questions thunk
    [section7QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section7QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
      payload.data.map(x => {
        state.questions[x.questionId] = x.question;
      });
    },
    [section7QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option , dispatch_option_extra_questions, dispatch_condition_1, dispatch_condition_2, dispatch_condition_3, dispatch_condition_4, dispatch_condition_5, dispatch_condition_6, dispatch_condition_7} = section7Slice.actions;
export const section7Init = section7Slice.getInitialState();
export default section7Slice.reducer;
