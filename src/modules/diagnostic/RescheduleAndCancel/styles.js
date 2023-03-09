import { StyleSheet } from 'react-native';
import { BOX_SHADOW, CYAN_BLUE, DARK_BLUE, GREEN, LIGHT_GREY, ORANGE, RED, RED_SHADE, VERY_LIGHT_GREY, VERY_LIGHT_YELLOW, VERY_PALE_WHITE, V_LIGHT_GREY, WHITE } from '../../../styles/colors';
import { CENTER, FLEX_END, ROW, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  buttonView: {
    flexDirection:ROW,
    marginTop: 47,
  },
  buttonTextStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize16,
    marginHorizontal: 10,
  },
  button:{
    width: "50%",
    height: 48,
    borderRadius: 1,
    justifyContent: CENTER,
    alignItems: CENTER,
    borderWidth: 0,
    flexDirection: ROW,
  },
  details: {
    flexDirection: ROW,
    backgroundColor: LIGHT_GREY,
  },
  BookingStatus: {
    marginTop: 22,
    marginLeft: 16,
    color: GREEN
  },
  Status: {
    flexDirection: ROW,
    minHeight: 92,
  },
  timeSlot: {
    backgroundColor: CYAN_BLUE,
    marginLeft:78,
    marginTop: 22,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    minHeight: 48,
    marginBottom: 22,
    width: 141,
    color: WHITE,
    paddingTop: 12,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10
  },
  // dateTime:{
  //   backgroundColor:WHITE
  // },
  selectDate: {
    marginTop: 21,
    marginLeft: 16,
    marginRight: 140,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  border: {
    borderWidth: 0.2,
    marginTop: 14,
    marginLeft: 16,
    marginRight: 16,
    shadowColor: WHITE,
    shadowOpacity: "5%",
    borderRadius: 6,
    backgroundColor: VERY_LIGHT_GREY,
    dropShadow: BOX_SHADOW

  },
  adressName: {
    marginTop: 11,
    marginLeft: 19,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,

  },
  address: {
    marginTop: 11,
    marginLeft: 19,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,

  },
  adressPhn: {
    marginTop: 11,
    marginLeft: 19,
    marginBottom: 10,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  TestHeader: {
    marginTop: 37,
    backgroundColor: V_LIGHT_GREY,
    minHeight: 50,
  },
  Test: {
    marginTop: 14,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  TestList: {
    backgroundColor: LIGHT_GREY,
  },
  testItems: {
    minHeight: 50,
    marginTop: 16,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  PackageHeader: {
    backgroundColor: V_LIGHT_GREY,
    minHeight: 50,
  },
  package: {
    marginTop: 14,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  packageName: {
    minHeight: 50,
    marginTop: 16,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  packageDetails: {
    marginTop: 14,
    marginLeft: 133,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  numberSytle: {
    marginLeft: 5,
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  direction: {
    flexDirection: ROW,
    alignSelf: FLEX_END,
    marginRight: '25%',
  },
  initiatedColor: {
    marginTop: 22,
    marginLeft: 16,
    color: ORANGE,
    fontFamily: fonts.family.rubik500,
  },
  cancelledColor: {
    marginTop: 22,
    marginLeft: 16,
    color: RED_SHADE,
    fontFamily: fonts.family.rubik500,
  },
  confirmedColor: {
    marginTop: 22,
    marginLeft: 16,
    color: GREEN,
    fontFamily: fonts.family.rubik500,
  },
  initiatedBgColor: {
    backgroundColor: VERY_LIGHT_YELLOW,
    flexDirection: ROW,
    minHeight: 92,
  },
  cancelledBgColor: {
    backgroundColor: RED_SHADE,
    flexDirection: ROW,
    minHeight: 92,
  },
  confirmedBgColor: {
    backgroundColor: VERY_PALE_WHITE,
    flexDirection: ROW,
    minHeight: 92,
  },
});
