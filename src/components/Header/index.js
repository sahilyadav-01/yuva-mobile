import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SVG} from '../../../assets';
import { INDIGO, INDIGO_LIGHT } from '../../styles/colors';
import Gradient from '../Gradient';
import { LOGIN_TEXT } from './constant';
import { useHeader } from './hooks/useHeader';
import {styles} from './styles';

const Header = (props) => {
  const {isLoggedIn, onPressRightIcon, isRightIcon, isSeachVisible, isIntroScreen} = useHeader(props);
  const renderRightIcon = () => {
    if(isRightIcon) {
      return (
        <SVG.MenuIcon />
      )
    }
    return null;
  }
  return (
    <Gradient 
      startColor={INDIGO}
      stopColor={INDIGO_LIGHT}
      isHorizontal={false}
      containerStyle={styles.headerContainer}
    >
      <View style={styles.sectionTop}>
        <View style={styles.body}>
        </View>
        {
          !isIntroScreen &&
          <TouchableOpacity onPress={onPressRightIcon} style={styles.rightIcon}>
            {!isLoggedIn ?
              <View>
                <Text style={styles.loginText}>{LOGIN_TEXT}</Text>
              </View>
              : renderRightIcon()
            }
          </TouchableOpacity>
        }
      </View>
    </Gradient>
  );
};

export default Header;

