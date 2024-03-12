import {StyleSheet} from 'react-native';
import {INDIGO_LIGHT, ORANGE, VIVID_TANGERINE} from '../../../../styles/colors';
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
      marginHorizontal: 16,
      marginBottom: 16,
    },
    headerText: {
      color: INDIGO_LIGHT,
      fontFamily: fonts.family.rubik700,
      fontSize: fonts.size.fontSize14,
    },
    textContainer: {
      flex: 1,
      flexDirection: ROW_REVERSE,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      overflow: HIDDEN,
    },
    viewAll: {
      color: INDIGO_LIGHT,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
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
      textAlign: CENTER
    },
    categoryHeadingContainer: {
      flexDirection: ROW,
      paddingHorizontal: 16,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      width:'100%'
    },
  });
};
