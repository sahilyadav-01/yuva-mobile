import {StyleSheet} from 'react-native';
import {
  BLACK,
  MARINER,
  ORANGE,
  VIVID_TANGERINE,
} from '../../../../styles/colors';
import {
  CENTER,
  HIDDEN,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    headerContainer: {
      alignItems: CENTER,
      marginTop: 28,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 16,
    },
    headerText: {
      color: BLACK,
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize18,
    },
    textContainer: {
      flex: 1,
      flexDirection: ROW_REVERSE,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      overflow: HIDDEN,
    },
    viewAll: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize12,
      color: MARINER,
    },
    line: {
      borderBottomColor: VIVID_TANGERINE,
      borderBottomWidth: 2,
      flex: 1,
    },
    categoryName: {
      color: ORANGE,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      maxWidth: '30%',
      textAlign: CENTER,
    },
    categoryHeadingContainer: {
      flexDirection: ROW,
      paddingHorizontal: 16,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      width: '100%',
    },
  });
};
