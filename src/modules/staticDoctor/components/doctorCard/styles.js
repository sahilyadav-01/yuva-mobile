import {StyleSheet} from 'react-native';
import {CYAN_BLUE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  Ocircle: {
    marginVertical: '3%',
    flexDirection: 'row',
    alignItems: CENTER,
  },
  textStyle: {
    marginHorizontal: '2%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  headTitle: {
    marginTop: '5%',
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.fontFamilyRubix,
  },
});
