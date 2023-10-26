import { StyleSheet } from 'react-native';
import { BLACK, CYAN_BLUE, WHITE } from '../../styles/colors';
import { ABSOLUTE } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: WHITE },
    searchHomeContainer: {paddingBottom: 12},
    boxStyle: {
      paddingTop: 0,
      borderWidth: 0,
      paddingHorizontal: 10,
      minWidth: 75,
    },
    inputStyles: {
      fontSize: fonts.size.fontSize10,
      fontFamily: fonts.family.rubik400,
      color: CYAN_BLUE,
    },
    dropdownStyles: {
      marginTop: 0,
      borderWidth: 0,
      borderRadius: 4,
      position: ABSOLUTE,
      backgroundColor: WHITE,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowColor: BLACK,
      elevation: 3,
      width: '150%',
    },
  });
};
