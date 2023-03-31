import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const getPlans = createAsyncThunk(
  'myPurchases/plan',
  async ({pageNo,pageSize,orderStatus}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/order/user/plan/subscription?pageNo=${pageNo}&pageSize=${pageSize}`;
      const reqBody = {orderStatus};
      const response = await YuvaService.post(endpoint, reqBody);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  purchasesTab: 0,
  plansLoading: false,
  plans: null,
  plansError: false,
};

const purchasesSlice = createSlice({
  name: 'myPurchases',
  initialState,
  reducers: {
    toggleTab: (state, {payload}) => {
      state.purchasesTab = payload;
    },
  },
  extraReducers: {
    [getPlans.pending]: state => {
      state.plansLoading = true;
      state.plans = null;
      state.plansError = false;
    },
    [getPlans.fulfilled]: (state, {payload}) => {
      state.plansLoading = false;
      state.plans = payload.data;
      state.plansError = false;
    },
    [getPlans.rejected]: (state) => {
      state.plansLoading = false;
      state.plans = null;
      state.plansError = true;
    },
  },
});

export const {toggleTab} = purchasesSlice.actions;
export const purchasesInit = purchasesSlice.getInitialState();
export default purchasesSlice.reducer;
