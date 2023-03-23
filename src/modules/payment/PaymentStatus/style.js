import {StyleSheet} from 'react-native';
import {PINK_RED, CYAN_BLUE, ORANGE} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = paymentSuccess => {
  return StyleSheet.create({
    paymentStatus: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize20,
      lineHeight: 30,
      alignSelf: CENTER,
      textAlign: CENTER,
      color: paymentSuccess ? ORANGE : PINK_RED,
    },
    paymentText: {
      marginHorizontal: 40,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 28,
      color: CYAN_BLUE,
      alignSelf: CENTER,
      textAlign: CENTER,
    },
    timer: {
      marginTop: 20,
      alignItems: CENTER,
    },
    separator: {height: 24},
    imageContainer: {
      paddingVertical: 52,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    screenContainer: {paddingTop: 24},
    container: {flex: 1},
  });
};
