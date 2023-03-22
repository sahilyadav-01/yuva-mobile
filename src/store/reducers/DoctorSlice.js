import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../network/yuvaService';

export const searchDoctorThunk = createAsyncThunk(
  'doctor/search',
  async ({search}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/doctor/search?fromApp=true${search}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  loading: false,
  data: [],
  apiError: false,
  apiErrorMessage: '',
  appointment: {},
  tabBarVisible: true,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setTabBarVisible(state, action) {
      state.tabBarVisible = action.payload;
    },
    resetTabBarVisible(state, {payload}) {
      state.tabBarVisible = payload;
    },
  },
  extraReducers: {
    [searchDoctorThunk.pending]: (state, {payload}) => {},
    [searchDoctorThunk.fulfilled]: (state, {payload}) => {
      let data = payload.data;
      state.data = [...data];
    },
    [searchDoctorThunk.rejected]: (state, {payload}) => {},
  },
});
export const doctorInit = doctorSlice.getInitialState();
export const {setTabBarVisible, resetTabBarVisible} = doctorSlice.actions;
export default doctorSlice.reducer;
