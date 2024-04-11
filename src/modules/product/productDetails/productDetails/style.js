import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {
  BLACK,
  CYAN_BLUE,
  DARK_GRAY,
  DEEP_RED,
  MARINER,
  ORANGE,
  WHITE,
} from '../../../../styles/colors';
import {
  CENTER,
  LINE_THROUGH,
  ROW,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {getDimensions} from '../../../../utils/utils.js';

const {width} = getDimensions();
const styles = arg => {
  const itemInset = arg?.itemInset ?? false;
  const activeItem = arg?.activeItem ?? false;
  return StyleSheet.create({
    quantityText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: activeItem ? WHITE : BLACK,
    },
    quantityTextContainer: {
      marginRight: itemInset ? 24 : 0,
      paddingVertical: 4,
      backgroundColor: activeItem ? BLACK : WHITE,
      alignItems: CENTER,
      justifyContent: CENTER,
      width: 60,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: BLACK,
    },
    bodyContainer: {
      paddingHorizontal: 16,
    },
    priceContainer: {
      marginBottom:8,
      flexDirection: ROW,
      alignItems: CENTER,
    },
    finalPriceText: {
      marginRight: 12,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      color: DEEP_RED,
    },
    originalPriceText: {
      marginRight: 8,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
      textDecorationLine: LINE_THROUGH,
    },
    discountText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      color: ORANGE,
    },
    quantityContainer: {
      flexDirection: ROW,
    },
    quantityHeading: {
      marginVertical: 8,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: DARK_GRAY,
    },
    quantityPicker: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      width: 76,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: BLACK,
    },
    quantityPickerText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
    },
    buttonContainer: {
      backgroundColor: MARINER,
      width: '100%',
      paddingVertical: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 12,
      marginTop: 16,
    },
    buttonText: {
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize18,
      color: WHITE,
    },
    itemText: {
      fontFamily: fonts.family.montserrant800,
      fontSize: fonts.size.fontSize10,
      color: BLACK,
    },
    sizeContainer: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      backgroundColor: '#FAFAFA',
      borderColor: '#D9D9D9',
    },
  });
};

export {styles, width};
