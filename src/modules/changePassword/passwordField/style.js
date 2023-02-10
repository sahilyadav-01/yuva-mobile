import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';

const styles = () => {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: ROW,
      paddingRight: 16,
    },
    imageContainer: {justifyContent: CENTER, marginBottom: 4},
    textInputStyles: {flex:1},
  });
};

export default styles;
