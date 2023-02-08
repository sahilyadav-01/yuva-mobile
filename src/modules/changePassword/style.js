import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';

const styles = () => {
  return StyleSheet.create({
    inputsContainer: {
      paddingVertical: 32,
      paddingHorizontal: 7,
    },
    textInputSpacing: {marginBottom: 50},
    buttonStyle: {marginBottom: 28},
    loginContainer: {marginTop: 20},
  });
};

export default styles;
