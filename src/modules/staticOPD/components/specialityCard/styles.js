import {StyleSheet} from 'react-native';
import {ORANGE} from '../../../../styles/colors';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  textStyle: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    marginBottom: '5%',
  },
  imageStyle: {
    width: '100%',
    height: '22%',
    marginTop: '5%',
  },
});
