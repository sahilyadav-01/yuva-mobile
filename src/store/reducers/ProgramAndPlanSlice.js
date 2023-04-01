import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const programAndPlanThunk = createAsyncThunk(
  'programAndPlan',
  async ({ serviceUuid }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/programAndPlan?serviceUuid=${serviceUuid}`
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

export const popularPackageNameThunk = createAsyncThunk(
  'package/popular',
  async ({ pageNo, pageSize, search }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/package/popular?pageNo=${pageNo}&pageSize=${pageSize}${search ? `&search=${search}` : ''}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);

export const planPopularThunk = createAsyncThunk(
  'plan/popular',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/plan/popular`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)
export const planDetailsThunk = createAsyncThunk(
  'plan/details',
  async (Uuid, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/plan/details?planUuid=${Uuid}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export const planAmountThunk = createAsyncThunk(
  'plan/amount',
  async (planUuid, { fulfillWithValue, rejectWithValue }) => {
    try {
      const endpoint = `/plan/amount?planUuid=${planUuid.planUuid}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)
const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  programAndPlan: [],
  popularPackageName: null,
  popularPlan: [],
  planDetails: '',
  planAmountToBePaid: null,
  planCostAfterDiscount: null,
  planDiscountBeforeCoupon: null,
  planDiscountForCoupon: null,
  planPrice: null,
  planTotalDiscount: null,
}

const programAndPlanSlice = createSlice({
  name: 'programAndPlan',
  initialState,
  reducers: {
    popularPackageName(state, action) {
      state.popularPackageName = action?.payload?.data;
    },
    resetPackages(state) {
      state.popularPackageName = null
    },
    setIndex(state, { payload }) {
      state.mainItem = payload;
    },
  },
  extraReducers: {
    /**
     */
    [programAndPlanThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [programAndPlanThunk.fulfilled]: (state, action) => {
      state.programAndPlan = action.payload?.data || [];
    },
    [programAndPlanThunk.rejected]: (state, action) => {
      state.apiError = true;
    },

    /**
     * popularPackageName
     */
    [popularPackageNameThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [popularPackageNameThunk.fulfilled]: (state, { payload }) => {
      state.popularPackageName = payload?.data;
    },
    [popularPackageNameThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    [planPopularThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [planPopularThunk.fulfilled]: (state, { payload }) => {
      state.popularPlan = payload?.data;
      state.loading = false;
    },
    [planPopularThunk.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [planDetailsThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [planDetailsThunk.fulfilled]: (state, { payload }) => {
      state.planDetails = payload.data?.filter(item => { if (item !== null) return item });
      state.loading = false;
    },
    [planDetailsThunk.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [planAmountThunk.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [planAmountThunk.fulfilled]: (state, { payload }) => {
      state.planAmountToBePaid = payload?.data.planAmountResponse.ANNUALLY.amountToBePaid;
      state.planCostAfterDiscount = payload?.data.planAmountResponse.ANNUALLY.costAfterDiscount;
      state.planDiscountBeforeCoupon = payload?.data.planAmountResponse.ANNUALLY.discountBeforeCoupon;
      state.planDiscountForCoupon = payload?.data.planAmountResponse.ANNUALLY.discountForCoupon;
      state.planPrice = payload?.data.planAmountResponse.ANNUALLY.price;
      state.planTotalDiscount = payload?.data.planAmountResponse.ANNUALLY.totalDiscount;
      state.loading = false;
    },
    [planAmountThunk.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { programAndPlanInit } = programAndPlanSlice.getInitialState();
export const { popularPackageName, setIndex, setPlanDetails, resetPackages } = programAndPlanSlice.actions;
export default programAndPlanSlice.reducer;
