import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {SERVER}  from '../../utils/utils'

/**
 * Thunks
 */

 // Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
 const SECTION_QUESTION = 'http://'+SERVER+':8080/api/v1/yuva/hra/questions/7'
 
  // Load section question
  export const section7QThunk = createAsyncThunk(
   'section7/section7QThunk',
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
        Q41:'',
        Q42:'',
        Q43:'',
        Q44:'',
        Q45:'',
        Q46:'',
        Q47:'',
        Q48:'',
        Q49:'',
        Q50:'',
      },
      answers:{
        Q41:'',
        Q42:'',
        Q43:'',
        Q44:'',
        Q45:'',
        Q46:'',
        Q47:'',
        Q48:'',
        Q49:'',
        Q50:'',
        }   
  }

  const section7Slice = createSlice({
    name:'section7',
    initialState,
    
    reducers:{
      dispatch_option(state, {payload}){
        state.answers[payload.key] = payload.value
      }
    },

    extraReducers:{
      // questions thunk
    [section7QThunk.pending]:  (state, {payload}) => {
        state.loading = true
        console.log("pending")
    },
    [section7QThunk.fulfilled]:  (state, {payload}) => {
        state.loading = false
        state.rawQuestions  = payload.data;
        payload.data.map(x => {
          state.questions[x.questionId] = x.question
        })
        console.log(payload)
        console.log("completed")
    },
    [section7QThunk.rejected]:  (state, {payload}) => {
        state.loading = false
        console.log(payload)
        console.log("rejected")
    },
    }

  })

export const {init,dispatch_option} = section7Slice.actions
  
export default section7Slice.reducer


