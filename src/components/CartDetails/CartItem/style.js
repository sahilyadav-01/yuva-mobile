import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  GUARDSMAN_RED,
  RED_SHADE,
  SPANISH_WHITE,
} from '../../../styles/colors';
import {
  CENTER,
  LINE_THROUGH,
  ROW,
  SPACE_BETWEEN,
} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: 8,
      paddingRight: 12,
      paddingLeft: 8,
      flexDirection: ROW,
      alignItems: CENTER,
      justifyContent: SPACE_BETWEEN,
      borderWidth: 0.5,
      borderColor: '#D1D1D1',
      borderRadius: 4,
    },
    rowView: {
      flexDirection: ROW,
      alignItems: CENTER,
    },
    itemCost: {
      marginRight: 4,
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize10,
      color: BLACK,
    },
    discountText: {
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize10,
      color: '#6B6B6B',
    },
    itemName: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize10,
      color: BLACK,
    },
    iconContainer: {
      width: 40,
      height: 40,
      paddingHorizontal: 4,
      paddingVertical: 12,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: '#E4E4E4',
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    priceContainer: {flexDirection: ROW, alignItems: CENTER},
  });
};
