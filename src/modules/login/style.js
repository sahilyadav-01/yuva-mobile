import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import { CYAN_BLUE } from '../../styles/colors';
import {fonts} from '../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    needHelpText: {
      fontFamily: fonts.family.rubik400,
      fontSize: 16,
      lineHeight: 18,
      alignSelf: CENTER,
      color: CYAN_BLUE,
    },
    signUpContainer: {marginTop:20, marginBottom: 40},
  });
};

export default styles;
