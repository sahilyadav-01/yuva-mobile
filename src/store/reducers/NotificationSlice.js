import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fcm: null,
};

const fcmSlice = createSlice({
  name: 'fcmSlice',
  initialState,
  reducers: {
    setFcmToken(state, {payload}) {
      state.fcm = payload;
    },
  },
});

export const {fcm} = fcmSlice.getInitialState();
export const {setFcmToken} = fcmSlice.actions;
export default fcmSlice.reducer;
