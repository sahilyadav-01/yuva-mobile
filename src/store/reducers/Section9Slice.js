import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';
import * as FileSystem from 'react-native-fs';

/**
 * Thunks
 */

// Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
const SECTION_QUESTION =
  'http://' + SERVER + ':8080/api/v1/yuva/hra/questions/9';
const SUBMISSION_QUESTION =
  'http://' + SERVER + ':8080/api/v1/yuva/hra/answers2';
//const DOWNLOAD_REPORT = 'http://' + SERVER + ':8080/api/v1/yuva/hraPdfReport';
const CHECK_REPORT =
  'http://' + SERVER + ':8080/api/v1/yuva/hraPdfReport/status';

// Load section question
export const section9QThunk = createAsyncThunk(
  'section9/section9QThunk',
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
 * Check the status of the report
 */
export const reportStatusThunk = createAsyncThunk(
  'section9/status',
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;

      return await axios
        .get(CHECK_REPORT, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
        })
        .then(async resp => {
          return resp.data;
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
        });
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)

      return rejectWithValue(error.response.data);
    }
  },
);

/**
 * Download file
 */

/**
 * Download Report
 */

// export const reportDownloadThunk = createAsyncThunk(
//   'section9/download',
//   async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
//     try {
//       const authToken = 'Bearer ' + jwt;
//       return await axios
//         .get(
//           DOWNLOAD_REPORT,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               Authorization: authToken,
//             },
//           },
//         )
//         .then(resp => resp.data);
//     } catch (error) {
//       //const errorOject =  JSON.stringify(error.response.data)

//       return rejectWithValue(error.response.data);
//     }
//   },
// );

export const finalSubmission = createAsyncThunk(
  'section9/finalSubmission',
  async ({jwt, data}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const authToken = 'Bearer ' + jwt;

      return await axios
        .post(SUBMISSION_QUESTION, data, {
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
  reportDownload:false,
 
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

    /**
     * Report status
     */
    [reportStatusThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [reportStatusThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.reportStatus = payload.data;
      state.reportDownload=payload.data.filePath;
     

      //state.reportStatus=false
    },
    [reportStatusThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.apiError=true;
      state.apiErrorMessage = payload.error;

    },

    // Final Submissionn
    [finalSubmission.pending]: (state, {payload}) => {
      state.loading = true;
      state.reportStatus = false;
  
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
      state.metrics['Score'] = {label: 'Score', value: score};
      state.result = true;

    },
    [finalSubmission.rejected]: (state, {payload}) => {
      state.loading = false;
    },
  },
});

export const {init, dispatch_option, dispatch_reset_result} =
  section9Slice.actions;

export default section9Slice.reducer;
