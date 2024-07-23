import {StyleSheet} from 'react-native';
import {WHITE} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: WHITE,
      paddingBottom: 24,
    },
    loaderContainer: {
      flex: 1,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
  });
};
