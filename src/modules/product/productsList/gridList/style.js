import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {BLACK, FLASH_WHITE, MARINER} from '../../../../styles/colors';

export const styles = (arg, marginRight) => {
  const leftAlign = arg?.left ?? false;
  return StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    heading: {
      marginLeft: 12,
      marginVertical: 8,
      fontFamily: fonts.family.montserrant700,
      fontSize: fonts.size.fontSize10,
      maxWidth: '75%',
      color: BLACK,
      lineHeight: 12,
    },
    rowContainer: {
      flexDirection: ROW,
      alignItems: CENTER,
      paddingLeft: 12,
      paddingRight: 16,
      justifyContent: SPACE_BETWEEN,
    },
    iconContainer: {
      height: 25,
      width: 25,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: MARINER,
      borderRadius: 4,
    },
    priceText: {
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize10,
      color: '#6B6B6B',
      textDecorationLine: 'line-through',
    },
    discountContainer: {
      paddingHorizontal: 6,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: '#A5CCFF',
    },
    offerText: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize8,
      color: BLACK,
    },
    discountPrice: {
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize18,
      color: BLACK,
    },
    productItemContainer: {
      paddingTop: 10,
      marginRight: leftAlign ? marginRight : 0,
      flex: 1,
      borderRadius: 12,
      borderWidth: 1,
      paddingBottom: 6,
      borderColor: FLASH_WHITE,
    },
    rowView: {
      flexDirection: ROW,
    },
    itemGap: {
      width: 4,
    },
    imageStyle: {width: 100, height: 100, alignSelf: CENTER},
    listStyle: {flex: 1, paddingHorizontal: 20, paddingBottom: 12},
    separator: {height: 12},
    headingContainer: {
      height: 48,
    },
  });
};
