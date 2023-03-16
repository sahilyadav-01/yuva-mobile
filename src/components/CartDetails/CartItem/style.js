import {StyleSheet} from 'react-native';
import {
  CYAN_BLUE,
  GUARDSMAN_RED,
  RED_SHADE,
  SPANISH_WHITE,
} from '../../../styles/colors';
import {CENTER, LINE_THROUGH, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    packageContainer: {
      paddingVertical: 11,
      paddingLeft: 16,
      paddingRight: 30,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      backgroundColor: SPANISH_WHITE,
    },
    packageName: {
      maxWidth: '40%',
      fontSize: 12,
      lineHeight: 18,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik500,
    },
    discountText: {
      fontSize: 12,
      lineHeight: 18,
      color: RED_SHADE,
      fontFamily: fonts.family.rubik400,
      marginRight:4,
      textDecorationLine:LINE_THROUGH
    },
    priceText: {
      fontSize: 12,
      lineHeight: 18,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik400,
    },
    detailsContainer: {
      paddingVertical: 14,
      paddingLeft: 16,
      paddingRight: 30,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    testText: {
      fontFamily: fonts.family.rubik400,
      lineHeight: 15,
      fontSize: 10,
      color: CYAN_BLUE,
    },
    buttonContainer: {flexDirection: ROW, alignItems: CENTER},
    removeText: {
      fontFamily: fonts.family.rubik400,
      lineHeight: 18,
      fontSize: 12,
      color: GUARDSMAN_RED,
      marginLeft: 8,
    },
    priceContainer: {flexDirection: ROW},
  });
};
