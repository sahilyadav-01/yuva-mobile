import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {PNG, SVG} from '../../../assets';
import {LOGIN_TEXT} from './constant';
import {useHeader} from './hooks/useHeader';
import { BLACK, CYAN_BLUE, DARK_GRAY, FLASH_WHITE, INDIGO_LIGHT, MARINER, VERY_LIGHT_ORANGE, WHITE} from '../../styles/colors';
import SelectList from 'react-native-dropdown-select-list';
import Search from '../Search';
import { fonts } from '../../styles/fonts';

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
    onToggleDrawer
  } = useHeader(props);

  console.log('Props',props,canGoBack)
  return (
    <View style={{backgroundColor:'white'}}>
    <View style={[styles.topSection,{width:showSearch ? '100%' : '60%',paddingLeft: props?.homeScreen ? 0 : props?.showLogin  ? 0 : 16}]}>
      {canGoBack && (
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'white',paddingHorizontal:16,paddingVertical:12,borderRadius:8,elevation:1,zIndex:1,shadowColor:'#000'}} onPress={onBackPress}>
         <SVG.BackButton/>
        </TouchableOpacity>
        </View>
      )}
      {!hideTitle && <Text style={{color: BLACK, fontFamily:fonts.family.montserrant800,fontSize:fonts.size.fontSize16}}>{title}</Text>}
      {!canGoBack && (
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity onPress={onRightPress}>
          {isLoggedIn && !hideMenu ? (
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={onToggleDrawer}><Image source={PNG.HomeProfile} style={{width:50,height:50}}/></TouchableOpacity>
              <View style={{marginLeft:8}}>
                <Text style={{fontFamily:fonts.family.montserrat400,fontSize:fonts.size.fontSize14,color:BLACK,marginBottom:4}}>Hi, {name}</Text>
                <Text style={{fontFamily:fonts.family.montserrat300,fontSize:fonts.size.fontSize10,color:BLACK,marginBottom:4}}>May you always be healthy</Text>
              </View>
            </View>
          ) : isLoggedIn && hideMenu ? null : (
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={onToggleDrawer}><Image source={PNG.HomeProfile} style={{width:50,height:50}}/></TouchableOpacity>
              <View style={{marginLeft:8,alignSelf:'center'}}>
                <Text style={{fontFamily:fonts.family.montserrat400,fontSize:fonts.size.fontSize14,color:BLACK}}>Hi, {name}</Text>
                <Text style={{fontFamily:fonts.family.montserrat300,fontSize:fonts.size.fontSize10,color:BLACK}}>May you always be healthy</Text>
              </View>
            </View>
          )}
          </TouchableOpacity>
          {!hideTitle && <Text style={{marginLeft: 16}}>{title}</Text>}
        </View>
      )}

      
      {/* <View style={styles.pinView}>
        {showLocation && <>
        <SVG.LocationOn fill={CYAN_BLUE} />
        <SelectList
          data={cityList}
          placeholder={placeholder}
          search={false}
          setSelected={setSelected}
          boxStyles={styles.boxStyle}
          inputStyles={styles.inputStyles}
          dropdownStyles={styles.dropdownStyles}
          dropdownTextStyles={styles.inputStyles}
        />
        </>}
        {showSearch && (
          <>
            <View style={styles.searchStyle} />
            <TouchableOpacity onPress={onSearchPress}>
              <SVG.SearchIcon />
            </TouchableOpacity>
          </>
        )}
      </View> */}
      {showSearch && (
          <>
            <View style={styles.searchStyle} />
            <TouchableOpacity onPress={onSearchPress}>
              <SVG.SearchIcon />
            </TouchableOpacity>
          </>
        )}

      {props?.showLogin && <TouchableOpacity onPress={onRightPress} style={{alignItems:'center',justifyContent:'center',paddingVertical:8,backgroundColor:MARINER,borderRadius:6}}>
        <Text style={{fontFamily:fonts.family.montserrat600,fontSize:fonts.size.fontSize10,color:WHITE,paddingHorizontal:24}}>Login</Text>
      </TouchableOpacity>}
        </View>


    {showSearchBox && <Search 
      placeholder={searchPlaceholder} 
      placeholderTextColor={DARK_GRAY}
      onChangeText={onChangeSearch} 
      value={query}
      isScreen={isScreen}
      isSearch={isSearch}
      editable={editable}
      onSubmitEditing={onSubmitEditing}
    />}
      <View style={{height:8}}/>
      </View>
  );
};

export default Header;
