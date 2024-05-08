import { StyleSheet } from 'react-native';
import { CYAN_BLUE, BLACK, OFF_WHITE, COUPON_DARK_GREY, DARK_BLUE, ORANGE, GREEN, RED, MARINER, WHITE } from '../../styles/colors';
import { CENTER, FLEX_START, ROW, SPACE_BETWEEN } from '../../styles/constants';
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
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize16,
    marginBottom: 8
  },
  viewCoupon: {
    flexDirection: ROW,
    borderColor: COUPON_DARK_GREY,
    borderRadius:8,
    borderWidth: 0.5,
    justifyContent: SPACE_BETWEEN,
    marginBottom: 12,
  },
  textInputStyles: {
    flex: 1,
    color: MARINER,
    paddingHorizontal: 16,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize12,
    paddingVertical: 12,
  },
  applyStyles: {
    borderRadius: 8,
    backgroundColor: MARINER,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 12,
    paddingHorizontal: 36
  },
  couponContainer: {
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: ROW,
    marginBottom: 12,
    borderStyle: 'dotted',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
  },
  discount: {
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize16,
  },
  couponTextStyle: {
    marginTop: 4,
    color: MARINER,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize12,
  },
  useCouponStyle: {
    width: '28%',
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  useCouponTextStyle1: {
    color: MARINER,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
  },
  useCouponTextStyle2: {
    color: RED,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    textAlign: CENTER,
    width: '72%',
  },
  couponStatus: {
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize12,
  },
  viewStyles: {
    width: '70%',
  },
  couponLabelStyles: {
    color: BLACK,
    marginBottom:12,
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize14,
  },
  buttonStyles: {
    marginHorizontal: 15,
  },
  couponText: {
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize12,
    color: WHITE,
  },
});