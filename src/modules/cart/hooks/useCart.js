import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCartGuestThunk,
  createCartUserThunk,
} from '../../../store/reducers/CartSlice';
import { LOGIN_SIGNUP, SELECT_ADD_MEMBER } from '../constants';
import {
  deleteCartThunk,
  getCartGuestThunk,
  getCartUserThunk,
} from '../../../store/reducers/CartSlice';
import { useEffect } from 'react';
import { removeCoupon, showCouponMessage } from '../../../store/reducers/CouponSlice';

export const useCart = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  const { coupon } = useSelector(state => state);
  const { isRemoved } = cart || {};
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const { redeemCoupons, couponView } = useSelector(state => state.coupon);
  const onPress = () => {
    if (isLoggedIn) {

    } else {
      navigation.navigate('LoginScreen');
    }
  };

  const { showCoupon } = useSelector(state => state.cart);
  const addToCart = ({ name, cost, productId }, productType) => {
    const dToObj = { name, count: 1, cost, productId, productType };
    const dispatcher = isLoggedIn ? createCartUserThunk : createCartGuestThunk;
    const cartDto = {
      ...cart,
      itemDtoList: [...cart.itemDtoList, dToObj],
    };
    dispatch(dispatcher({ cartDto }));
  };
  const buttonText = isLoggedIn ? SELECT_ADD_MEMBER : LOGIN_SIGNUP;
  const onRemove = item => {
    const { productId: itemId } = item || {};
    itemId && dispatch(deleteCartThunk({ itemId }));
  };
  const crossAction = () => {

    dispatch(removeCoupon());
  }

  useEffect(() => {
    return () => {
      dispatch(showCouponMessage());
    }
  }, [focused]);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCartUserThunk());
    } else {
      dispatch(getCartGuestThunk());
    }
  }, [isRemoved]);
  return {
    cart,
    onPress,
    buttonText,
    addToCart,
    onRemove,
    redeemCoupons,
    couponView,
    crossAction,
    showCoupon,
    coupon,
  };
};
