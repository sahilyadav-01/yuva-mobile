import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  description1: {
    color: CYAN_BLUE,
    alignSelf: CENTER,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
    marginLeft: '5%',
  },
  textDia: {
    flexDirection: 'row',
  },
  imgL1: {
    marginHorizontal: '6%',
    height: 80,
  },
  textView: {
    justifyContent: CENTER,
  },
  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
});
