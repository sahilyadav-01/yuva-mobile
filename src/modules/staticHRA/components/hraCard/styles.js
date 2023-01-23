import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';

import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
    marginBottom: '5%',
  },
  title: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
    marginBottom: '5%',
  },
  headTitle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.fontFamilyRubix,
    marginTop: '10%',
    marginBottom: '5%',
  },
});
