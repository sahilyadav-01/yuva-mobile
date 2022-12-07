
import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SERVER} from '../../utils/utils';


const VIEW_TEST='http://' + SERVER + ':8080/api/v1/yuva/employee/viewMyTestAndPackage';


export const viewMyTestAndPackageThunk = createAsyncThunk(
    'employee/viewMyTestAndPackage',
    async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
      try {
        const authToken = 'Bearer ' + jwt;
        const url = VIEW_TEST;
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

  const diagnosticSlice = createSlice({
    name:'diagnostic',
    initialState: {
      user: {
        name: '',
        jwt: '',
        version: '1',
      },
      loading: false,
      apiError: false,
      apiErrorMessage: '',
      testData:'',
    },
    reducers: {
      hideErrorBox(state) {
        state.apiError = false;
        state.apiErrorMessage = '';
      },
    },
    extraReducers: {
      /**
       * Login thunk handler
       */
      [viewMyTestAndPackageThunk.pending]: (state, {payload}) => {
        state.loading = true;
      },
      [viewMyTestAndPackageThunk.fulfilled]: (state, action) => {
        state.loading = false;
        state.testData=action.payload;
      },
      [viewMyTestAndPackageThunk.rejected]: (state, action) => {
        state.loading = false;
        state.apiError = true;
        //state.apiErrorMessage = action.payload.errorMessage;
      },
     
  
    },
  });
  export const {
    hideErrorBox,
  } = diagnosticSlice.actions;
  export default diagnosticSlice.reducer;
  