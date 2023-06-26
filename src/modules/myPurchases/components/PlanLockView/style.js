import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CYAN_BLUE, ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {paddingTop: 16, paddingBottom: 32, paddingHorizontal: 8},
    headingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 16,
      color: CYAN_BLUE,
    },
    membersContainer: {paddingTop: 20, paddingBottom: 24},
    buttonContainer: {
      backgroundColor: ORANGE,
      borderRadius: 6,
      paddingVertical: 12,
      flexDirection: ROW,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    buttonText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: WHITE,
      marginLeft: 12,
    },
    dependentContainerStyle: {paddingTop: 0},
    dependentDetailStyle: {marginTop: 20},
    separatorStyle: {height: 24},
    checkboxContainer: {marginTop: 10},
    emptyText: {
      alignSelf: CENTER,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 18,
      color: CYAN_BLUE,
    },
  });
};
