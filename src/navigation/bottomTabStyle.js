import {StyleSheet} from 'react-native';
import {ABSOLUTE, CENTER} from '../styles/constants';
import {BLACK, RED, WHITE} from '../styles/colors';
import {fonts} from '../styles/fonts';
import {getPlatform} from '../utils/utils';

export const styles = () => {
  const Platform = getPlatform();
  return StyleSheet.create({
    badgeContainer: {
      position: ABSOLUTE,
      alignItems: CENTER,
      justifyContent: CENTER,
      top: 0,
      right: 0,
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: RED,
      elevation: 10,
      zIndex: 10,
      paddingHorizontal: 1,
    },
    badgeText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: WHITE,
    },
    tabBarStyle: {
      height: 72,
      paddingBottom: Platform.isIOS ? 8 : undefined,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowColor: BLACK,
      elevation: 10,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      shadowRadius: 12,
    },
    tabBarLabelStyle: {
      marginVertical: 4,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      fontWeight: fonts.weight.fontWeight500,
    },
    tabBarItemStyle: {
      marginHorizontal: 4,
      paddingVertical: 4,
      justifyContent: CENTER,
      alignItems: CENTER,
    },
  });
};
