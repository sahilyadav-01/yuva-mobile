import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../../styles/colors';
import {CENTER, ROW} from '../../../styles/constants';

import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  description: {
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },

  imageViews: {
    marginBottom: '5%',
    flexDirection: ROW,
    justifyContent: 'space-between',
  },

  imageName: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },

  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },

  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
  },
});
