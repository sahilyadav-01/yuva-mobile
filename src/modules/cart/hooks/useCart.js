import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CHECKOUT, LOGIN_SIGNUP } from "../constants";

export const useCart = () => {
  const navigation = useNavigation();
  const {cart} = useSelector(state => state.cart);
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const onPress = () => {
    if(isLoggedIn) {

    } else {
      navigation.navigate('LoginScreen');
    }
  }
  const buttonText = isLoggedIn? CHECKOUT: LOGIN_SIGNUP;
  return {
    cart,
    onPress,
    buttonText,
  };
};