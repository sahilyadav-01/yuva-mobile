import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {SERVER}  from '../../utils/utils'

/**
 * Thunks
 */

 // Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
 const SECTION_QUESTION = 'http://'+SERVER+':8080/api/v1/yuva/hra/questions/1'
 
  // Load section question
  export const section1QThunk = createAsyncThunk(
   'section1/section1QThunk',
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
        Q2:'',
        Q3:'',
        Q4:'',
        Q5:'',
        Q8:''
      },
      answers:{
        Q2:'',
        Q3:'',
        Q4:'',
        Q5:'',
        Q58:'0'
        }   
  }

  const section1Slice = createSlice({
    name:'section1',
    initialState,
    
    reducers:{
      dispatch_option(state, {payload}){
        console.log(payload)
        state.answers[payload.key] = payload.value
      }
    },

    extraReducers:{
      // questions thunk
    [section1QThunk.pending]:  (state, {payload}) => {
        state.loading = true
        console.log("pending")
    },
    [section1QThunk.fulfilled]:  (state, {payload}) => {
        state.loading = false
        state.rawQuestions  = payload.data;
        payload.data.map(x => {
          state.questions[x.questionId] = x.question
        })
        console.log(payload)
        console.log("completed")
    },
    [section1QThunk.rejected]:  (state, {payload}) => {
        state.loading = false
        console.log(payload)
        console.log("rejected")
    },
    }

  })

export const {init, dispatch_option} = section1Slice.actions
  
export default section1Slice.reducer


