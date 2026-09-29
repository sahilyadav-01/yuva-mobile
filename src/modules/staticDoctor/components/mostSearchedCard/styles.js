import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  box: {
    margin: '1%',
    borderRadius: 8,
    width: '30%',
    backgroundColor: CYAN_BLUE,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
  },
  textStyle: {
    color: WHITE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.rubik400,
  },
  boxView: {
    justifyContent: CENTER,
    alignContent: CENTER,
    alignItems: CENTER,
  },
});
