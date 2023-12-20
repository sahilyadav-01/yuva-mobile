import {createSlice} from '@reduxjs/toolkit';

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
});

export const {setRedirectState} = notificationSlice.actions;
export const notificationInit = notificationSlice.getInitialState();
export default notificationSlice.reducer;
