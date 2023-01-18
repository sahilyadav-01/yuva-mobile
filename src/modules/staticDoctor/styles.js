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
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },
  description1: {
    color: CYAN_BLUE,
    alignSelf: CENTER,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    marginLeft: '5%',
  },
  Odescription1: {
    color: CYAN_BLUE,
    marginLeft: '5%',
    alignSelf: CENTER,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },
  imageO: {
    marginTop: '1%',
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
    marginBottom: '5%',
    flexDirection: ROW,
    justifyContent: 'space-between',
  },
  textDia: {
    flexDirection: 'row',
  },
  Ocircle: {
    marginVertical: '2%',
    flexDirection: 'row',
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
  imgC1: {
    width: '10%',
    justifyContent: 'space-between',
  },
  imgL1: {
    marginHorizontal: '6%',
    height: 80,
  },
  styleText: {
    width: '100%',
  },
  textView: {
    justifyContent: CENTER,
  },
  ScrollViewContainerStyle: {
    paddingBottom: 400,
  },
  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },
  title1: {
    marginTop: '5%',
    marginBottom: '5%',
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
    marginTop: '5%',
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
  },
});
