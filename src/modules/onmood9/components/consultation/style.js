import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CYAN_BLUE, MARINER, WHITE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    headingText: {
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    },
    buttonContainer: {
      marginHorizontal: 8,
      paddingVertical: 12,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: MARINER,
      borderRadius: 8,
      marginTop: 16,
      marginBottom: 28,
    },
    buttonText: {
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize16,
      color: WHITE,
    },
  });
};
