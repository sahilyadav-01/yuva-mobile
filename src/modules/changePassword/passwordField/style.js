import {StyleSheet} from 'react-native';
import {CENTER, ROW} from '../../../styles/constants';

const styles = () => {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: ROW,
      paddingRight: 16,
      paddingVertical: 12,
      paddingLeft:20,
      borderWidth: 0.5,
      borderRadius: 4,
      backgroundColor:'#F1F4FF',
      alignItems: CENTER
    },
    imageContainer: {justifyContent: CENTER, marginBottom: 4},
    textInputStyles: {flex:1},
  });
};

export default styles;
