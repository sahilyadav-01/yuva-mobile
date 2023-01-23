import {StyleSheet} from 'react-native';
import {CYAN_BLUE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  paramText1: {
    color: CYAN_BLUE,
    marginLeft: '5%',
    alignSelf: CENTER,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  Ocircle: {
    alignItems: CENTER,
    marginVertical: '2%',
    flexDirection: 'row',
  },
});
