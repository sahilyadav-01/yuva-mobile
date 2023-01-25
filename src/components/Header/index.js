import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SVG} from '../../../assets';
import { INDIGO, INDIGO_LIGHT } from '../../styles/colors';
import Gradient from '../Gradient';
import { LOGIN_TEXT } from './constant';
import {styles} from './styles';

const Header = (props) => {
  const {isLoggedIn, onPressRightIcon} = props;
  return (
    <Gradient 
      startColor={INDIGO}
      stopColor={INDIGO_LIGHT}
      isHorizontal={false}
      containerStyle={styles.headerContainer}
    >
      <SVG.HeaderLogo style={styles.logo}/>
      <View style={styles.body}>

      </View>
      { isLoggedIn !== undefined && 
        <TouchableOpacity onPress={onPressRightIcon} style={styles.rightIcon}>
          {!isLoggedIn ?
            <View>
              <Text style={styles.loginText}>{LOGIN_TEXT}</Text>
            </View>
            : <SVG.MenuIcon />
          }
        </TouchableOpacity>
      }
    </Gradient>
  );
};

export default Header;

