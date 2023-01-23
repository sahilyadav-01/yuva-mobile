import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  box: {
    margin: '1%',
    borderRadius: 8,
    height: 48,
    width: 111,
    backgroundColor: CYAN_BLUE,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  textStyle: {
    color: WHITE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
});
