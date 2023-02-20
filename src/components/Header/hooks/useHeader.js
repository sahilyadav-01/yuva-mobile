import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useHeader = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedCity, setSelectedCity] = useState('');
  const {loggedIn} = useSelector(state => state.auth);
  const {cityId} = useSelector(state => state.diagnostic);
  const isLoggedIn = loggedIn === 'loggedIn';
  const cityList = cityId.map(item => item.name);
  const onCartPress = () => {
    //Pending Screen
    // navigation.navigate('Cart');
  };
  const onRightPress = () => {
    isLoggedIn ? onToggleDrawer() : navigation.navigate('LoginScreen');
  };

  const onToggleDrawer = () => {
    //toggle drawer
  }

  // const canGoBack = navigation?.canGoBack();
  // const {isRightIcon, isSeachVisible, title} = props;
  const onBackPress = () => {
    navigation.goBack();
  }
  const setSelected = (city) => {
    setSelectedCity(city);
  }

  return {
    isLoggedIn,
    onCartPress,
    onRightPress,
    onBackPress,
    cityList,
    setSelected,
    selectedCity,
    // isSeachVisible,
    // canGoBack,
    // title,
  };
}