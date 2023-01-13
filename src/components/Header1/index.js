import React from 'react';
import { View, Text } from 'react-native';
import HeaderLogo from '../../../assets/headerLogo';
import { INDIGO, INDIGO_LIGHT } from '../../styles/colors';
import Gradient from '../Gradient';
import { LOGIN_TEXT } from './constant';
import {styles} from './styles';

const Header = (props) => {
  const {isLoggedIn} = props;
  return (
    <Gradient 
      startColor={INDIGO}
      stopColor={INDIGO_LIGHT}
      isHorizontal={false}
      containerStyle={styles.headerContainer}
    >
      <HeaderLogo style={styles.logo}/>
      {!isLoggedIn && 
        <View>
          <Text style={styles.loginText}>{LOGIN_TEXT}</Text>
        </View>
      }
    </Gradient>
  );
};

export default Header;

