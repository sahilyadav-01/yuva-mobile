import {StyleSheet} from 'react-native';
import {BLACK, MARINER} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: ROW,
      borderWidth: 1,
      borderColor: BLACK,
      flex: 1,
      paddingVertical: 12,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    textStyle: {
      marginRight: 12,
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize12,
      color: MARINER,
      lineHeight: 18,
    },
    arrowContainer: {padding: 12, justifyContent: CENTER, alignSelf: CENTER},
    footerContainer: {flexDirection: ROW, paddingBottom: 10},
    headingText: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 16,
      color: BLACK,
    },
    footerColumnStyle: {
      borderRightWidth: 0,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      borderColor: BLACK,
    },
    rightView: {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      borderColor: BLACK,
    },
  });
};
