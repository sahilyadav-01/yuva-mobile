import {StyleSheet} from 'react-native';
import {
  WHITE,
  CYAN_BLUE,
  GREEN,
  DEEP_BLUE,
  DARK_GRAY,
  CHARCOAL,
  BLUE_GRAY,
  MEDIUM_CARMINE,
} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

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
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
    priceContainer: {
      flexDirection: ROW,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    priceText: {
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik500,
    },
    discountPriceTextStyle: {
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: GREEN,
      fontFamily: fonts.family.rubik500,
    },
    gstText: {
      fontSize: fonts.size.fontSize10,
      lineHeight: 15,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik500,
    },
    titleView: {
      flex: 1,
    },
    priceView: {
      paddingRight: 4,
    },
    couponContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      padding: 5,
      paddingHorizontal: 12,
    },
    crossStyle: {
      color: DARK_GRAY,
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize16,
    },
    iconStyle: {
      color: CHARCOAL,
    },
    appliedStyle: {
      color: DEEP_BLUE,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize16,
    },
    descStyle: {
      height: 36,
      width: '60%',
      borderRadius: 5,
      paddingLeft: 16,
      paddingRight: 12,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      flexDirection: ROW,
      backgroundColor: BLUE_GRAY,
    },
    couponDiscountStyle: {
      height: 36,
      color: GREEN,
      paddingVertical: 10,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      paddingHorizontal: 5,
    },
    collectionChargesText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    },
    applicableText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: MEDIUM_CARMINE,
    },
    processingChargeContainer: {
      paddingRight: 16,
      paddingLeft: 12,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      paddingVertical: 8,
    },
  });
};
