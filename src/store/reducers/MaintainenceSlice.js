import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maintainence: null,
}

const maintainenceSlice = createSlice({
  name: 'lifestylePackage',
  initialState,
  reducers: {
    maintainceThunk(state, {payload}) {
      state.maintainence = payload;
    },
  },
});

export const { maintainenceInit } = maintainenceSlice.getInitialState();
export const { maintainceThunk } = maintainenceSlice.actions;
export default maintainenceSlice.reducer;
