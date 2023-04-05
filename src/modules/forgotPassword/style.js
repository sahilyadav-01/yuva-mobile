import {StyleSheet} from 'react-native';
import {CYAN_BLUE, MERCURY, FLASH_WHITE, WHITE, RED_SHADE, ORANGE} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    cardContainer: {flex: 1, paddingVertical: 32, paddingHorizontal: 13},
    cardStyle: {
      backgroundColor: WHITE,
      elevation: 100,
      zIndex: 100,
      borderRadius: 12,
      shadowColor: FLASH_WHITE,
      paddingTop: 16,
      paddingBottom: 32,
      paddingHorizontal: 14,
    },
    textInputContainerStyle: {
      paddingHorizontal: 6,
      marginTop: 32,
      marginBottom: 24,
    },
    textInputContainer: {
      lineHeight: 20,
      paddingVertical: 0.5,
      marginBottom: 4,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    },
    separator: {
      borderWidth: 0.5,
      backgroundColor: MERCURY,
      borderColor: MERCURY,
    },
    buttonContainer: {
      marginVertical: 32,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 8,
      backgroundColor: ORANGE
    },
    buttonText: {
      marginVertical: 16,
      lineHeight: 17,
      fontSize: fonts.size.fontSize14,
      fontFamily: fonts.family.rubik700,
      color: WHITE,
    },
    errorContainer: {marginVertical: 4},
    errorText: {color: RED_SHADE},
  });
};

export default styles;
