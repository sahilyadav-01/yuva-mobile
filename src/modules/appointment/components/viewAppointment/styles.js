import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  DARK_BLUE,
  LIGHT_MERCURY,
  ORANGE,
  PLATINUM,
  WHITE,
} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  description: {
    marginTop: '5%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  ScrollViewContainerStyle: {
    paddingBottom: '100%',
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
    marginLeft: '4%',
    marginRight: '4%',
    shadowColor: WHITE,
    shadowOpacity: '15%',
    borderRadius: 10,
    backgroundColor: WHITE,
    height: 118,
  },
  viewCont: {
    flexDirection: ROW,
    marginBottom: '8%',
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: PLATINUM,
    height: 92,
    width: 400,
  },
  direction: {
    flexDirection: ROW,
    alignSelf: CENTER,
    marginTop: '10%',

    marginRight: '15%',
  },
  waitStyle: {
    color: ORANGE,
    marginRight: '1%',
    marginLeft: '5%',
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
  },
  StatusStyle: {
    color: ORANGE,
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
    marginBottom: '5%',
    marginTop: '5%',
  },
  ContentStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '15%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  timeSlot: {
    backgroundColor: DARK_BLUE,
    marginTop: 22,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    minHeight: 48,
    marginBottom: 22,
    width: 141,
    paddingLeft: 30,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
});
