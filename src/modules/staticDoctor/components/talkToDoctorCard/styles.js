import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  description: {
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },

  imageViews: {
    marginBottom: '5%',
    flexDirection: ROW,
    justifyContent: 'space-between',
  },

  imageName: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
    alignSelf: CENTER,
  },

  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  headTitle: {
    marginTop: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.fontFamilyRubix,
  },
});
