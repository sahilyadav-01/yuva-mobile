import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {
  AMBER,
  BLACK,
  CYAN_BLUE,
  DARK_BLUE,
  DARK_GRAY,
  DEEP_RED,
  GREEN,
  ORANGE,
  WHITE,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  LINE_THROUGH,
  ROW,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {getDimensions} from '../../../../utils/utils.js';

const {width, height} = getDimensions();
const styles = arg => {
  return StyleSheet.create({
    container: {marginTop: 24},
    rowContainer: {
      paddingHorizontal: 24,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 8,
    },
    headingContainer: {
      paddingVertical: 12,
      width: (2 * width) / 5,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderWidth: 1,
      borderColor: GREEN,
    },
    headingText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize16,
      color: DARK_BLUE,
    },
    divider: {
      width,
      height: 1,
      backgroundColor: ORANGE,
    },
  });
};

export {styles, width};
