import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER } from "../../utils/utils";

const PROFILE_API = 'http://' + SERVER + ':8080/api/v1/yuva/profile';

export const profileThunk = createAsyncThunk(
  'profile/profileThunk', 
  async ({jwt}, {fulfillWithValue, rejectWithValue}) => {
    
    try {
      const authToken = 'Bearer ' + jwt;
      return await axios.get(PROFILE_API, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        }
      }).then(resp => resp.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      companyName: '',
      dob: '',
      email: '',
      gender: '',
      name: '',
      number: '',
    },
    loading: false,
    apiError: false,
    apiErrorMessage: '',
    id: '',
    status: false,
  },
  extraReducers: {
    [profileThunk.pending]: (state) => {
      state.loading= true;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.loading= false;
      state.profile = action.payload.data;
    },
    [profileThunk.rejected]: (state, action) => {
      state.loading= false;
      state.apiError = true;
      state.apiErrorMessage = action.payload.message;
      state.status = false;
    },
  }
});

export default profileSlice.reducer;