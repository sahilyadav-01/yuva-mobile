import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

const fetchProductData = (data) => {
  return data.map((item)=>{
    if(item.productList?.length > 0) {
      let productList;
      item?.productList?.forEach((i)=>{
        if(i?.subCategoryId === undefined) productList = [{productResponseDtoForUserList:item?.productList}]
        else productList = item?.productList
      })
      return {...item,productList};
    }
    return item;
  })
}

const fetchCategoryData = (data) => {
    if(data?.length > 0) {
      let productList;
      data?.forEach((i)=>{
        if(i?.subCategoryId === undefined) productList = [{productResponseDtoForUserList:data}]
        else productList = data
      })
      return productList;
    }
}

export const getTopCategories = createAsyncThunk(
  'product/topCategories',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/user/home-screen';
      const response = await YuvaService.get(endpoint);
      const data = fetchProductData(response.data)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

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
      const categoryData = fetchCategoryData(response?.data?.data.productList);
      const data = {...response?.data,data:{...response?.data.data,productList:categoryData}};
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getProductDetails = createAsyncThunk(
  'product/subProductDetails',
  async (productId, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = `/ecom/user/product-by-id/${productId}`;
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
  productDetails: {
    loading: false,
    data: null,
    error: false,
  },
  topCategories: {
    loading: false,
    data: [],
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
      state.subCategories.loading = false;
      state.subCategories.error = false;
      state.subCategories.subCategoryData = payload.data;
    },
    [getAllSubCategories.rejected]: state => {
      state.subCategories.loading = false;
      state.subCategories.error = true;
      state.subCategories.subCategoryData = [];
    },
    [getProductDetails.pending]: state => {
      state.productDetails.loading = true;
      state.productDetails.error = false;
      state.productDetails.subCategoryData = null;
    },
    [getProductDetails.fulfilled]: (state, {payload}) => {
      state.productDetails.loading = false;
      state.productDetails.error = false;
      state.productDetails.data = payload.data;
    },
    [getProductDetails.rejected]: state => {
      state.productDetails.loading = false;
      state.productDetails.error = true;
      state.productDetails.subCategoryData = null;
    },
    [getTopCategories.pending]: state => {
      state.topCategories.loading = true;
      state.topCategories.error = false;
      state.topCategories.data = [];
    },
    [getTopCategories.fulfilled]: (state, {payload}) => {
      state.topCategories.loading = false;
      state.topCategories.error = false;
      state.topCategories.data = payload;
    },
    [getTopCategories.rejected]: state => {
      state.topCategories.loading = false;
      state.topCategories.error = true;
      state.topCategories.data = [];
    },
  },
});

export const productInit = productSlice.getInitialState();
export default productSlice.reducer;
