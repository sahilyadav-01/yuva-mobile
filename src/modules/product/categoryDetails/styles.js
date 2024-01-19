import {StyleSheet} from 'react-native';
import {fonts} from '../../../styles/fonts';
import {AMBER, CYAN_BLUE} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    loaderContainer: {
      flex:1,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    errorText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    }
  });
};
