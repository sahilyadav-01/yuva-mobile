import {StyleSheet} from 'react-native';
import {MARINER, WHITE} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    searchFilter: {
      flexDirection: ROW_REVERSE,
      justifyContent: SPACE_BETWEEN,
    },
    iconContainer: {
      padding: 18,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: MARINER,
      borderRadius: 8,
      marginLeft: 16,
    },
    searchContainer: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#EDEDED',
      flexDirection: ROW,
      alignItems: CENTER,
      flex: 1,
      paddingHorizontal: 16,
    },
    search: {
      flex: 1,
      fontFamily: fonts.family.monsterrant500,
      color: '#878787',
      fontSize: fonts.size.fontSize15,
      marginLeft: 8,
    },
    descriptionContainer: {
      paddingHorizontal: 18,
      paddingVertical: 20,
    },
  });
};
