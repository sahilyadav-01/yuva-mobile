import {StyleSheet} from 'react-native';
import {FLASH_WHITE, WHITE} from '../../../../styles/colors';

const styles = () => {
  return StyleSheet.create({
    scrollViewContainer: {paddingHorizontal: 13, marginVertical:32},
    signUpCard: {
      backgroundColor: WHITE,
      elevation: 100,
      zIndex: 100,
      paddingTop: 16,
      paddingBottom: 32,
      borderRadius: 12,
      shadowColor: FLASH_WHITE,
    },
  });
};

export default styles;
