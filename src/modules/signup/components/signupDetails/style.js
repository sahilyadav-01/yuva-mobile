import {StyleSheet} from 'react-native';
import {MERCURY, RED_SHADE} from '../../../../styles/colors';

const styles = () => {
  return StyleSheet.create({
    textInputCardContainer: {width: '100%', paddingHorizontal: 8, paddingVertical:32},
    textInputContainer: {lineHeight: 20, paddingVertical: 0.5, marginBottom: 4},
    separator: {
      borderWidth: 0.5,
      backgroundColor: MERCURY,
      borderColor: MERCURY,
    },
    warningText: {color:RED_SHADE},
    checkTextContainer: {marginTop:8},
  });
};

export default styles;
