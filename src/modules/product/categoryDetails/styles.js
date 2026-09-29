import {StyleSheet} from 'react-native';
import {fonts} from '../../../styles/fonts';
import {CYAN_BLUE} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1},
    loaderContainer: {
      flex: 1,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    errorText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    },
  });
};
