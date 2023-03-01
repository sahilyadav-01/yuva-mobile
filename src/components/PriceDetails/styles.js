import {StyleSheet} from 'react-native';
import {WHITE, CYAN_BLUE} from '../../styles/colors';
import { ROW } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    detailsContainer: {
      borderRadius: 6,
      zIndex: 1,
      backgroundColor: WHITE,
      elevation: 1,
      marginVertical: 16,
      paddingVertical: 12,
    },
    headingText: {
      marginLeft: 12,
      marginVertical: 8,
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
    priceContainer: {
      flexDirection: ROW,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    priceText: {
      fontSize: 12,
      lineHeight: 18,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik400,
    },
    titleView: {
      flex: 1,
    },
    priceView: {
      paddingRight: 4,
    },
  });
};
