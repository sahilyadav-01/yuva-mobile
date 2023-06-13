import {StyleSheet} from 'react-native';
import { BLACK, DARK_BLUE, ORANGE, WHITE } from '../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, ROW } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
  messageView: {
    marginTop:38,
    borderRadius: 12,
    backgroundColor: WHITE,
    marginHorizontal: 15,
    shadowOpacity: 0.2,
    shadowColor: BLACK,
    elevation: 10,
  },
  imageStyle: {
    justifyContent: FLEX_END,
    position: ABSOLUTE,
    right: 0,
    borderTopRightRadius: 12,
  },
  otpView: {
    flexDirection: ROW,
    alignItems: CENTER,
    marginTop: 15,
  },
  descriptionStyle: {
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: 15,
    marginTop: 15,
  },
  otpDescriptionStyle: {
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    lineHeight:18,
    marginLeft: 15,
  },
  thankStyle: {
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    marginLeft: 15,
    marginTop: 15,
  },
  otpStyle: {
    color: ORANGE,
  },
  subOtpDescriptionStyle: {
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    lineHeight:18,
    marginLeft: 15,
  },
  secondView: {width: '75%'},
  bottomTextStyle: {
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: 15,
    marginTop: 15,
    marginBottom:38
  },
});