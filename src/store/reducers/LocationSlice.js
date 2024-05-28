import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YuvaService } from '../../../App';


const initialState = {
    permissionStatus: false,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setPermission(state, { payload }) {
            state.permissionStatus = payload;
        }
    },
});

export const { setPermission } = locationSlice.actions;
export const locationInit = locationSlice.getInitialState();
export default locationSlice.reducer;
