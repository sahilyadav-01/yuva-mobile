import {StyleSheet} from 'react-native';
import { ALTO_OPACITY, NAVAJO_WHITE, ROSE_WHITE, WHITE } from '../../../../styles/colors';
import { FLEX_START, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    cardContainer: {
      paddingBottom: 24,
      marginBottom: 10,
      flex: 1,
      width: '100%',
    },
    contentContainer: {paddingTop: 12, paddingLeft: 24},
    cardText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: ALTO_OPACITY,
      lineHeight: 18,
    },
    planText: {
      marginBottom: 8,
      color: ROSE_WHITE,
      fontFamily: fonts.family.raleway800,
      fontSize: fonts.size.fontSize12,
      lineHeight: 15,
      letterSpacing: 3,
      maxWidth:"70%",
    },
    nameText: {
      marginBottom: 36,
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize10,
      color: NAVAJO_WHITE,
    },
    orderDetailsContainer: {
      marginRight: 36,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    validText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize6,
      color: WHITE,
    },
    orderNumber: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize8,
      color:WHITE,
      lineHeight:10
    },
    boxStyle: {
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: ALTO_OPACITY,
      paddingLeft: 4,
      paddingRight: 16,
      alignSelf: FLEX_START,
      marginBottom: 16,
    },
  });
};