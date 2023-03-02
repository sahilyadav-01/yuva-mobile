import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { CHECKOUT, LOGIN_SIGNUP } from "../constants";
import {deleteCartThunk, getCartGuestThunk, getCartUserThunk} from '../../../store/reducers/CartSlice';
import { useEffect } from "react";

export const useCart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  const {isRemoved} = cart || {};
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const onPress = () => {
    if(isLoggedIn) {

    } else {
      navigation.navigate('LoginScreen');
    }
  }
  const buttonText = isLoggedIn? CHECKOUT: LOGIN_SIGNUP;
  const onRemove = (item) => {
    const {productId: itemId} = item || {}
    itemId && dispatch(deleteCartThunk({itemId}));
  };
  useEffect(() => {
    if(isLoggedIn){
      dispatch(getCartUserThunk());
    } else {
      dispatch(getCartGuestThunk());
    }
  }, [isRemoved])
  return {
    cart,
    onPress,
    buttonText,
    onRemove,
  };
};