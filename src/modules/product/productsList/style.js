import {StyleSheet} from 'react-native';
import {MARINER, WHITE} from '../../../styles/colors';
import {
  CENTER,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

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
