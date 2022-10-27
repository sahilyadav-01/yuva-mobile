import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import {SERVER}  from '../../utils/utils'

/**
 * Thunks
 */

 // Constants
//  const LOCAL_SERVER='localhost'
//  const SERVER = LOCAL_SERVER;
 const SECTION_QUESTION = 'http://'+SERVER+':8080/api/v1/yuva/hra/questions/8'
 
  // Load section question
  export const section8QThunk = createAsyncThunk(
   'section8/section8QThunk',
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
        Q51:'',
        Q52:'',
        Q53:'',
        Q54:'',
        Q55:'',
        Q56:''
      },
      answers:{
        Q51:'',
        Q52:'',
        Q53:'',
        Q54:'',
        Q55:'',
        Q56:'',
        }   
  }

  const section8Slice = createSlice({
    name:'section8',
    initialState,
    
    reducers:{
      dispatch_option(state, {payload}){
        state.answers[payload.key] = payload.value
      }
    },

    extraReducers:{
      // questions thunk
    [section8QThunk.pending]:  (state, {payload}) => {
        state.loading = true
        console.log("pending")
    },
    [section8QThunk.fulfilled]:  (state, {payload}) => {
        state.loading = false
        state.rawQuestions  = payload.data;
        payload.data.map(x => {
          state.questions[x.questionId] = x.question
        })
        console.log(payload)
        console.log("completed")
    },
    [section8QThunk.rejected]:  (state, {payload}) => {
        state.loading = false
        console.log(payload)
        console.log("rejected")
    },
    }

  })

export const {init, dispatch_option} = section8Slice.actions
  
export default section8Slice.reducer


