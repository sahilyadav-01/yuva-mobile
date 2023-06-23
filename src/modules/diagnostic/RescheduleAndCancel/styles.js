import { StyleSheet } from 'react-native';
import { BLACK, BOX_SHADOW, CYAN_BLUE, DARK_BLUE, FLASH_WHITE, GREEN, LIGHT_GREY, ORANGE, RED, RED_SHADE, VERY_LIGHT_GREY, VERY_LIGHT_YELLOW, VERY_PALE_WHITE, V_LIGHT_GREY, WHITE } from '../../../styles/colors';
import { CENTER, FLEX_END, ROW, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  buttonView: {
    flexDirection: ROW,
    marginHorizontal: '4%',
    justifyContent: SPACE_BETWEEN,
    alignItems:CENTER,
  },
  updatedButtonView:{
    marginHorizontal: '4%',
    justifyContent: SPACE_BETWEEN,
    alignItems:CENTER,
  },
  buttonTextStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    marginHorizontal: '4%',
  },
  button:{
    width: '48%',
    justifyContent: SPACE_BETWEEN,
    height: 48,
    marginVertical: 64,
    borderRadius: 8,
    justifyContent: CENTER,
    alignItems: CENTER,
    flexDirection: ROW,
  },
  details: {
    minHeight:50,
    flexDirection: ROW,
    backgroundColor: LIGHT_GREY,
    justifyContent:SPACE_BETWEEN,
    borderWidth:1,
    borderColor:V_LIGHT_GREY,
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
    borderColor:FLASH_WHITE,
    marginTop: 14,
    marginHorizontal:16,
    shadowColor: WHITE,
    shadowOpacity: 0.5,
    borderRadius: 12,
    backgroundColor: WHITE,
    dropShadow: BOX_SHADOW,
    elevation:5,
    borderWidth:1,
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
    borderWidth:1,
    borderColor:V_LIGHT_GREY,
  },
  Test: {
    paddingVertical: 18,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  TestList: {
    minHeight:50,
    backgroundColor: LIGHT_GREY,
    borderWidth:0.7,
    borderColor:V_LIGHT_GREY,
  },
  testItems: {
    paddingVertical: 18,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  PackageHeader: {
    backgroundColor: V_LIGHT_GREY,
    minHeight: 50,
    borderWidth:1,
    borderColor:V_LIGHT_GREY,
  },
  package: {
    paddingVertical: 18,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  packageName: {
    paddingVertical: 18,
    marginLeft: 16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  packageDetails: {
    paddingVertical:20,
    marginRight:"5%",
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
    color: WHITE,
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
    justifyContent:SPACE_BETWEEN,
  },
  cancelledBgColor: {
    backgroundColor: RED_SHADE,
    flexDirection: ROW,
    minHeight: 92,
    justifyContent:SPACE_BETWEEN,
  },
  confirmedBgColor: {
    backgroundColor: VERY_PALE_WHITE,
    flexDirection: ROW,
    minHeight: 92,
    justifyContent:SPACE_BETWEEN,
  },
  bookingText:{
  flex:1,
  maxWidth:"100%",
  }
});
