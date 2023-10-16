import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const getAllClinicNetworkThunk = createAsyncThunk(
    'network/viewAll',
    async ({ documentType, cityNames, planType, pageNumber, pageSize, searchQuery }, { fulfillwithValue, rejectWithValue }) => {
        try {
            const endpoint = `/network/viewAll?network=${documentType}&pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=ID&sortOrder=ASC`;
            const networkFilterDto = {
                "cityList": cityNames ? [cityNames] : [],
                "networkStatusList": [],
                "planUuidList": planType ? [planType] : [],
                "search": searchQuery
              };
            const response = await YuvaService.post(endpoint, networkFilterDto);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const getAllNetworkTypeThunk = createAsyncThunk(
    'network/type',
    async (params = {}, { fulfillwithValue, rejectWithValue }) => {
        try {
            const endpoint = `/network/type`;
            const response = await YuvaService.get(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
)

export const getPlansDropdownThunk = createAsyncThunk(
    'network/Plans',
    async (params = {}, { fulfillwithValue, rejectWithValue }) => {
        try {
            const endpoint = `/plan/dropdown`;
            const response = await YuvaService.get(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
)

export const getAllCityNamesThunk = createAsyncThunk(
    'network/CityNames',
    async (params = {}, { fulfillwithValue, rejectWithValue }) => {
        try {
            const endpoint = `/city/getAllCityNames`;
            const response = await YuvaService.get(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
)

const initialState = {
    loading: false,
    apiError: false,
    apiErrorMessage: '',
    searchNetworkdata: {},
    networkTypeDropDownData: [],
    plansDropdownData: [],
    cityNamesDropdownData: []
};

const SearchNetworkSlice = createSlice({
    name: 'SearchNetwork',
    initialState,
    reducers: {
    },
    extraReducers: {
        /**getAllProvider Data */

        [getAllClinicNetworkThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllClinicNetworkThunk.fulfilled]: (state, action) => {
            state.searchNetworkdata = action.payload?.data || {};
        },
        [getAllClinicNetworkThunk.rejected]: (state, action) => {
            state.apiError = true;
            state.loading = false;
        },

        /**getAllNetworkType dropDownData */

        [getAllNetworkTypeThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllNetworkTypeThunk.fulfilled]: (state, action) => {
            state.networkTypeDropDownData = action.payload?.data || [];
        },
        [getAllNetworkTypeThunk.rejected]: (state, action) => {
            state.apiError = true;
            state.loading = false;
        },

         /**PlansDropdownData */

        [getPlansDropdownThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [getPlansDropdownThunk.fulfilled]: (state, action) => {
            state.plansDropdownData = action.payload?.data || [];
        },
        [getPlansDropdownThunk.rejected]: (state, action) => {
            state.apiError = true;
            state.loading = false;
        },

          /**cityNamesDropdownData */

        [getAllCityNamesThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllCityNamesThunk.fulfilled]: (state, action) => {
            state.cityNamesDropdownData = action.payload?.data || [];
        },
        [getAllCityNamesThunk.rejected]: (state, action) => {
            state.apiError = true;
            state.loading = false;
        },
    },
});
export const SearchNetworkInit = SearchNetworkSlice.getInitialState();
export default SearchNetworkSlice.reducer;