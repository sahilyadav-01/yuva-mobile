import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

const fetchProductData = data => {
  return data.map(item => {
    if (item.productList?.length > 0) {
      let productList;
      item?.productList?.forEach(i => {
        if (i?.subCategoryId === undefined)
          productList = [{productResponseDtoForUserList: item?.productList}];
        else productList = item?.productList;
      });
      return {...item, productList};
    }
    return item;
  });
};

const fetchCategoryData = data => {
  if (data?.length > 0) {
    let productList;
    data?.forEach(i => {
      if (i?.subCategoryId === undefined)
        productList = [{productResponseDtoForUserList: data}];
      else productList = data;
    });
    return productList;
  }
};

export const getTopCategories = createAsyncThunk(
  'product/topCategories',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/user/home-screen';
      const response = await YuvaService.get(endpoint);
      const data = fetchProductData(response.data);
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
      const data = {
        ...response?.data,
        data: {...response?.data.data, productList: categoryData},
      };
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

export const fetchProducts = createAsyncThunk(
  'product/productsList',
  async ({pageNo, pageSize, productFilter}, {_, rejectWithValue}) => {
    try {
      const endpoint = `/ecom/user/product/view-all?pageNo=${pageNo}&pageSize=${pageSize}`;
      const {data: response} = await YuvaService.post(endpoint, {
        productFilterDto: productFilter,
      });
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
  productList: {
    pageNo: 1,
    pageSize: 20,
    productFilter: null,
    loading: false,
    error: false,
    totalDocuments: 0,
    totalPages: 0,
    data: [],
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductFilter(state, {payload}) {
      state.productList = {...state.productList, ...payload};
    },
  },
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
    [fetchProducts.pending]: state => {
      state.productList.loading = true;
      state.productList.error = false;
    },
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.productList.loading = false;
      state.productList.error = false;
      state.productList.data = [
        ...state.productList.data,
        ...payload.productResponseDtoForUserGridViewList,
      ];
      state.productList.totalDocuments = payload.totalDocuments;
      state.productList.totalPages = payload.totalPages;
    },
  },
});

export const {setProductFilter} = productSlice.actions;
export const productInit = productSlice.getInitialState();
export default productSlice.reducer;
