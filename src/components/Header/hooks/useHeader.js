import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityId } from "../../../store/reducers/DiagnosticsSlice";
export const useHeader = (props) => {
  const { showSearch, searchPlaceholder, title, showBackButton, onSearch } = props;
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState('');
  const [query, setQuery] = useState('');
  const [showCount, setShowCount] = useState(false);
  const { loggedIn } = useSelector(state => state.auth);
  const { cityId } = useSelector(state => state.diagnostic);
  const { cart } = useSelector(state => state.cart);
  const count = cart.itemDtoList?.length || 0;
  const isLoggedIn = loggedIn === 'loggedIn';
  const cityList = cityId.map(item => item.name);
  const onCartPress = () => {
    navigation.navigate('CartScreen');
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
  useEffect(() => {
    setShowCount(count>0);
  }, [count]);

  const onChangeSearch = (text) => {
    onSearch && onSearch(text);
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
    showCount,
  };
}