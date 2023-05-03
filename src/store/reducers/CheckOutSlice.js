import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  relationData: {},
  addressData: {},
  scheduleDate: {},
  processingCharge: 0,
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
    dispatch_scheduleData(state, {payload}) {
       state.scheduleDate= payload;
    },
    dispatch_processingCharge(state, {payload}) {
      state.processingCharge= payload;
   },
  },
});

export const checkOutInit = checkOutSlice.getInitialState();
export const { dispatch_relationData, dispatch_addressData, dispatch_scheduleData, dispatch_processingCharge} = checkOutSlice.actions;
export default checkOutSlice.reducer;