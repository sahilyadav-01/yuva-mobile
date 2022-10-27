import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {SERVER}  from '../../utils/utils'

/**
 * Thunks
 */

 // Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
 const SECTION_QUESTION = 'http://'+SERVER+':8080/api/v1/yuva/hra/questions/3'
 
  // Load section question
  export const section3QThunk = createAsyncThunk(
   'section3/section3QThunk',
   async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
       try {
            const authToken = 'Bearer '+jwt
            console.log(authToken)
            return await axios.get(SECTION_QUESTION, {
              headers: {
              'Content-Type': 'application/json',
              'Authorization':authToken
              }
            })
            .then(resp => resp.data)
       }catch(error){
           //const errorOject =  JSON.stringify(error.response.data)
           console.log(error)
           return rejectWithValue(error.response.data)
       }
   } 
 )

 /**
  * initialState
  */

  const initialState = {
      loading:false,
      apiError:false,
      apiErrorMessage:'',
      rawQuestions:[],
      questions:{
        Q15_PHQ:'',
        Q16_PHQ:'',
        Q17_PHQ:'',
        Q18_PHQ:'',
        Q19_PHQ:'',
        Q20_PHQ:'',
        Q21_PHQ:'',
        Q22_PHQ:'',
        Q23_PHQ:'',
        Q24_GAD:'',
        Q25_GAD:'',
        Q26_GAD:'',
        Q27_GAD:'',
        Q28_GAD:'',
        Q29_GAD:'',
        Q30_GAD:'',
      },
      answers:{
        Q15_PHQ:'',
        Q16_PHQ:'',
        Q17_PHQ:'',
        Q18_PHQ:'',
        Q19_PHQ:'',
        Q20_PHQ:'',
        Q21_PHQ:'',
        Q22_PHQ:'',
        Q23_PHQ:'',
        Q24_GAD:'',
        Q25_GAD:'',
        Q26_GAD:'',
        Q27_GAD:'',
        Q28_GAD:'',
        Q29_GAD:'',
        Q30_GAD:'',
        }   
  }

  const section3Slice = createSlice({
    name:'section3',
    initialState,
    
    reducers:{
      dispatch_option(state, {payload}){
        state.answers[payload.key] = payload.value
      }
    },

    extraReducers:{
      // questions thunk
    [section3QThunk.pending]:  (state, {payload}) => {
        state.loading = true
        console.log("pending")
    },
    [section3QThunk.fulfilled]:  (state, {payload}) => {
        state.loading = false
        state.rawQuestions  = payload.data;
        payload.data.map(x => {
          state.questions[x.questionId] = x.question
        })
        console.log(payload)
        console.log("completed")
    },
    [section3QThunk.rejected]:  (state, {payload}) => {
        state.loading = false
        console.log(payload)
        console.log("rejected")
    },
    }

  })

export const {init, dispatch_option} = section3Slice.actions
  
export default section3Slice.reducer


