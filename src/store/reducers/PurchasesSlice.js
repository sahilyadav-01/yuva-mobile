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

export const getPurchases = createAsyncThunk(
  'myPurchases/getPurchases',
  async ({pageNo,pageSize,orderStatus}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/order/order-history/user?pageNo=${pageNo}&pageSize=${pageSize}`;
      const reqBody = {orderStatus};
      const response = await YuvaService.post(endpoint, reqBody);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getPurchaseItemDetails = createAsyncThunk(
  'myPurchases/getItemDetails',
  async ({orderId}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/order/details/user?id=${orderId}`;
      const response = await YuvaService.get(endpoint);
      return {...response.data,orderId};
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const programAndPlanLockThunk = createAsyncThunk(
  'plan/lock',
  async ({programOrPlanUuid,relationId,version}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const requestDto = {programOrPlanUuid,relationId,version}
      const response = await YuvaService.post('/programAndPlan/lock',requestDto);
      return {...response,programOrPlanUuid};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  purchasesTab: 0,
  plansLoading: false,
  plans: null,
  plansError: false,
  purchasesLoading: false,
  purchases: null,
  purchasesError: false,
  purchasesItemDetails:null,
  purchasesDetailLoading: false,
  lockedPlan: false,
};

const purchasesSlice = createSlice({
  name: 'purchases',
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
      console.log('Data',payload.data)
      state.plansLoading = false;
      state.plans = payload.data;
      state.plansError = false;
    },
    [getPlans.rejected]: (state) => {
      state.plansLoading = false;
      state.plans = null;
      state.plansError = true;
    },
    [getPurchases.pending]: state => {
      state.purchasesLoading = true;
      state.purchases = null;
      state.purchasesError = false;
    },
    [getPurchases.fulfilled]: (state, {payload}) => {
      state.purchasesLoading = false;
      state.purchases = payload.data;
      state.purchasesError = false;
    },
    [getPurchases.rejected]: (state) => {
      state.purchasesLoading = false;
      state.purchases = null;
      state.purchasesError = true;
    },
    [getPurchaseItemDetails.pending]: state => {
      state.purchasesDetailLoading = true;
    },
    [getPurchaseItemDetails.fulfilled]: (state, {payload}) => {
      state.purchasesDetailLoading = false;
      if(state.purchasesItemDetails === null) {
       state.purchasesItemDetails = {[`${payload.orderId}`]:payload.data};
      }
      else {
        state.purchasesItemDetails = {...state.purchasesItemDetails,[`${payload.orderId}`]:payload.data}
      }
    },
    [getPurchaseItemDetails.rejected]: (state) => {
      state.purchasesDetailLoading = false;
    },
    [programAndPlanLockThunk.fulfilled]: (state,{payload}) => {
      console.log('Payload',payload);
    }
  },
});

export const {toggleTab} = purchasesSlice.actions;
export const purchasesInit = purchasesSlice.getInitialState();
export default purchasesSlice.reducer;
