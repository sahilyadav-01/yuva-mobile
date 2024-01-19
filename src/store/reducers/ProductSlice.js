import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

export const getAllCategories = createAsyncThunk(
  'product/categories',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/user/category/view-all';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getAllSubCategories = createAsyncThunk(
  'product/subCategories',
  async (categoryId, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/ecom/user/product/${categoryId}`;
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  categories: {
    loading: false,
    data: [],
    error: false,
  },
  subCategories: {
    loading: false,
    subCategoryData: [],
    error: false,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategories.pending]: state => {
      state.categories.loading = true;
      state.categories.error = false;
      state.categories.data = [];
    },
    [getAllCategories.fulfilled]: (state, {payload}) => {
      state.categories.loading = false;
      state.categories.error = false;
      state.categories.data = payload.data;
    },
    [getAllCategories.rejected]: state => {
      state.categories.loading = false;
      state.categories.error = true;
      state.categories.data = [];
    },
    [getAllSubCategories.pending]: state => {
      state.subCategories.loading = true;
      state.subCategories.error = false;
      state.subCategories.subCategoryData = [];
    },
    [getAllSubCategories.fulfilled]: (state, {payload}) => {
      console.log('Payload',JSON.stringify(payload));
      state.subCategories.loading = false;
      state.subCategories.error = false;
      state.subCategories.subCategoryData = payload.data;
    },
    [getAllSubCategories.rejected]: state => {
      state.subCategories.loading = false;
      state.subCategories.error = true;
      state.subCategories.subCategoryData = [];
    },
  },
});

export const productInit = productSlice.getInitialState();
export default productSlice.reducer;
