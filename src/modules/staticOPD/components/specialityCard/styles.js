import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  textStyle: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    marginBottom: '5%',
  },
  imageStyle: {
    width: '100%',
    height: '22%',
    marginTop: '5%',
  },
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    marginBottom: '5%',
  },
});
