import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {
  WHITE,
  ORANGE,
  SHADOW,
  PLATINUM,
  DARK_BLUE,
} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
    scrollViewContainer: {
      marginTop: 24,
      backgroundColor: WHITE,
      elevation: 10,
      zIndex: 10,
      shadowColor: SHADOW,
      borderRadius: 12,
      paddingHorizontal: 13,
      paddingTop: 20,
      marginBottom: 24,
    },
    saveDetailsButton: {
      width: '100%',
      flexDirection: ROW,
      paddingVertical: 16,
      marginBottom: 20,
      backgroundColor: ORANGE,
      borderRadius: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    textInputStyle: {
      borderBottomWidth: 1,
      borderColor: PLATINUM,
      paddingBottom: 5,
      marginBottom: 35,
      color: DARK_BLUE,
    },
    saveButtonText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      fontWeight: fonts.weight.fontWeight700,
      color: WHITE,
      textAlign: CENTER,
    },
    separatorStyle: {
      height: 1,
      width: '100%',
      backgroundColor: PLATINUM,
      marginBottom: 30,
    },
    dropdownBoxStyle: {borderWidth: 0, paddingLeft: 5},
  });
};

export default styles;
