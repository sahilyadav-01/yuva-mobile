import { StyleSheet } from 'react-native';
import { WHITE, CYAN_BLUE, ORANGE, HALF_WHITE, BLACK } from '../../styles/colors';
import { CENTER, FLEX_START, ROW, SPACE_BETWEEN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 12,
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
    marginVertical:12,
    marginLeft:12,
    alignSelf: FLEX_START,
  },
  viewCoupon: {
    flexDirection: ROW,
    borderWidth: 0.5,
    borderRadius: 12,
    height: 40,
    marginHorizontal: 16,
    marginBottom: 25,
  },
  textInputStyles: {
    flex:1,
    color: BLACK,
    marginBottom: 11,
    height: 40,
    paddingLeft:8,
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