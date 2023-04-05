import {StyleSheet} from 'react-native';
import {WHITE, CYAN_BLUE} from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    detailsContainer: {
      borderRadius: 6,
      zIndex: 1,
      backgroundColor: WHITE,
      elevation: 1,
    },
    headingText: {
        marginLeft: 12,
        marginVertical: 16,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize14,
        lineHeight: 21,
        color: CYAN_BLUE,
      }
  });
};
