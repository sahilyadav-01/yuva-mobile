import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  KASHMIR_BLUE,
  MERCURY,
  RED_SHADE,
  WHITE,
} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    textInputCardContainer: {
      width: '100%',
      paddingHorizontal: 8,
      paddingTop: 32,
    },
    textInputContainer: {
      lineHeight: 20,
      paddingVertical: 0.5,
      marginBottom: 4,
      fontFamily: fonts.family.rubik400,
      fontSize: 14,
      color: CYAN_BLUE,
    },
    separator: {
      borderWidth: 0.5,
      backgroundColor: MERCURY,
      borderColor: MERCURY,
    },
    warningText: {color: RED_SHADE},
    checkTextContainer: {marginTop: 8},
    buttonContainer: {
      marginVertical: 32,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 8,
    },
    buttonText: {
      marginVertical: 16,
      lineHeight: 17,
      fontSize: 14,
      fontFamily: fonts.family.rubik700,
      color: WHITE,
    },
    termsAndConditionsText: {
      lineHeight: 20,
      fontFamily: fonts.family.rubik400,
      fontSize: 10,
      color: CYAN_BLUE,
    },
    termsAndConditionsContainer: {
      marginTop: 32,
      paddingLeft: 3,
      flexDirection: ROW,
    },
    checkBoxContainer: {
      width: 13,
      height: 13,
      marginTop: 5,
      borderWidth: 1,
      borderColor: CYAN_BLUE,
      marginRight: 12,
    },
    existingMember: {
      color: BLACK,
      fontFamily: fonts.family.nunito600,
      fontSize: 14,
      lineHeight: 21,
    },
    loginText: {
      color: KASHMIR_BLUE,
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 21,
    },
    bottomTextContainer: {alignItems: CENTER},
    rowTextContainer: {flexDirection: ROW, justifyContent: SPACE_BETWEEN},
  });
};

export default styles;
