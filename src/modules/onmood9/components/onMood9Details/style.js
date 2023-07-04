import {StyleSheet} from 'react-native';
import {LIGHT_GREY} from '../../../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    screenContainer: {flex: 1},
    contentContainer: {
      paddingVertical: 24,
      paddingHorizontal: 16,
      height: '100%',
      backgroundColor: LIGHT_GREY,
    },
  });
};
