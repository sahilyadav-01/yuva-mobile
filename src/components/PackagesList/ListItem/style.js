import {StyleSheet} from 'react-native';
import {
  AMBER,
  CYAN_BLUE,
  GREEN,
  INDIGO,
  SUNSET_ORANGE,
  WHITE,
} from '../../../styles/colors';
import {
  CENTER,
  LINE_THROUGH,
  ROW,
  SPACE_BETWEEN,
} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = ({selected}) => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: ROW,
      alignItems: CENTER,
      paddingLeft: 12,
      paddingRight: 16,
      justifyContent: SPACE_BETWEEN,
      borderWidth: 1,
      borderColor: selected ? GREEN : AMBER,
      paddingVertical: 16,
      borderRadius: 10,
      backgroundColor: selected ? WHITE : AMBER,
    },
    nameContainer: {
      fontFamily: fonts.family.rubik500,
      fontSize: 12,
      lineHeight: 18,
      color: false ? GREEN : INDIGO,
      maxWidth: '45%',
    },
    priceContainer: {flexDirection: ROW, justifyContent: SPACE_BETWEEN},
    discountText: {
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 21,
      color: SUNSET_ORANGE,
      textDecorationLine: LINE_THROUGH,
    },
    priceText: {
      marginHorizontal: 6,
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
  });
};
