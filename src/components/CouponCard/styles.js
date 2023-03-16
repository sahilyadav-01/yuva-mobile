import { StyleSheet } from 'react-native';
import { WHITE, CYAN_BLUE, ORANGE, HALF_WHITE, BLACK } from '../../styles/colors';
import { CENTER, FLEX_START, ROW, SPACE_BETWEEN, FLEX_END, COLUMN, FLEX } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: HALF_WHITE,
    marginHorizontal: 30,
    marginBottom: 12,
    borderRadius: 12,
    alignItems: SPACE_BETWEEN,
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
    fontSize: fonts.size.fontSize16,
    margin: 12,
    paddingLeft: 10,
    alignSelf: FLEX_START,
  },
  viewCoupon: {
    flexDirection: ROW,
    borderWidth: 0.5,
    borderRadius: 12,
    height: 40,
    marginBottom: 25,
    marginHorizontal: 15,
  },
  textInputStyles: {
    color: BLACK,
    marginBottom: 11,
    height: 40,
    width: 206,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  applyStyles: {
    borderRadius: 12,
    backgroundColor: ORANGE,
    marginHorizontal: 20,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingLeft: 20,

    // justifyContent: FLEX_END,

  },
  couponContainer: {
    height: 115,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: ROW,
    marginBottom: 35,
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
    fontSize: fonts.size.fontSize16,
    textAlign: CENTER,
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