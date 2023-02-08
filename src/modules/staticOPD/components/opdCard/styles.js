import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  title: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.rubik400,
    marginTop: '10%',
    marginBottom: '5%',
  },
  textStyle: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
    marginBottom: '5%',
  },
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.rubik400,
    marginBottom: '5%',
  },
});
