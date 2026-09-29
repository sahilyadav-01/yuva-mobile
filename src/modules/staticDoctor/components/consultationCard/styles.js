import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';
const {width, height} = getDimensions();

export const styles = StyleSheet.create({
  description1: {
    color: CYAN_BLUE,
    alignSelf: CENTER,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.rubik400,
    marginLeft: '5%',
  },
  textDia: {
    flexDirection: ROW,
  },
  imgL1: {
    marginHorizontal: '6%',
    height: 80,
  },
  imageBgStyle: {
    height: 0.055 * height,
    width: 0.12 * width,
    justifyContent: CENTER,
  },
  imageNumStyle: {color: WHITE, alignSelf: CENTER},
  textView: {
    justifyContent: CENTER,
  },
  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
  },
});
