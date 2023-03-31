import {StyleSheet} from 'react-native';
import {CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    itemContainer: {
      borderRadius: 6,
      paddingTop: 21,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.05)',
      width: '100%',
    },
    serviceText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      marginBottom: 5,
      color: CYAN_BLUE,
      marginLeft: 16,
    },
    usageText: {
      marginLeft: 16,
      marginBottom: 16,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
    },
    buttonContainer: {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      alignItems: CENTER,
      backgroundColor: CYAN_BLUE,
      paddingVertical: 12,
    },
    rowContainer: {flexDirection: ROW},
    iconContainer: {marginLeft: 16},
    buttonText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
      color: WHITE,
    },
  });
};
