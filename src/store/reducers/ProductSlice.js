import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {YuvaService} from '../../../App';

const fetchProductData = data => {
  return data.map(item => {
    if (item.productList?.length > 0) {
      let productList;
      item?.productList?.forEach(i => {
        if (i?.subCategoryId === undefined) {
          productList = [{productResponseDtoForUserList: item?.productList}];
        } else {
          productList = item?.productList;
        }
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
      if (i?.subCategoryId === undefined) {
        productList = [{productResponseDtoForUserList: data}];
      } else {
        productList = data;
      }
    });
    return productList;
  }
};

export const getTopProducts = createAsyncThunk(
  'product/topProducts',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/user/home-screen-products';
      const response = await YuvaService.get(endpoint);
      return response.data.data;
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
  async ({pageNo, pageSize, productFilter, paginate}, {_, rejectWithValue}) => {
    try {
      const endpoint = `/ecom/user/product/view-all?pageNo=${pageNo}&pageSize=${pageSize}`;
      const {data: response} = await YuvaService.post(endpoint, productFilter);
      return {...response.data, paginate};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchCategories = createAsyncThunk(
  'product/fetchCategories',
  async (params = {}, {_, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/category/dropdown';
      const response = await YuvaService.get(endpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchSubCategories = createAsyncThunk(
  'product/fetchSubCategories',
  async (categoryIdList, {_, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/sub-category/dropdown';
      const response = await YuvaService.post(endpoint, {categoryIdList});
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchBrands = createAsyncThunk(
  'product/fetchBrands',
  async (params = {}, {_, rejectWithValue}) => {
    try {
      const endpoint = '/ecom/brand/dropdown';
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
  topProducts: {
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
    paginate: false,
  },
  categoryDropdown: {
    loading: false,
    data: [],
    error: false,
  },
  subCategoryDropdown: {
    loading: false,
    data: [],
    error: false,
  },
  brandsDropdown: {
    loading: false,
    data: [],
    error: false,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductFilter(state, {payload}) {
      state.productList = {...state.productList, ...payload};
    },
    setFilterList(state, {payload}) {
      state.productList = {
        ...state.productList,
        productFilter: payload,
        data: [],
      };
    },
    resetProductList(state) {
      state.productList = {
        pageNo: 1,
        pageSize: 20,
        productFilter: null,
        loading: false,
        error: false,
        totalDocuments: 0,
        totalPages: 0,
        data: [],
      };
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
    [getTopProducts.pending]: state => {
      state.topProducts.loading = true;
      state.topProducts.error = false;
      state.topProducts.data = [];
    },
    [getTopProducts.fulfilled]: (state, {payload}) => {
      state.topProducts.loading = false;
      state.topProducts.error = false;
      state.topProducts.data = payload;
    },
    [getTopProducts.rejected]: state => {
      state.topProducts.loading = false;
      state.topProducts.error = true;
      state.topProducts.data = [];
    },
    [fetchProducts.pending]: state => {
      state.productList.loading = true;
      state.productList.error = false;
    },
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.productList.loading = false;
      state.productList.error = false;
      state.productList.paginate = payload.paginate;
      // if (!payload.paginate) {
      //   state.productList.data = payload.productResponseDtoForUserGridViewList;
      // } else {
      //   state.productList.data = [
      //     ...state.productList.data,
      //     ...payload.productResponseDtoForUserGridViewList,
      //   ];
      // }
      state.productList.data = payload.productResponseDtoForUserGridViewList;
      state.productList.totalDocuments = payload.totalDocuments;
      state.productList.totalPages = payload.totalPages;
    },
    [fetchCategories.pending]: state => {
      state.categoryDropdown.loading = true;
      state.categoryDropdown.data = [];
      state.categoryDropdown.error = false;
    },
    [fetchCategories.fulfilled]: (state, {payload}) => {
      state.categoryDropdown.loading = false;
      state.categoryDropdown.data = payload.data;
      state.categoryDropdown.error = false;
    },
    [fetchCategories.rejected]: state => {
      state.categoryDropdown.loading = false;
      state.categoryDropdown.data = [];
      state.categoryDropdown.error = true;
    },
    [fetchSubCategories.pending]: state => {
      state.subCategoryDropdown.loading = true;
      state.subCategoryDropdown.data = [];
      state.subCategoryDropdown.error = false;
    },
    [fetchSubCategories.fulfilled]: (state, {payload}) => {
      state.subCategoryDropdown.loading = false;
      state.subCategoryDropdown.data = payload.data;
      state.subCategoryDropdown.error = false;
    },
    [fetchSubCategories.rejected]: state => {
      state.subCategoryDropdown.loading = false;
      state.subCategoryDropdown.data = [];
      state.subCategoryDropdown.error = true;
    },
    [fetchBrands.pending]: state => {
      state.brandsDropdown.loading = true;
      state.brandsDropdown.data = [];
      state.brandsDropdown.error = false;
    },
    [fetchBrands.fulfilled]: (state, {payload}) => {
      state.brandsDropdown.loading = false;
      state.brandsDropdown.data = payload.data;
      state.brandsDropdown.error = false;
    },
    [fetchBrands.rejected]: state => {
      state.brandsDropdown.loading = false;
      state.brandsDropdown.data = [];
      state.brandsDropdown.error = true;
    },
  },
});

export const {setProductFilter, setFilterList, resetProductList} =
  productSlice.actions;
export const productInit = productSlice.getInitialState();
export default productSlice.reducer;
