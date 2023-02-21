import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityId } from "../../../store/reducers/DiagnosticsSlice";
export const useHeader = (props) => {
  const { showSearch, searchPlaceholder, title, showBackButton } = props;
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState('');
  const [query, setQuery] = useState('');
  const { loggedIn } = useSelector(state => state.auth);
  const { cityId } = useSelector(state => state.diagnostic);
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

  const canGoBack = showBackButton && navigation?.canGoBack();
  const onBackPress = () => {
    navigation.goBack();
  }
  const setSelected = (city) => {
    setSelectedCity(city);
  }
  useEffect(() => {
    if (selectedCity) {
      dispatch(setCityId(selectedCity))
    }
  }, [selectedCity])


  const onChangeSearch = (text) => {
    setQuery(text);
  }
  return {
    isLoggedIn,
    onCartPress,
    onRightPress,
    cityList,
    setSelected,
    selectedCity,
    query,
    onChangeSearch,
    showSearch,
    searchPlaceholder,
    canGoBack,
    onBackPress,
    title,
  };
}