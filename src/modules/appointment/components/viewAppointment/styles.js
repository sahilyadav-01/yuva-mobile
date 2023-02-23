import { StyleSheet } from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  DARK_BLUE,
  GREEN,
  LIGHT_MERCURY,
  ORANGE,
  PLATINUM,
  RED,
  RED_SHADE,
  WHITE,
} from '../../../../styles/colors';
import { CENTER, FLEX_END, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  description: {
    marginTop: '5%',
    marginHorizontal: '4%',
  },
  description1: {
    marginVertical: '5%',
    marginHorizontal: '4%',
  },
  ScrollViewContainerStyle: {
    paddingBottom: '90%',
  },
  Header: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik600,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderColor: PLATINUM,
    backgroundColor: WHITE,
    marginBottom: 15,
    color: BLACK,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik400,
    marginTop: '5%',
    borderRadius: 6,
  },
  border: {
    marginHorizontal: '4%',
    shadowColor: WHITE,
    shadowOpacity: '15%',
    borderRadius: 10,
    backgroundColor: WHITE,
    height: 118,
  },
  familyView: {
    height: 90,
    marginHorizontal: '4%',
    marginBottom: '5%',
    shadowColor: WHITE,
    shadowOpacity: '15%',
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  viewCont: {
    flexDirection: ROW,
    marginBottom: '8%',
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: PLATINUM,
    height: 92,
    width: 400,
    justifyContent: SPACE_BETWEEN,
  },
  direction: {
    flexDirection: ROW,
    alignSelf: CENTER,
    marginTop: '10%',
    marginRight: '15%',
  },
  waitStyle: {
    color: ORANGE,
    marginTop: '5%',
    marginRight: '1%',
    marginLeft: '5%',
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
  },
  StatusStyle: {
    color: ORANGE,
    marginTop: '5%',
    marginRight: '1%',
    marginLeft: '5%',
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize18,
  },
  numberSytle: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  NameStyle: {
    marginTop: '5%',
    marginLeft: '15%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  ImageStyle: {
    flexDirection: ROW,
    marginLeft: '5%',
  },
  Image: {
    height: 48,
    width: 48,
    alignSelf: CENTER,
  },
  HospName: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    marginLeft: '5%',
    marginVertical: '5%',
  },
  FamilyName: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    marginLeft: '5%',
    marginVertical: '5%',
  },
  RelationStyle: {
    color: ORANGE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
    marginLeft: '5%',
    marginBottom: '5%',
  },
  ContentStyle: {
    marginVertical: '5%',
    marginLeft: '15%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  timeSlot: {
    backgroundColor: DARK_BLUE,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    minHeight: 48,
    marginBottom: 22,
    width: 141,
    paddinLeft: 30,
    marginLeft: 160,
    justifyContent:SPACE_BETWEEN,
    marginTop: 22,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  StatusBox: {
    flexDirection: ROW,
    alignItems: FLEX_END,

  },
  buttonStyle: {
    flexDirection: ROW,
    paddingHorizontal: 12,
    justifyContent: SPACE_BETWEEN,
  },
  buttonStyleDetails: {
    width: 170,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignItems: CENTER,
    borderWidth: 1,
    flexDirection: ROW,
  },
  buttonTextStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize16,
    marginHorizontal: 10,
  },
  statusBoxText: {
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize18,
    color: RED_SHADE,
    marginTop:13,
    marginLeft:17
  },

  statusBoxInitiated: {
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize18,
    marginTop:13,
    marginLeft:17
  },
  AppointmentId: {
    flexDirection: ROW
  },
  AppointmentIdText: {
    marginTop: 17,
    marginLeft: 36,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color:DARK_BLUE
  },
  customId: {
    marginTop: 5,
    marginLeft: 36,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color:CYAN_BLUE,
  },
  appoitmentid: {
    marginTop: 8,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    marginLeft:17,
    color:DARK_BLUE
  },
  appoitmentidNumber: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    marginTop: 5,
    marginLeft:17,
    color:CYAN_BLUE,

  }


});
