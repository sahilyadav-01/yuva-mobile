import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

//const DOWNLOAD_REPORT = 'http://' + SERVER + ':8080/api/v1/yuva/hraPdfReport';
export const section9QThunk = createAsyncThunk(
  'section9/section9QThunk',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/questions/9';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const reportStatusThunk = createAsyncThunk(
  'section9/status',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hraPdfReport/status';
      const response = await YuvaService.get(endpoint);
      return response.data;
      //  //Check condition
      //  const response = await axios.get(DOWNLOAD_REPORT,{
      //   headers: {
      //   'Authorization':authToken
      //   },
      //   responseType: 'blob'
      // });
      //  const fr = new FileReader();
      //  fr.onload = async () => {
      //      const fileUri = `${FileSystem.documentDirectory}/document.pdf`;
      //      const result = await FileSystem.writeAsStringAsync(fileUri, fr.result.split(',')[1], {encoding: FileSystem.EncodingType.Base64});
      //      saveFile(fileUri);

      //  };
      //  fr.readAsDataURL(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const finalSubmission = createAsyncThunk(
  'section9/finalSubmission',
  async ({final_data}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/hra/answers2';
      const response = await YuvaService.post(endpoint, final_data);
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
    Q57: '',
  },
  answers: {
    Q57: '',
  },
  chart: [
    {
      data: [
        {x: 'BMI', y: 2},
        {x: 'WAIST', y: 4},
        {x: 'DIETARY', y: 5},
        {x: 'ALCOHOL', y: 6},
        {x: 'TOBACCO', y: 3},
        {x: 'SMOKING', y: 4},
        {x: 'SAFETY', y: 5},
      ],
      color: '#297AB1',
    },
  ],
  metrics: {},
  result: false,
  reportStatus: false,
  reportDownload: false,
  hraComplete: false,
};

const section9Slice = createSlice({
  name: 'section9',
  initialState,

  reducers: {
    dispatch_option(state, {payload}) {
      state.answers[payload.key] = payload.value;
    },
    dispatch_reset_result(state, {payload}) {
      state.result = false;
    },
    reset_complete(state) {
      state.hraComplete = false;
    },
  },

  extraReducers: {
    // questions thunk
    [section9QThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [section9QThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.rawQuestions = payload.data;
    },
    [section9QThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
    [reportStatusThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [reportStatusThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.reportStatus = payload.data;
      state.reportDownload = payload.data?.filePath;

      //state.reportStatus=false
    },
    [reportStatusThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError = true;
      state.apiErrorMessage = payload.error;
    },

    // Final Submissionn
    [finalSubmission.pending]: (state, {payload}) => {
      state.loading = true;
      state.reportStatus = false;
      state.hraComplete = false;
    },
    [finalSubmission.fulfilled]: (state, {payload}) => {
      state.loading = false;

      let score = 0;
      state.chart[0].data = [];

      if (payload.data != null) {
        // Object.values(payload.data).flat().map(item => {
        //   if(item.attribute == "DIETARY"){
        //     state.metrics[item.attribute] = {"label":"Diet Risk", value:item.healthRiskType}
        //   } else if (item.attribute == "BMI"){
        //     state.metrics[item.attribute] = {"label":"BMI", value:item.value}
        //   } else if (item.attribute == "WAIST CIRCUMFERENCE"){
        //     state.metrics[item.attribute] = {"label":"WAIST", value:item.value}
        //   }
        //   let hscore =  item.healthRiskScore ==  null ? 0: parseInt(item.healthRiskScore)
        //   score =  score+hscore
        //   state.chart[0].data.push({x:item.attribute, y:hscore})
        // })
      }
      state.metrics.Score = {label: 'Score', value: score};
      state.result = true;
      state.hraComplete = true;
    },
    [finalSubmission.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option, dispatch_reset_result, reset_complete} =
  section9Slice.actions;
export const section9Init = section9Slice.getInitialState();
export default section9Slice.reducer;
