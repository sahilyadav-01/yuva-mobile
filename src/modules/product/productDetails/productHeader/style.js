import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {
  ALTO_OPACITY,
  BLACK,
  FLASH_WHITE,
  MARINER,
  WHEAT,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  ROW,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
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
      backgroundColor: currentIndex ? MARINER : ALTO_OPACITY,
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
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize24,
      color: BLACK,
      flex: 1,
    },
    quantityContainer: {
      padding: 8,
      borderRadius: 84,
      borderWidth: 0.5,
      borderColor: FLASH_WHITE,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    quantityText: {
      marginHorizontal: 16,
      fontFamily: fonts.family.montserrant700,
      fontSize: fonts.size.fontSize18,
      color: BLACK,
    },
    quantityDetails: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      marginLeft: 16,
    },
    productNameContainer: {
      marginTop: 24,
      marginBottom: 8,
      flexDirection: ROW,
      alignItems: CENTER,
      paddingHorizontal: 16,
      justifyContent: SPACE_BETWEEN,
    },
  });
};
