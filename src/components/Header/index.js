import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';
import {SVG} from '../../../assets';
import {LOGIN_TEXT} from './constant';
import {useHeader} from './hooks/useHeader';
import {CYAN_BLUE, DARK_GRAY} from '../../styles/colors';
import SelectList from 'react-native-dropdown-select-list';
import Search from '../Search';

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
    hideLocation,
    PrefixIcon,
    hideTitle
  } = useHeader(props);

  return (
    <View style={styles.topSection}>
      {canGoBack && (
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={onBackPress}>
          <SVG.Back />
        </TouchableOpacity>
        {!hideTitle && <Text style={{marginLeft: 16}}>{title}</Text>}
        </View>
      )}
      {!canGoBack && (
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity onPress={onRightPress}>
          {isLoggedIn && !hideMenu ? (
            PrefixIcon ? PrefixIcon() :
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>SK</Text>
            </View>
          ) : isLoggedIn && hideMenu ? null : (
            <Text style={styles.loginText}>{LOGIN_TEXT}</Text>
          )}
          </TouchableOpacity>
          {!hideTitle && <Text style={{marginLeft: 16}}>{title}</Text>}
        </View>
      )}
      <View style={styles.pinView}>
        {!hideLocation && <>
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
            <TouchableOpacity onPress={()=>{}}>
              <SVG.SearchIcon />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Header;
