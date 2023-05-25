import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, WHITE} from '../../styles/colors';
import {CENTER, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  dateTimePicker: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderRadius: 8,
    height: 45,
  },
  theme: {colors: {text: BLACK}},
  dateAndTime: {
    marginTop: 5,
    marginLeft: '3%',
    marginRight: '3%',
    minHeight: 42,
    marginBottom: 5,
  },
  Date: {
    marginTop: '5%',
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  Time: {
    marginTop: '5%',
    marginBottom: '10%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  border: {
    marginLeft: '3%',
    marginRight: '3%',
    shadowColor: WHITE,
    shadowOpacity: 0.25,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  TitleStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '3%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  ScrollViewContainerStyle: {
    paddingBottom: '80%',
  },

  Description: {
    marginTop: '10%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: '3%',
  },
  ContentStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '15%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  NameStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '15%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  ContentHeading: {
    marginTop: '5%',
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: '3%',
  },
  Image: {
    height: 48,
    width: 48,
    alignSelf: CENTER,
  },
  ImageStyle: {
    flexDirection: ROW,
    marginLeft: '5%',
  },
  buttonTextStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize16,
    marginHorizontal: 10,
  },
});
