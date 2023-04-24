import {StyleSheet} from 'react-native';
import {CYAN_BLUE, INDIGO_LIGHT, MEDIUM_CARMINE, GREEN, BOSTON_BLUE, CATSKILL_WHITE_2} from '../../../../styles/colors';
import {SPACE_BETWEEN, CENTER, ROW, LINE_THROUGH} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';


export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1, paddingTop: 20, paddingHorizontal: 12},
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
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      lineHeight: 12,
      color: CYAN_BLUE,
      marginBottom:8,
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
    summaryContainer: {flexDirection: ROW, justifyContent: CENTER},
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
    couponText: {fontFamily:fonts.family.rubik500,fontSize:fonts.size.fontSize10,lineHeight:15,color:CYAN_BLUE},
    couponDescription: {fontFamily:fonts.family.rubik400,fontSize:fonts.size.fontSize10,lineHeight:15,color:CYAN_BLUE},
    couponContainer: {borderRadius:12,backgroundColor:CATSKILL_WHITE_2,paddingVertical:10,paddingLeft:16},
    priceBreakUpContainer: {marginBottom:12},
    listExpandContainer: {marginVertical: 20},
    itemSeparatorStyle: {height: 24},
  });
};
