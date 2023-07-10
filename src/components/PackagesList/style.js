import {StyleSheet} from 'react-native';
import {BIANCA, BLACK, CYAN_BLUE, WHITE} from '../../styles/colors';
import {ABSOLUTE, CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {getWindowDimensions} from '../../utils/utils';

export const styles = () => {
  const {height: windowHeight} = getWindowDimensions();
  return StyleSheet.create({
    container: {
      paddingVertical: 24,
      paddingHorizontal: 12,
      backgroundColor: WHITE,
      borderRadius: 12,
      elevation: 10,
      zIndex: 10,
      maxHeight: windowHeight * 0.5,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: BLACK,
      shadowOpacity: 0.5,
      shadowRadius: 4
    },
    separatorStyle: {height: 16},
    headingTextContainer: {
      position: ABSOLUTE,
      top: -11.5,
      left: 36,
      paddingVertical: 7,
      paddingHorizontal: 18,
      backgroundColor: BIANCA,
      elevation: 10,
      zIndex: 10,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 8,
      shadowColor: WHITE,
    },
    headingText: {
      lineHeight: 18,
      fontSize: fonts.size.fontSize12,
      fontFamily: fonts.family.rubik500,
      color: CYAN_BLUE,
    },
    headerMargin: {height: 40},
  });
};
