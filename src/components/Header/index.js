import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import Search from '../Search';
import {useHeader} from './hooks/useHeader';
import {styles} from './styles';
import { BLACK, DARK_GRAY} from '../../styles/colors';
import {PNG, SVG} from '../../../assets';

const Header = props => {
  const {
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
    hideMenu,
    placeholder,
    isScreen,
    showCart,
    editable,
    onSubmitEditing,
    isSearch,
    showLocation,
    PrefixIcon,
    hideTitle,
    initial,
    onSearchPress,
    showSearchBox,
    name,
    onToggleDrawer,
    cityNamesDropdownData
  } = useHeader(props);

  console.log('Data',cityNamesDropdownData)

  const Heading = () => {
    return (
      !canGoBack && (
            <View style={styles.mainContainerStyle}>
              <TouchableOpacity onPress={onToggleDrawer}>
                <Image source={PNG.HomeProfile} style={styles.imageStyle} />
              </TouchableOpacity>
              <View style={styles.nameContainerStyle}>
                <Text style={styles.nameTextStyle}>Hi, {isLoggedIn ? name : 'Guest'}</Text>
                <Text style={styles.nameTextStyle}>
                  May you always be healthy
                </Text>
              </View>
            </View>
      )
    );
  };

  const SearchBox = () => {
    return (
      showSearch && (
        <>
          <View style={styles.searchStyle} />
          <TouchableOpacity onPress={onSearchPress}>
            <SVG.SearchIcon />
          </TouchableOpacity>
        </>
      )
    );
  };

  const Login = ({showLogin}) => {
    return (
      showLogin && (
        <TouchableOpacity onPress={onRightPress} style={styles.loginContainer}>
          <Text style={styles.loginTextStyle}>Login</Text>
        </TouchableOpacity>
      )
    );
  };

  const BackButton = () => {
    return (
      (canGoBack || props?.showBackButton) && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <SVG.BackButton />
        </TouchableOpacity>
      )
    );
  };

  const SearchInput = () => {
    return (
      showSearchBox && (
        <Search
          placeholder={searchPlaceholder}
          placeholderTextColor={DARK_GRAY}
          onChangeText={onChangeSearch}
          value={query}
          isScreen={isScreen}
          isSearch={isSearch}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
        />
      )
    );
  };

  if(props?.homeScreen) {
    return (
      <View style={{zIndex:10,elevation:10,shadowOffset:{width:1,height:1},shadowOpacity:0.3,backgroundColor:'white'}}>
      <View style={styles.homeTopSection}>
        <Heading/>
        <SearchBox/>
        <Login showLogin={props?.showLogin ?? false}/>
      </View>
      {cityNamesDropdownData?.length > 0 && <View style={{paddingHorizontal:16,marginBottom:8}}><SelectList
          setSelected={()=>{}}
          search={false}
          data={cityNamesDropdownData}
          placeholder={'Select your City'}
          placeholderTextColor={BLACK}
          boxStyles={{borderWidth:0.5,borderColor:'black',alignItems:'center',paddingVertical:8}}
          inputStyles={{color: BLACK}}
          dropdownTextStyles={{color: BLACK}}
          defaultOption={cityNamesDropdownData[0]}
        /></View>}
      </View>
    );
  }

  return (
    <View>
    <View style={[styles.topSection,{justifyContent:showSearch ? 'space-between' : 'center'}]}>
      <View style={styles.backContainer}>
    <BackButton/>
    </View>
    <View style={styles.mainContainer}>
      {!hideTitle && <Text style={styles.titleTextStyle}>{title}</Text>}
      </View>
      <View style={styles.searchIconContainer}>
      <SearchBox/>
      </View>
      </View>
      <SearchInput/>
      </View>
  );
};

export default Header;
