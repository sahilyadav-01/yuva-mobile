import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';
import {logoutThunk} from './AuthSlice';

const initialState = {
  permissionStatus: false,
  fetchCityLoading: false,
  fetchCityError: false,
  currentCityDetails: null,
};

export const getCurrentCity = createAsyncThunk(
  'location/currentCity',
  async ({latitude, longitude}) => {
    const endpoint = `/city/getCity?latitude=${latitude}&longitude=${longitude}&useFreeApi=true`;
    const response = await YuvaService.get(endpoint);
    return response.data;
  },
);

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setPermission(state, {payload}) {
      state.permissionStatus = payload;
    },
    setCurrentCityDetails(state, {payload}) {
      state.currentCityDetails = payload;
    },
  },
  extraReducers: {
    [getCurrentCity.fulfilled]: state => {
      state.fetchCityLoading = true;
      state.fetchCityError = false;
    },
    [getCurrentCity.fulfilled]: (state, {payload}) => {
      state.fetchCityLoading = false;
      state.fetchCityError = false;
      state.currentCityDetails = {id: payload.cityId, value: payload.cityName};
    },
    [getCurrentCity.rejected]: state => {
      state.fetchCityLoading = false;
      state.fetchCityError = true;
      state.currentCityDetails = null;
    },
    [logoutThunk.fulfilled]: (state, {payload}) => {
      state.permissionStatus = payload;
    },
  },
});

export const {setPermission, setCurrentCityDetails} = locationSlice.actions;
export const locationInit = locationSlice.getInitialState();
export default locationSlice.reducer;
