import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

export const programAndPlanThunk = createAsyncThunk(
  'programAndPlan',
  async ({serviceUuid}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/programAndPlan?serviceUuid=${serviceUuid}`;
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
  async ({pageNo, pageSize, search}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/package/popular?pageNo=${pageNo}&pageSize=${pageSize}${
        search ? `&search=${search}` : ''
      }`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      //const errorOject =  JSON.stringify(error.response.data)
      return rejectWithValue(error.response.data);
    }
  },
);


export const fetchHomeScreenPackages = createAsyncThunk(
  'packages/home-screen',
  async (params = null, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/package/home-screen?limit=3`;
      const response = await YuvaService.get(endpoint);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchHomeScreenTests = createAsyncThunk(
  'tests/home-screen',
  async (params = null, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/test/home-screen?limit=3`;
      const response = await YuvaService.get(endpoint);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const planPopularThunk = createAsyncThunk(
  'plan/popular',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/plan/popular`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const getAllPlanServicesThunk = createAsyncThunk(
  'plan/services',
  async (Uuid, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/plan/services?planUuid=${Uuid}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const planDetailsThunk = createAsyncThunk(
  'plan/details',
  async (Uuid, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/plan/user/details?planUuid=${Uuid}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const planAmountThunk = createAsyncThunk(
  'plan/amount',
  async (planUuid, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/plan/amount?planUuid=${planUuid.planUuid}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const requestCallThunk = createAsyncThunk(
  'plan/call',
  async ({number}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/plan/call?number=${number}`;
      const response = await YuvaService.post(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const myProgramThunk = createAsyncThunk(
  'my/program',
  async ({pageNo, pageSize}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/my/program?pageNo=${pageNo}&pageSize=${pageSize}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchHomeScreenPlans = createAsyncThunk(
  'plans/home-screen',
  async (params=null, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/plan/home-screen`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const programAndPlanLockUserThunk = createAsyncThunk(
  'program/lock',
  async (
    {programOrPlanUuid, relationId, version, userVersion},
    {fulfillWithValue, rejectWithValue},
  ) => {
    try {
      const requestDto = {programOrPlanUuid, relationId, version, userVersion};
      const response = await YuvaService.post(
        '/programAndPlan/lock',
        requestDto,
      );
      return {...response, programOrPlanUuid, version, userVersion};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const initialState = {
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  programAndPlan: [],
  popularPackageName: null,
  popularPlan: [],
  planDetails: '',
  planAmountToBePaid: 0,
  planCostAfterDiscount: 0,
  planDiscountBeforeCoupon: 0,
  planPrice: 0,
  planDetails: '',
  requestCall: '',
  myProgramUserData: null,
  plansLoading: false,
  plansError: false,
  planLockError: false,
  lockedState: [],
  planLockLoading: false,
  guestPlanData: {},
  ourPlanData: [],
  planDetailsLoading: false,
  planDetailsError: false,
  getAllPlanServices: [],
  getAllPlanServicesLoading: false,
  getAllPlanServicesError: false,
  planType: '',
  homePackages: {loading: false, data: [], error: false},
  homeTests: {loading: false, data: [], error: false},
  homePlans: {loading: false, data: [], error: false},
};

const programAndPlanSlice = createSlice({
  name: 'programAndPlan',
  initialState,
  reducers: {
    popularPackageName(state, action) {
      state.popularPackageName = action?.payload?.data;
    },
    resetPackages(state) {
      state.popularPackageName = null;
      state.requestCall = null;
    },
    setIndex(state, {payload}) {
      state.mainItem = payload;
    },
    setOurPlanData(state, {payload}) {
      state.ourPlanData = payload;
    },
    saveGuestPlanData(state, {payload}) {
      state.guestPlanData = payload;
    },
    selectedItem(state, {payload}) {
      state.setItemName = payload;
    },
  },
  extraReducers: {
    /**
     */
    [programAndPlanThunk.pending]: (state, {payload}) => {
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
    [popularPackageNameThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [popularPackageNameThunk.fulfilled]: (state, {payload}) => {
      state.popularPackageName = payload?.data;
    },
    [popularPackageNameThunk.rejected]: (state, action) => {
      state.apiError = true;
    },
    [planPopularThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [planPopularThunk.fulfilled]: (state, {payload}) => {
      state.popularPlan = payload?.data;
      state.loading = false;
    },
    [planPopularThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
    [getAllPlanServicesThunk.pending]: (state, {payload}) => {
      state.getAllPlanServicesLoading = true;
      state.getAllPlanServicesError = false;
      state.getAllPlanServices = [];
    },
    [getAllPlanServicesThunk.fulfilled]: (state, {payload}) => {
      state.getAllPlanServices = payload.data;
      state.getAllPlanServicesLoading = false;
      state.getAllPlanServicesError = false;
    },
    [getAllPlanServicesThunk.rejected]: (state, {payload}) => {
      state.getAllPlanServicesLoading = false;
      state.getAllPlanServicesError = true;
      state.getAllPlanServices = [];
    },
    [planDetailsThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.planDetailsLoading = true;
      state.planDetailsError = false;
    },
    [planDetailsThunk.fulfilled]: (state, {payload}) => {
      state.planDetails = payload.data?.filter(item => {
        if (item !== null && item !== 'null') return item;
      });
      state.loading = false;
      state.planDetailsLoading = false;
      state.planDetailsError = false;
    },
    [planDetailsThunk.rejected]: (state, {payload}) => {
      state.loading = false;
      state.planDetailsLoading = false;
      state.planDetailsError = true;
    },
    [planAmountThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [planAmountThunk.fulfilled]: (state, {payload}) => {
      state.planAmountToBePaid = payload?.data.planAmountResponse;
      state.planCostAfterDiscount = payload?.data.planAmountResponse;
      state.planDiscountBeforeCoupon = payload?.data.planAmountResponse;
      state.planPrice = payload?.data?.planAmountResponse;
      state.planType = payload?.data?.planType;
      state.loading = false;
    },
    [planAmountThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },
    [requestCallThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [requestCallThunk.fulfilled]: (state, {payload}) => {
      state.requestCall = payload;
      state.loading = false;
    },
    [requestCallThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },

    /***** programLock */

    [myProgramThunk.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [myProgramThunk.fulfilled]: (state, {payload}) => {
      state.myProgramUserData = payload;
      state.loading = false;
    },
    [myProgramThunk.rejected]: (state, {payload}) => {
      state.loading = false;
    },

    [programAndPlanLockUserThunk.pending]: state => {
      state.planLockLoading = true;
      state.planLockError = false;
    },
    [programAndPlanLockUserThunk.fulfilled]: (state, {payload}) => {
      state.planLockLoading = false;
      state.planLockError = false;
      state.lockedState = [
        ...state.lockedState,
        {uuid: payload.programOrPlanUuid},
      ];
    },
    [programAndPlanLockUserThunk.rejected]: (state, {payload}) => {
      state.planLockLoading = false;
      state.planLockError = true;
      if (payload?.response?.status === 400) {
        Alert.alert(
          'Alert',
          payload?.response?.data?.errorMessage ?? 'Program already locked',
        );
      }
    },
    [fetchHomeScreenPackages.pending]: (state) => {
      state.homePackages.loading = true;
      state.homePackages.data = [];
      state.homePackages.error = false;
    },
    [fetchHomeScreenPackages.fulfilled]: (state,{payload}) => {
      state.homePackages.loading = false;
      state.homePackages.data = payload?.data;
      state.homePackages.error = false;
    },
    [fetchHomeScreenPackages.rejected]: (state) => {
      state.homePackages.loading = false;
      state.homePackages.data = [];
      state.homePackages.error = true;
    },
    [fetchHomeScreenTests.pending]: (state) => {
      state.homeTests.loading = true;
      state.homeTests.data = [];
      state.homeTests.error = false;
    },
    [fetchHomeScreenTests.fulfilled]: (state,{payload}) => {
      state.homeTests.loading = true;
      state.homeTests.data = payload?.data;
      state.homeTests.error = false;
    },
    [fetchHomeScreenTests.rejected]: (state) => {
      state.homeTests.loading = false;
      state.homeTests.data = [];
      state.homeTests.error = true;
    },
    [fetchHomeScreenPlans.pending]: (state) => {
      state.homePlans.loading = true;
      state.homePlans.data = [];
      state.homePlans.error = false;
    },
    [fetchHomeScreenPlans.fulfilled]: (state,{payload}) => {
      state.homePlans.loading = true;
      state.homePlans.data = payload?.data;
      state.homePlans.error = false;
    },
    [fetchHomeScreenPlans.rejected]: (state) => {
      state.homePlans.loading = false;
      state.homePlans.data = [];
      state.homePlans.error = true;
    },
  },
});

export const {programAndPlanInit} = programAndPlanSlice.getInitialState();
export const {
  popularPackageName,
  setIndex,
  setPlanDetails,
  resetPackages,
  saveGuestPlanData,
  setOurPlanData,
  selectedItem,
} = programAndPlanSlice.actions;
export default programAndPlanSlice.reducer;
