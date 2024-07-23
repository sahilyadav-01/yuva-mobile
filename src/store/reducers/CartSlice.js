import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {YuvaService} from '../../../App';
import store from '../Store';
import {redeemCouponsSliceThunk} from './CouponSlice';

export const getCartUserThunk = createAsyncThunk(
  'cart/getCartUser',
  async (params = {}, {fulfillWithValue, rejectWithValue}) => {
    try {
      const endpoint = '/cart';
      const response = await YuvaService.get(endpoint);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createCartUserThunk = createAsyncThunk(
  'cart/createCartUser',
  async ({cartDto}, {fulfillWithValue, rejectWithValue}) => {
    const {itemDtoList} = cartDto;
    try {
      const endpoint = '/cart';
      const response = await YuvaService.post(endpoint, {itemDtoList});
      if (response?.data?.status) {
        store.dispatch(getCartUserThunk());
      }
    } catch (error) {
      Alert.alert('Alert', 'Unable to add item to cart');
    }
  },
);

export const deleteCartThunk = createAsyncThunk(
  'cart/deleteCart',
  async (params, {fulfillWithValue, rejectWithValue}) => {
    try {
      const priceQuery = `productTypeEnum=${params?.type}&itemId=${params?.itemId}`;
      const endpoint = `/cart?${priceQuery}`;
      const response = await YuvaService.delete(endpoint);
      return fulfillWithValue(response);
    } catch (error) {
      Alert.alert('Alert', 'Unable to remove item to cart');
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  cart: {
    itemDtoList: [],
    totalCost: 0,
    isRemoved: false,
    amountToBePaid: 0,
    totalDiscount: 0,
    couponViewCart: null,
    discountBeforeCoupon: 0,
    orderAmount: 0,
    processingCharge: 0,
    couponId: null,
  },
  loading: false,
  apiError: false,
  apiErrorMessage: '',
  existingIds: [],
  addToCartLoad: false,
  termsAndCondtionChecked: false,
  cartCouponDiscount: 0,
  addToCartItem: false,
  updateCartLoading: false,
  cartLoading: false,
  cartError: false,
  cartEmpty: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeCouponCart(state) {
      state.cart.couponViewCart = null;
    },
    setTermsAndCondtionChecked(state, {payload}) {
      state.termsAndCondtionChecked = payload;
    },
    clearExistingCartIds(state) {
      state.existingIds = [];
    },
    toggleItemAdded(state, {payload}) {
      state.addToCartItem = payload;
    },
    clearErrorMessage(state) {
      if (state.apiErrorMessage.length > 0) {
        state.apiErrorMessage = '';
      }
    },
  },
  extraReducers: {
    [getCartUserThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.cartLoading = true;
      state.cartError = false;
      state.apiErrorMessage = '';
      state.cart = {
        itemDtoList: [],
        totalCost: 0,
        isRemoved: false,
      };
    },
    [getCartUserThunk.fulfilled]: (state, {payload}) => {
      state.cartLoading = false;
      state.cartError = false;
      state.cart.itemDtoList =
        payload?.data?.data?.itemDtoList.map(item => {
          return {...item, ...payload?.data?.data?.cartPriceResponseDto};
        }) || [];
      state.cart.totalCost =
        payload?.data?.data?.cartPriceResponseDto?.totalCost || 0;
      state.cart.amountToBePaid =
        payload?.data?.data?.cartPriceResponseDto?.amountToBePaid || 0;
      state.cart.totalDiscount =
        payload?.data?.data?.cartPriceResponseDto?.totalDiscount || 0;
      state.cart.processingCharge =
        payload?.data?.data?.cartPriceResponseDto?.processingCharge || 0;
      if (
        typeof payload?.data?.data?.itemDtoList === 'object' &&
        payload?.data?.data?.itemDtoList.length >= 0
      ) {
        state.existingIds = payload?.data?.data?.itemDtoList.map(
          item => item.productId,
        );
      }
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.cart.couponViewCart =
        payload?.data?.data?.cartPriceResponseDto?.couponCode || null;
      state.cart.cartCouponDiscount =
        payload?.data?.data?.cartPriceResponseDto?.discountForCoupon;
      state.cart.orderAmount =
        payload?.data?.data?.cartPriceResponseDto?.costAfterDiscount;
      state.cart.discountBeforeCoupon =
        payload?.data?.data?.cartPriceResponseDto?.discountBeforeCoupon;
      state.cart.couponId =
        payload?.data?.data?.cartPriceResponseDto?.couponId ?? null;
    },
    [getCartUserThunk.rejected]: (state, {payload}) => {
      state.cartLoading = false;
      state.cartError = true;
      state.cartEmpty = payload?.response?.status === 404;
      state.apiError = true;
      state.loading = false;
      if (state.cart.couponViewCart === null) {
        state.cart = {
          itemDtoList: [],
          totalCost: 0,
          isRemoved: false,
        };
        state.existingIds = [];
        state.apiErrorMessage = payload?.response?.data?.errorMessage;
      }
    },
    [redeemCouponsSliceThunk.pending]: (state, {payload}) => {
      state.loading = true;
      state.couponView = null;
      state.totalCost = 0;
      state.amountToBePaidCoupon = 0;
      state.totalDiscount = 0;
      state.couponMessage = false;
      state.apiErrorMessage = '';
      state.apiError = false;
    },
    [redeemCouponsSliceThunk.fulfilled]: (state, action) => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.cartLoading = false;
      state.cartError = false;
      state.cart.itemDtoList =
        action.payload?.data?.itemDtoList.map(item => {
          return {...item, ...action.payload?.data?.cartPriceResponseDto};
        }) || [];
      state.cart.totalCost =
        action.payload?.data?.cartPriceResponseDto?.totalCost || 0;
      state.cart.amountToBePaid =
        action.payload?.data?.cartPriceResponseDto?.amountToBePaid || 0;
      state.cart.totalDiscount =
        action.payload?.data?.cartPriceResponseDto?.totalDiscount || 0;
      state.cart.processingCharge =
        action.payload?.data?.cartPriceResponseDto?.processingCharge || 0;
      if (
        typeof action.payload?.data?.itemDtoList === 'object' &&
        action.payload?.data?.itemDtoList.length >= 0
      ) {
        state.existingIds = action.payload?.data?.itemDtoList.map(
          item => item.productId,
        );
      }
      state.cart.couponViewCart =
        action.payload?.data?.cartPriceResponseDto?.couponCode || null;
      state.cart.cartCouponDiscount =
        action.payload?.data?.cartPriceResponseDto?.discountForCoupon;
      state.cart.orderAmount =
        action.payload?.data?.cartPriceResponseDto?.costAfterDiscount;
      state.cart.discountBeforeCoupon =
        action.payload?.data?.cartPriceResponseDto?.discountBeforeCoupon;
      state.cart.couponId =
        action.payload?.data?.cartPriceResponseDto?.couponId ?? null;
    },
    [redeemCouponsSliceThunk.rejected]: (state, {payload}) => {
      state.cartLoading = false;
      state.apiError = true;
      state.apiErrorMessage = payload?.errorMessage;
      state.loading = false;
    },
    [createCartUserThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.addToCartItem = false;
      state.updateCartLoading = true;
    },
    [createCartUserThunk.fulfilled]: (state, {payload}) => {
      state.apiError = false;
      state.apiErrorMessage = '';
      state.loading = false;
      state.addToCartItem = true;
      state.updateCartLoading = false;
    },
    [createCartUserThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.apiErrorMessage = payload.data.message;
      state.loading = false;
      state.addToCartItem = false;
      state.updateCartLoading = false;
    },
    [deleteCartThunk.pending]: state => {
      state.loading = true;
      state.apiError = false;
      state.apiErrorMessage = '';
      state.cart.isRemoved = false;
      state.addToCartLoad = true;
    },
    [deleteCartThunk.fulfilled]: (state, {payload}) => {
      if (payload?.data?.status) {
        state.apiError = false;
        state.apiErrorMessage = '';
        state.loading = false;
        state.cart.isRemoved = true;
        state.addToCartLoad = false;
      }
    },
    [deleteCartThunk.rejected]: (state, {payload}) => {
      state.apiError = true;
      state.apiErrorMessage = payload.data.message;
      state.loading = false;
      state.cart.isRemoved = false;
      state.addToCartLoad = false;
    },
  },
});
export const {
  setTermsAndCondtionChecked,
  clearExistingCartIds,
  toggleItemAdded,
  clearErrorMessage,
  removeCouponCart,
} = cartSlice.actions;
export const cartInit = cartSlice.getInitialState();
export default cartSlice.reducer;
