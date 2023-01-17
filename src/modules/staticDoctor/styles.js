import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../styles/colors';
import {CENTER, ROW} from '../../styles/constants';

import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },

  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },
  box: {
    borderRadius: 8,
    height: 48,
    width: 111,
    backgroundColor: CYAN_BLUE,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  boxText: {
    color: WHITE,
  },
  boxView: {
    flexDirection: ROW,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imageViews: {
    flexDirection: ROW,
    justifyContent: 'space-between',
  },
  imageText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },
  imageName: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
  },
  ScrollViewContainerStyle: {
    paddingBottom: 400,
  },
  title: {
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },
  textStyle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
  },
  imageStyle: {
    width: '100%',
    height: '22%',
    marginTop: '2%',
  },
  headTitle: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
  },
});
