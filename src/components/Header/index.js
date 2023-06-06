import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SVG } from '../../../assets';
import { LOGIN_TEXT } from './constant';
import { useHeader } from './hooks/useHeader';
import { CYAN_BLUE, DARK_GRAY } from '../../styles/colors';
import SelectList from 'react-native-dropdown-select-list';
import Search from '../Search';

const Header = (props) => {
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
    showCart,
  } = useHeader(props);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topSection}>
      <View style={styles.pinView}>
           <SVG.LocationOn fill={CYAN_BLUE}/>
           <SelectList 
             data={cityList}
             placeholder={placeholder}
             placeholderTextColor={DARK_GRAY}
             search={false}
             setSelected={setSelected}
             boxStyles={styles.boxStyle}
             inputStyles={styles.inputStyles}
             dropdownStyles={styles.dropdownStyles}
             dropdownTextStyles={styles.inputStyles}
           />
         </View>
        <View style={styles.rightView}>
        {(showCart || showCart===undefined) && <TouchableOpacity style={styles.rightIcon} onPress={onCartPress}>
            {showCount &&
              <View style={styles.badgeView}>
                <Text style={styles.badgeText}>{count}</Text>
              </View>
            }
            <SVG.ShoppingCart />
          </TouchableOpacity>}
          <TouchableOpacity style={styles.rightIcon} onPress={onRightPress}>
            {isLoggedIn && !hideMenu ?
              <SVG.MenuIcon /> : isLoggedIn && hideMenu ? null
              :
              <Text style={styles.loginText}>
                {LOGIN_TEXT}
              </Text>
            }
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionBottom}>
      { canGoBack && 
          <TouchableOpacity style={styles.backIcon} onPress={onBackPress}>
            <SVG.Back />
          </TouchableOpacity>
        } 
        {
          title && 
          <Text style={styles.titleText}>
            {title}
          </Text>
        }     
      </View>
      <View style={styles.search}>
         {showSearch && 
          <Search 
            placeholder={searchPlaceholder} 
            placeholderTextColor={DARK_GRAY}
            onChangeText={onChangeSearch} 
            value={query}
          />
        }
      </View>
    </View>
  );
};

export default Header;

