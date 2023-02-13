import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.rubik400,
    marginBottom: '5%',
  },
  title: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
    marginBottom: '5%',
  },
  title1: {
    color: WHITE,
    fontSize: fonts.size.fontSize16,
    alignSelf: CENTER,
    marginBottom: '5%',
    marginTop: '5%',
  },
  buttonStyle: {
    backgroundColor: CYAN_BLUE,
    borderRadius: 8,
    marginBottom: '5%',
  },
  headTitle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.rubik400,
    marginTop: '10%',
    marginBottom: '5%',
  },
});
