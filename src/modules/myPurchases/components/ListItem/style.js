import {StyleSheet} from 'react-native';
import {GAINSBORO_LIGHT, WHITE, CYAN_BLUE, INDIGO_LIGHT, MEDIUM_CARMINE, GREEN, BOSTON_BLUE} from '../../../../styles/colors';
import {SPACE_BETWEEN, CENTER, ROW, LINE_THROUGH} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1, paddingTop: 20, paddingHorizontal: 12},
    listContainer: {
      paddingLeft: 20,
      paddingRight: 12,
      paddingTop: 12,
      paddingBottom: 20,
      borderRadius: 12,
      backgroundColor: WHITE,
      borderWidth: 1,
      borderColor: GAINSBORO_LIGHT,
    },
    topSectionContainer: {
      alignItems: CENTER,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 14,
    },
    orderText: {
      color: CYAN_BLUE,
      maxWidth: '80%',
      fontSize: fonts.size.fontSize10,
      lineHeight: 11,
      fontFamily: fonts.family.rubik400,
    },
    rowContainer: {flexDirection: ROW},
    imageStyle: {height: 20, width: 20},
    dateText: {
      color: CYAN_BLUE,
      lineHeight: 11,
      fontSize: fonts.size.fontSize10,
      fontFamily: fonts.family.rubik400,
    },
    timeText: {
      color: CYAN_BLUE,
      lineHeight: 10,
      fontSize: fonts.size.fontSize10,
      fontFamily: fonts.family.rubik400,
    },
    bottomSectionContainer: {flexDirection: ROW, alignItems: CENTER},
    iconContainer: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: 'rgba(0,0,0,0.1)',
      marginRight: 10,
    },
    bookingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
    },
    sectionContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    purchaseContainer: {marginBottom: 15},
    purchaseText: {
      marginBottom: 12,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 14,
      color: INDIGO_LIGHT
    },
    orderDetailsText: {
      marginBottom: 3,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize16,
      lineHeight: 24,
      color: CYAN_BLUE,
    },
    priceBreakupText: {
      marginBottom: 12,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      lineHeight: 12,
      color: CYAN_BLUE,
    },
    planDetailsContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    amountDetailsContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 10,
    },
    priceText: {
      marginBottom: 5,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
    reorderText: {
      marginBottom: 26,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 17,
      color: CYAN_BLUE
    },
    summaryContainer: {flexDirection: ROW, justifyContent: SPACE_BETWEEN},
    personText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 17,
      color: CYAN_BLUE,
    },
    planText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 14,
      color: CYAN_BLUE,
    },
    amountText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
      color: CYAN_BLUE,
    },
    totalAmountText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize12,
      lineHeight: 14,
      color: CYAN_BLUE,
    },
    totalAmountTextDetail: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
    invoiceText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 17,
      color: BOSTON_BLUE,
    },
    regularPriceText: {textDecorationLine: LINE_THROUGH,marginRight:4,color:MEDIUM_CARMINE},
    rowView: {flexDirection:ROW},
    separator: {height:40},
    discountPrice: {
        marginBottom: 5,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize14,
        lineHeight: 21,
        color: GREEN,
      },
    arrowContainer: {
      paddingHorizontal: 6,
      paddingVertical:8
    }
  });
};
