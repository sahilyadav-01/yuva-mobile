
import { StyleSheet } from 'react-native';
import { DARK_BLUE, WHITE, CYAN_BLUE, GREY, ORANGE, RED_SHADE, GREEN } from '../styles/colors';
import { COLUMN, ROW, SPACE_BETWEEN, CENTER, FLEX_END, ABSOLUTE, FLEX_START } from '../styles/constants';
import { fonts } from '../styles/fonts';

export const styles = StyleSheet.create({


  labTest: {
    flexDirection: COLUMN,
    marginLeft: 18,
    marginRight: 24,
    marginTop: 16,
    flex: 1,
    justifyContent: SPACE_BETWEEN
  },
  BookingCard: {
    marginTop: 28,
    borderRadius: 6,
    height: 137,
    backgroundColor: WHITE,
    marginLeft: 14,
    marginRight: 15

  },
  customId: { 
    flexDirection: ROW,
  },
  custom:{
    marginLeft: 120,
    marginTop:6,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight400,
    fontSize: fonts.size.fontSize8
  },
  status: {
    marginTop: 11,
    marginLeft: 11,
    flexGrow: 1,

  },
  initiatedColor: {
    color: ORANGE,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500
  },
  cancelledColor:{
    color: RED_SHADE,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500
  },
  confirmedColor:{
    color: GREEN,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500
  },
  lab: {

    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN
  },
  labs: {
    color: CYAN_BLUE,
    marginTop: 10,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500,
    fontSize: fonts.size.fontSize14
  },
  date: {
    marginRight: 13,
    marginTop: 10,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500,
    fontSize: fonts.size.fontSize8
  },
  description: {
    color: CYAN_BLUE,
    marginTop: 16,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500
  },
  reschedule: {
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginTop: 50,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500,
    marginLeft: 17.3,
    marginRight: 34,
  },
  cards: {
    backgroundColor: WHITE,
    height: 76,
    marginTop: 19,
    marginLeft: 13,
    marginRight: 14,
    borderRadius: 12
  },
  image: {
    height: 24,
    width: 24

  },
  packageTest: {
    color: DARK_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
    justifyContent: CENTER,
    marginBottom: 10,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  booking: {
    flexDirection: ROW
  },
  download: {
    marginLeft: 160,
    marginTop: 2,
    color: DARK_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  carouselText: {
    marginLeft: 17,
    marginTop: 11,
    color: CYAN_BLUE,
    fontWeight: fonts.weight.fontWeight700,
    fontSize: fonts.size.fontSize16,
    height: 21

  },
  line: {
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    width: 246,
    marginLeft: 35,
    marginTop: 19,
  },
  lineJustify: {
    alignItems: CENTER,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,


  },
  carouselMain: {
    justifyContent: CENTER,
    marginTop: 16,
    marginLeft: 14,
    marginRight: 15,
    alignItems: CENTER,

  },
  flatlist: {
    flexDirection: ROW,
    marginTop: 20,
  },
  imageStyle: {
    width: 49,
    height: 50,
    marginVertical: '3%',
    marginLeft: 19,
  },
  viewContainer: {
    flexGrow: 1,
    borderRadius: 6,
    marginLeft: 13,
    marginRight: 14,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: WHITE,
    marginTop: 28,
  },
  buttonStyle: {
    height: 32,
    backgroundColor: ORANGE,
    borderRadius: 8,
    marginTop: 17,
    margin: 11,
    justifyContent: CENTER,
  },
  head: {
    alignSelf: FLEX_START,
    marginLeft: 9,
    shadowColor: WHITE,
    position: ABSOLUTE,
    top: -11,
    fontSize: 14,
    color: CYAN_BLUE,
    paddingLeft: 6,
    paddingRight: 6,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  textStyle: {
    color: WHITE,
    alignSelf: CENTER,
  },
  sideBySide: {
    flexDirection: ROW,
    marginTop: 15
  },
  text1: {
    alignSelf: CENTER,
    margin: '4%',
  },
  textColor: {
    color: CYAN_BLUE,
  },
  Available: {
    marginLeft: 11,
    marginTop: 15,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  expiry: {
    alignSelf: FLEX_END,
    marginTop: 18,
    marginRight: 11,
    marginTop: 11,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize8,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },

})

