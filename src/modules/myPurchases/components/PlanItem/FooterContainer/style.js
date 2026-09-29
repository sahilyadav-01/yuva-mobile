import {StyleSheet} from 'react-native';
import {CENTER, ROW} from '../../../../../styles/constants';
import {CYAN_BLUE, MARINER, ORANGE} from '../../../../../styles/colors';
import {fonts} from '../../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: ROW,
      borderWidth: 1,
      borderColor: CYAN_BLUE,
      flex: 1,
      paddingVertical: 12,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    textStyle: {
      marginRight: 12,
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize12,
      color: MARINER,
      lineHeight: 18,
    },
    arrowContainer: {padding: 12, justifyContent: CENTER, alignSelf: CENTER},
    footerContainer: {flexDirection: ROW},
    headingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 16,
      color: CYAN_BLUE,
    },
    footerColumnStyle: {
      borderRightWidth: 0,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      borderColor: CYAN_BLUE,
    },
    rightView: {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      borderColor: CYAN_BLUE,
    },
  });
};
