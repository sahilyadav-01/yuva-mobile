import {StyleSheet} from 'react-native';
import {
  PLATINUM,
  WHITE,
  BLACK,
  CYAN_BLUE,
  LIGHT_GREYISH_RED,
  LIGHT_MERCURY,
} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  theme: {colors: {text: BLACK}},
  textInputStyle: {
    borderBottomWidth: 1,
    borderColor: PLATINUM,
    backgroundColor: LIGHT_GREYISH_RED,
    marginBottom: 15,
    color: BLACK,
    margin: '3%',
    borderRadius: 6,
  },
  boxStyles: {
    marginLeft: '3%',
    marginRight: '3%',
    borderColor: LIGHT_MERCURY,
    marginBottom: 15,
    color: LIGHT_GREYISH_RED,
  },
  dateAndTime: {
    minHeight: 42,
    marginVertical: '3%',
    marginHorizontal: '3%',
  },

  dateTimeStyles: {
    marginVertical: '2%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  ContentHeading: {
    marginTop: '5%',
    marginBottom: '5%',
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
  Description: {
    marginTop: '4%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    marginLeft: '3%',
  },
  TitleStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '3%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  NameStyle: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '15%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  border: {
    marginLeft: '3%',
    marginRight: '3%',
    shadowColor: WHITE,
    shadowOpacity: '15%',
    shadowColor: BLACK,
    borderRadius: 10,
    backgroundColor: WHITE,
    elevation: 10,
  },
  dateTimePicker: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderRadius: 8,
    height: 42,
  },
  ImageStyle: {
    flexDirection: ROW,
    marginLeft: '3%',
  },
  Image: {
    height: 48,
    width: 48,
    alignSelf: CENTER,
    borderRadius: 24,
  },
});
