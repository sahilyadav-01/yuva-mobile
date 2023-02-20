import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SVG } from '../../../assets';
import { LOGIN_TEXT } from './constant';
import { useHeader } from './hooks/useHeader';
import { CYAN_BLUE } from '../../styles/colors';
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
  } = useHeader(props);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topSection}>
        <View style={styles.pinView}>
          <SVG.LocationOn fill={CYAN_BLUE}/>
          <SelectList 
            data={cityList}
            defaultOption={cityList[0]}
            search={false}
            setSelected={setSelected}
            boxStyles={styles.boxStyle}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyles}
            dropdownTextStyles={styles.inputStyles}
          />
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity style={styles.rightIcon} onPress={onCartPress}>
            <SVG.ShoppingCart />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIcon} onPress={onRightPress}>
            {isLoggedIn ?
              <SVG.MenuIcon />
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
          <TouchableOpacity onPress={onBackPress}>
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
      <View>
        {showSearch && 
          <Search 
            placeholder={searchPlaceholder} 
            onChangeText={onChangeSearch} 
            value={query}
          />
        }
      </View>
    </View>
  );
 
  // return (
  //     <View style={styles.sectionBottom}>
  //       { canGoBack && 
  //         <TouchableOpacity onPress={onBackPress}>
  //           <SVG.Back />
  //         </TouchableOpacity>
  //       } 
  //       {
  //         title && 
  //         <Text style={styles.titleText}>
  //           {title}
  //         </Text>
  //       }     
  //     </View>
  // );
};

export default Header;

