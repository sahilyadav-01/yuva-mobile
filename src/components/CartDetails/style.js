import {StyleSheet} from 'react-native';
import {WHITE, CYAN_BLUE, BLACK} from '../../styles/colors';
import {fonts} from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    detailsContainer: {
      borderRadius: 6,
      zIndex: 1,
      backgroundColor: WHITE,
      elevation: 1,
    },
    headingText: {
      fontFamily: fonts.family.montserrant700,
      fontSize: fonts.size.fontSize14,
      color: BLACK,
      marginBottom: 8,
    },
  });
};
