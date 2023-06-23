import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../network/yuvaService';

export const patientPrescriptionThunk = createAsyncThunk(
    'pharmacy/prescriptions',
    async ({ pageNo, pageSize, search }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const endpoint = `/prescription/view-all?pageNo=${pageNo}&pageSize=${pageSize}`;
            const response = await YuvaService.post(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const getAllPharmacyForUserThunk = createAsyncThunk(
    'pharmacy/view-all',
    async ({ pageNo, pageSize, prescriptionId }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const endpoint = `/pharmacy/user/view-all?pageNo=${pageNo}&pageSize=${pageSize}&prescriptionId=${prescriptionId}`;
            const response = await YuvaService.get(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const getOtpThunk = createAsyncThunk(
    'pharmacy/getOtp',
    async ({ prescriptionId }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const endpoint = `/prescription/get-otp/${prescriptionId}`;
            const response = await YuvaService.get(endpoint);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {
    loading: false,
    prescriptionData: [],
    pharmacyDataList: [],
    otpData: ' ',
    apiError: false,
    apiErrorMessage: '',
};

const pharmacySlice = createSlice({
    name: 'pharmacy',
    initialState,
    extraReducers: {
        [patientPrescriptionThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.apiError = false;
        },
        [patientPrescriptionThunk.fulfilled]: (state, { payload }) => {
            state.prescriptionData = payload?.data?.prescriptionResponseDto;
            state.loading = false;
            state.apiError = false;
        },
        [patientPrescriptionThunk.rejected]: (state, { payload }) => {
            state.loading = false;
            state.apiError = true;
        },

        /** view-all Pharmacy For User*/

        [getAllPharmacyForUserThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.apiError = false;
        },
        [getAllPharmacyForUserThunk.fulfilled]: (state, { payload }) => {
            state.pharmacyDataList = payload?.data?.pharmacyResponseDtoList;
            state.loading = false;
            state.apiError = false;
        },
        [getAllPharmacyForUserThunk.rejected]: (state, { payload }) => {
            state.loading = false;
            state.apiError = true;
        },

        /* get otp for pharmacy*/

        [getOtpThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.apiError = false;
        },
        [getOtpThunk.fulfilled]: (state, { payload }) => {
            state.otpData = payload?.message;
            state.loading = false;
            state.apiError = false;
        },
        [getOtpThunk.rejected]: (state, { payload }) => {
            state.loading = false;
            state.apiError = true;
        },

    },
});
export const pharmacyInit = pharmacySlice.getInitialState();
export const { } = pharmacySlice.actions;
export default pharmacySlice.reducer;