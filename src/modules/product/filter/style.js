import {StyleSheet} from 'react-native';
import {
  CENTER,
  COLUMN_REVERSE,
  ROW,
  SPACE_BETWEEN,
} from '../../../styles/constants';
import {
  BLACK,
  FLASH_WHITE,
  LIGHT_GREY,
  ORANGE,
  WHITE,
} from '../../../styles/colors';
import {fonts} from '../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: FLASH_WHITE,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 16,
      paddingBottom: 16,
      justifyContent: SPACE_BETWEEN,
      flexDirection: COLUMN_REVERSE,
    },
    filterButtonContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginTop: 16,
    },
    filterContainer: {
      paddingVertical: 8,
      paddingHorizontal: 4,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderWidth: 1,
      borderColor: LIGHT_GREY,
    },
    filterView: {
      flex: 1,
      justifyContent: SPACE_BETWEEN,
    },
    categoryContainer: {height: '33%'},
    separator: {
      width: '100%',
      height: 0.5,
      backgroundColor: LIGHT_GREY,
    },
    listStyle: {borderWidth: 1},
    itemContainer: {
      marginLeft: 4,
      flexDirection: ROW,
      alignItems: CENTER,
    },
    titleText: {marginLeft: 4},
  });
};
