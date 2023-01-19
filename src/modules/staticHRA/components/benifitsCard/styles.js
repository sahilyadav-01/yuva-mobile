import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';

import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  ScrollViewContainerStyle: {
    paddingBottom: 400,
  },
  title: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    marginBottom: '5%',
  },
  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
    marginBottom: '2%',
  },
  imageStyle: {
    width: '100%',
    height: '22%',
    //marginTop: '2%',
  },
});
