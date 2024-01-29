import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {ALTO_OPACITY, ORANGE, WHEAT} from '../../../../styles/colors';
import {ABSOLUTE, CENTER, ROW} from '../../../../styles/constants';
import {getDimensions} from '../../../../utils/utils.js';

export const styles = arg => {
  const {width, height} = getDimensions();
  const currentIndex = arg?.currentIndex ?? false;
  return StyleSheet.create({
    scrollIndicator: {
      marginRight: 8,
      borderRadius: 5,
      width: 10,
      height: 10,
      backgroundColor: currentIndex ? ORANGE : ALTO_OPACITY,
    },
    imageContainer: {
      width: width,
      height: height * 0.3,
      alignItems: CENTER,
    },
    leftContainer: {
      position: ABSOLUTE,
      left: 0,
      top: '50%',
      padding: 20,
      paddingLeft: 8,
      backgroundColor: WHEAT,
    },
    rightContainer: {
      position: ABSOLUTE,
      right: 0,
      top: '50%',
      padding: 20,
      paddingRight: 8,
      backgroundColor: WHEAT,
    },
    imageStyle: {height: '100%', width: 0.5 * width},
    scrollIndicatorContainer: {
      marginTop: 6,
      alignItems: CENTER,
      flexDirection: ROW,
      justifyContent: CENTER,
    },
    productName: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize24,
      color: ORANGE,
      textAlign: CENTER,
      marginTop: 16,
      marginBottom: 20,
    },
  });
};
