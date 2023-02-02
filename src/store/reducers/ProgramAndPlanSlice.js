

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LogBox } from 'react-native';
import { SERVER } from '../../utils/utils';


const PROGRAM_AND_PLAN = 'http://' + SERVER + ':8080/api/v1/yuva/programAndPlan';


export const programAndPlanThunk = createAsyncThunk(
    'programAndPlan',
    async ({ jwt,serviceUuid }, { fulfillWithValue, rejectWithValue }) => {
      try {
        const authToken = 'Bearer ' + jwt;
        const url = PROGRAM_AND_PLAN+'?serviceUuid='+`${serviceUuid}`;
        return await axios
          .get(url, {
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




const programAndPlanSlice = createSlice({
    name: 'programAndPlan',
    initialState: {
      user: {
        name: '',
        jwt: '',
        version: '1',
      },
      loading: false,
      apiError: false,
      apiErrorMessage: '', 
    },
    extraReducers: {
      /**
       */
       [programAndPlanThunk.pending]: (state, { payload }) => {
        state.loading = true;
      },
      [programAndPlanThunk.fulfilled]: (state, action) => {
        state.programAndPlan = action.payload?.data || [];
      },
      [programAndPlanThunk.rejected]: (state, action) => {
        state.apiError = true;
      },

    },
  });
  export default programAndPlanSlice.reducer;
  