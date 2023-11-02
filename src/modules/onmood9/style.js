import {StyleSheet} from 'react-native';
import {CENTER} from '../../styles/constants';
import { fonts } from '../../styles/fonts';
import { CYAN_BLUE } from '../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1},
    contentContainer: {flex: 1, alignItems: CENTER, justifyContent: CENTER},
    errorText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
      textAlign: CENTER,
    },
    errorContainer: {
      paddingHorizontal: 16
    }
  });
};
