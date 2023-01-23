import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  title: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
    marginBottom: '5%',
  },
  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
    marginBottom: '2%',
  },
  imageStyle: {
    width: '100%',
    height: '22%',
  },
});
