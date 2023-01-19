import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../../styles/colors';

import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },

  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
  },
  boxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  box: {
    borderRadius: 8,
    height: 48,
    width: 111,
    backgroundColor: CYAN_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: WHITE,
  },
});
