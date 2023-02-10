import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  title: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
    marginBottom: '5%',
  },
  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
    marginBottom: '2%',
  },
  bulletStyle: {
    flexDirection: 'row',
  },
});
