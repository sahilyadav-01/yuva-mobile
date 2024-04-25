import {StyleSheet} from 'react-native';
import {
  CENTER,
  COLUMN_REVERSE,
  ROW,
  SPACE_BETWEEN,
} from '../../../styles/constants';
import {
  BLACK,
  CYAN_BLUE,
  FLASH_WHITE,
  GREY,
  MARINER,
  WHITE,
} from '../../../styles/colors';
import {fonts} from '../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    loaderContainer: {
      flex: 1,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    container: {
      flex: 1,
      backgroundColor: FLASH_WHITE,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
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
      flex: 1,
      backgroundColor: MARINER,
      borderRadius: 8,
    },
    filterView: {
      flex: 1,
    },
    categoryContainer: {maxHeight: '33.3%'},
    listStyle: {
      borderWidth: 0.5,
      borderColor: GREY,
      zIndex: 10,
      marginHorizontal: 8,
      borderRadius: 8,
      backgroundColor: WHITE,
    },
    itemContainer: {
      flexDirection: ROW,
      alignItems: CENTER,
    },
    titleText: {
      marginLeft: 4,
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
    },
    errorText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    },
    titleStyle: {
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
      marginVertical: 8,
    },
    buttonText: {
      color: WHITE,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
    },
    buttonSeparator: {width:16},
  });
};
