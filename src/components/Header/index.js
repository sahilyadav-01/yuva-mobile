import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import Search from '../Search';
import {useHeader} from './hooks/useHeader';
import {styles} from './styles';
import { BLACK, DARK_GRAY} from '../../styles/colors';
import {PNG, SVG} from '../../../assets';
import { CENTER, SPACE_BETWEEN } from '../../styles/constants';

const Heading = ({onToggleDrawer,isLoggedIn,name,canGoBack}) => {
  if(!canGoBack) {
    return (
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
    );
  }
  return null;
};

const SearchBox = ({showSearch,onSearchPress}) => {
  if(showSearch) {
    return (
        <>
          <View style={styles.searchStyle} />
          <TouchableOpacity onPress={onSearchPress}>
            <SVG.SearchIcon />
          </TouchableOpacity>
        </>
    );
  }
  return null;
};

const Login = ({showLogin,onRightPress}) => {
  if(showLogin) {
  return (
      <TouchableOpacity onPress={onRightPress} style={styles.loginContainer}>
        <Text style={styles.loginTextStyle}>Login</Text>
      </TouchableOpacity>
  );
}
return null;
};

const BackButton = ({canGoBack,showBackButton,onBackPress}) => {
  if((canGoBack || showBackButton))
  return (
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <SVG.BackButton />
      </TouchableOpacity>
  );
  return null;
};

const SearchInput = ({showSearchBox,searchPlaceholder,onChangeSearch,query,isScreen,isSearch,editable,onSubmitEditing}) => {
  if(showSearchBox) {
  return (
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
  );
}
return null;
};

const Header = props => {
  const {
    isLoggedIn,
    onRightPress,
    setSelected,
    query,
    onChangeSearch,
    showSearch,
    searchPlaceholder,
    canGoBack,
    onBackPress,
    title,
    isScreen,
    editable,
    onSubmitEditing,
    isSearch,
    hideTitle,
    onSearchPress,
    showSearchBox,
    name,
    onToggleDrawer,
    cityNamesDropdownData,
    defaultCity
  } = useHeader(props);

  if(props?.homeScreen) {
    return (
      <View style={styles.screenContainer}>
      <View style={styles.homeTopSection}>
        <Heading onToggleDrawer={onToggleDrawer} isLoggedIn={isLoggedIn} name={name} canGoBack={canGoBack}/>
        <SearchBox showSearch={showSearch} onSearchPress={onSearchPress}/>
        <Login showLogin={props?.showLogin ?? false} onRightPress={onRightPress}/>
      </View>
      {cityNamesDropdownData?.length > 0 && defaultCity?.value?.length > 0 ? <View style={{paddingHorizontal:16,marginBottom:8}}><SelectList
          setSelected={setSelected}
          search={false}
          data={cityNamesDropdownData.filter(item=>item.id !== -1)}
          placeholder={'Select your City'}
          placeholderTextColor={BLACK}
          boxStyles={{borderWidth:0.5,borderColor:'black',alignItems:'center',paddingVertical:8}}
          inputStyles={{color: BLACK}}
          dropdownTextStyles={{color: BLACK}}
          defaultOption={defaultCity}
        /></View>: null}
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
    <View style={[styles.topSection,{justifyContent:showSearch ? SPACE_BETWEEN : CENTER}]}>
      <View style={styles.backContainer}>
    <BackButton canGoBack={canGoBack} showBackButton={props?.showBackButton ?? false} onBackPress={onBackPress}/>
    </View>
    <View style={styles.mainContainer}>
      {!hideTitle ? <Text style={styles.titleTextStyle}>{title}</Text>: null}
      </View>
      <View style={styles.searchIconContainer}>
      <SearchBox showSearch={showSearch} onSearchPress={onSearchPress}/>
      </View>
      </View>
      <SearchInput showSearchBox={showSearchBox} searchPlaceholder={searchPlaceholder} onChangeSearch={onChangeSearch} query={query} isScreen={isScreen} isSearch={isSearch} editable={editable} onSubmitEditing={onSubmitEditing} />
      </View>
  );
};

export default Header;
