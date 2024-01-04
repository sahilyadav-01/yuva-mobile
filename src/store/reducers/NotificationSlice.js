import {createSlice} from '@reduxjs/toolkit';
import { logoutThunk } from './AuthSlice';

const initialState = {
  redirectLoading: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setRedirectState(state, {payload}) {
      state.redirectLoading = payload;
    },
  },
  extraReducers: {
    [logoutThunk.pending]: (state) => {
      state.redirectLoading = true;
    },
    [logoutThunk.fulfilled]: (state) => {
      state.redirectLoading = false;
    },
    [logoutThunk.rejected]: (state) => {
      state.redirectLoading = false;
    },
  }
});

export const {setRedirectState} = notificationSlice.actions;
export const notificationInit = notificationSlice.getInitialState();
export default notificationSlice.reducer;
