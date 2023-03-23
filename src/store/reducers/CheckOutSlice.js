import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  relationData: {},
  addressData: {},
  scheduleDate: {},
};

const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,

  reducers: {
    dispatch_relationData(state, payload) {
      state.relationData = payload?.payload?.userData;
    },
    dispatch_addressData(state, payload) {
      state.addressData = payload?.payload?.selectedAddress;
    },
    dispatch_scheduleData(state, payload) {
       state.scheduleDate= payload?.payload;
    },
  },
});

export const checkOutInit = checkOutSlice.getInitialState();
export const { dispatch_relationData, dispatch_addressData, dispatch_scheduleData} = checkOutSlice.actions;
export default checkOutSlice.reducer;