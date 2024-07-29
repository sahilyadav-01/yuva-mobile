import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, GRAY, MARINER, RED, WHITE} from '../../styles/colors';
import {ABSOLUTE, CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import { getDimensions } from '../../utils/utils';

export const styles = () => {
  const {width} = getDimensions()
  return StyleSheet.create({
    container: {flex: 1, backgroundColor: WHITE},
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
    noteText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize12,
      color: WHITE,
    },
    noteContainer: { marginVertical: 8, paddingHorizontal: 16, alignItems: CENTER, backgroundColor: MARINER, paddingVertical: 4, width: width - 32, marginLeft: 16, borderRadius: 8, borderWidth: 0.5, borderColor: MARINER },
  });
};
