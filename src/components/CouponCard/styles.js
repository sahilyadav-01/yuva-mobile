import { StyleSheet } from 'react-native';
import { WHITE, CYAN_BLUE, ORANGE, BLACK, OFF_WHITE, COUPON_DARK_GREY } from '../../styles/colors';
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
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
    margin: 12,
    alignSelf: FLEX_START,
  },
  textStyling: {
    justifyContent: FLEX_START,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize18,
    marginLeft: 21,
    alignSelf: FLEX_START,
    marginTop: 19,
    marginBottom: 21,
  },
  viewCoupon: {
    flexDirection: ROW,
    borderRadius: 12,
    height: 40,
    marginHorizontal: 16,
    marginBottom: 25,
    backgroundColor: WHITE,
    borderWidth: 0.5,
    borderColor: COUPON_DARK_GREY,
    borderRadius: 12,
  },
  textInputStyles: {
    flex: 1,
    color: BLACK,
    marginBottom: 11,
    height: 40,
    paddingLeft: 8,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  applyStyles: {
    borderRadius: 12,
    backgroundColor: ORANGE,
    justifyContent: CENTER,
    alignItems: CENTER,
    width: '28%',
  },
  couponContainer: {
    height: 115,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: ROW,
    marginBottom: 35,
    backgroundColor: WHITE,
  },
  textStyle1: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: 12,
  },
  useCouponStyle: {
    width: '28%',
    justifyContent: CENTER,
    backgroundColor: CYAN_BLUE,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: CENTER,
  },
  useCouponTextStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    textAlign: CENTER,
    width: '72%',
  },
  viewStyles: {
    width: '72%',
  },
  applyButtonStyles: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
  },
  buttonStyles: {
    marginHorizontal: 15,
  },
});