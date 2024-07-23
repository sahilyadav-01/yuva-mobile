import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {DARK_BLUE, GREEN, ORANGE, PALE_SKY} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {getDimensions} from '../../../../utils/utils.js';

const {width, height} = getDimensions();
const styles = () => {
  return StyleSheet.create({
    container: {marginTop: 24, flex: 1},
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
    brandText: {
      marginLeft: 24,
      marginVertical: 12,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: PALE_SKY,
    },
    webView: {
      marginHorizontal: 16,
      width: width - 32,
    },
  });
};

export {styles, height};
