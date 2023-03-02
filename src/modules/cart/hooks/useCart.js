import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { createCartGuestThunk, createCartUserThunk } from "../../../store/reducers/CartSlice";
import { CHECKOUT, LOGIN_SIGNUP } from "../constants";

export const useCart = () => {
  const navigation = useNavigation();
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const onPress = () => {
    if(isLoggedIn) {

    } else {
      navigation.navigate('LoginScreen');
    }
  }

  const addToCart = ({name,cost,productId},productType) => {
    const dToObj = {name,count:1,cost,productId,productType}
    const dispatcher = isLoggedIn ? createCartUserThunk : createCartGuestThunk
    if (typeof cart === 'object' && Object.keys(cart).length === 0) {
      const cartDto = { itemDtoList: [dToObj],totalCost: 0 }
      dispatch(dispatcher({cartDto}))
    } else if(cart?.itemDtoList) {
      const cartDto = {
        ...cart,
        itemDtoList: [...cart.itemDtoList,dToObj],
      }
      dispatch(dispatcher({cartDto}))
    }
  }
  const buttonText = isLoggedIn? CHECKOUT: LOGIN_SIGNUP;
  return {
    cart,
    onPress,
    buttonText,
    addToCart
  };
};