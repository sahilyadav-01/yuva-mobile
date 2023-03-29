import { StyleSheet } from 'react-native';
import { CYAN_BLUE, BLACK, OFF_WHITE, COUPON_DARK_GREY, DARK_BLUE, ORANGE, GREEN, RED } from '../../styles/colors';
import { CENTER, FLEX_START, ROW } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 37,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 6,
    borderWidth: 0.5,
    elevation: 2,
    backgroundColor: OFF_WHITE,
  },
  textStyle: {
    justifyContent: FLEX_START,
    color: ORANGE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    margin: 12,
    alignSelf: FLEX_START,
  },
  textStyling: {
    justifyContent: FLEX_START,
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    marginLeft: 21,
    alignSelf: FLEX_START,
    marginTop: 19,
    marginBottom: 21,
  },
  viewCoupon: {
    flexDirection: ROW,
    height: 40,
    marginHorizontal: 16,
    marginBottom: 25,
    borderWidth: 0.5,
    borderColor: COUPON_DARK_GREY,
    borderRadius:6,
  },
  textInputStyles: {
    flex: 1,
    color: CYAN_BLUE,
    marginBottom: 11,
    height: 40,
    paddingLeft: 8,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
  },
  applyStyles: {
     borderTopRightRadius:6,
     borderBottomRightRadius:6,
    backgroundColor: ORANGE,
    justifyContent: CENTER,
    alignItems: CENTER,
    width: '35%',
  },
  couponContainer: {
    height: 82,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: ROW,
    marginBottom: 35,
    borderStyle: 'dotted',
    maxWidth:'100%',

  },
  textStyle1: {
    marginTop: 12,
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
    marginLeft: 12,
  },
  textStyle2: {
    marginTop: 4,
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize8,
    marginLeft: 12,
  },
  useCouponStyle: {
    width: '28%',
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  useCouponTextStyle1: {
    color: GREEN,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    textAlign: CENTER,
    width: '72%',
  },
  useCouponTextStyle2: {
    color: RED,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    textAlign: CENTER,
    width: '72%',
  },
  useCouponTextStyle3: {
    color: BLACK,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    textAlign: CENTER,
    width: '72%',
  },
  viewStyles: {
    width: '72%',
  },
  couponLabelStyles: {
    color: DARK_BLUE,
    paddingLeft: 24,
    paddingBottom:20,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  buttonStyles: {
    marginHorizontal: 15,
  },
});