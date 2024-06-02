import { DrawerActions, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityId } from "../../../store/reducers/DiagnosticsSlice";
import { PLACEHOLDER_TEXT } from "../constant";
import { setHomeSearch } from "../../../store/reducers/HomeSearchSlice";
export const useHeader = (props) => {
  const { showSearch, searchPlaceholder, title, showBackButton, onSearch, hideMenu,isScreen ,showCart,editable,onSubmitEditing,isSearch, showLocation, PrefixIcon, hideTitle, initial,homeSearch} = props;
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState('');
  const [query, setQuery] = useState('');
  const [showCount, setShowCount] = useState(false);
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER_TEXT);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const { loggedIn,user:{name} } = useSelector(state => state.auth);
  const diagnosticState = useSelector(state => state.diagnostic);
  const { cityId } = diagnosticState;
  const { cart } = useSelector(state => state.cart);
  const {userDetails} =  useSelector(state  =>  state.profile)
  const {cityNamesDropdownData,cityLoading,cityError} = useSelector(state => state.SearchNetwork);
  const count = cart?.itemDtoList?.length || 0;
  const isLoggedIn = loggedIn === 'loggedIn';
  const cityList = cityId.map(item => item.name);
  const onCartPress = () => {
    navigation.navigate('CartScreen');
  };
  const onRightPress = () => {
    navigation.navigate('Home',{screen:'LoginScreen'});
  };

  const onToggleDrawer = () => {
    if(isLoggedIn)
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  const canGoBack = (showBackButton && navigation?.canGoBack()) || homeSearch;
  const onBackPress = () => {
    if(typeof props?.onBackPress === 'function') props?.onBackPress()
    else navigation.goBack();
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

  useEffect(() => {
   if(diagnosticState.selectedCityId===''){
    setPlaceholder(userDetails?.cityName)
   }
   else{
    setPlaceholder(diagnosticState.selectedCityId)
   }
  }, [diagnosticState])

  const onChangeSearch = (text) => {
    onSearch && onSearch(text);
    setQuery(text);
  }
  const onSearchPress = () => {
    if(route?.name === 'HomeService') {
      dispatch(setHomeSearch(true));
    }
    else setShowSearchBox(!showSearchBox);
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
    count,
    hideMenu: hideMenu ?? false,
    placeholder,
    isScreen,
    showCart,
    editable,
    onSubmitEditing,
    isSearch,
    showLocation: showLocation ?? false,
    PrefixIcon: PrefixIcon ?? null,
    hideTitle: hideTitle ?? false,
    initial,
    onSearchPress,
    showSearchBox,
    name,
    onToggleDrawer,
    cityNamesDropdownData
  };
}