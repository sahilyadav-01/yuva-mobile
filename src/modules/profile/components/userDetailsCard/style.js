import {StyleSheet} from 'react-native';
import {WHITE, SHADOW} from '../../../../styles/colors';

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
  });
};

export default styles;
