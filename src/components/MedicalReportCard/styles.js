import { StyleSheet } from 'react-native';
import { CYAN_BLUE, GREY, ORANGE, WHITE } from '../../styles/colors';
import { CENTER, COLUMN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  CompleteView: {
    backgroundColor: WHITE,
    marginVertical: 12,
    minHeight: 48,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderWidth: 0.5,
    borderColor: GREY,
    backgroundColor: WHITE,
    borderRadius: 10,
  },
  Top: {
    flexDirection: COLUMN,
    paddingLeft: 30,
  },
  hospitalNameStyle: {
    color: ORANGE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
    lineHeight: 24,
    paddingTop: 13,
  },
  documuntTypeStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    lineHeight: 24,
    paddingVertical: 13
  },
  documentDateStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    lineHeight: 24,
  },
  uploadDateStyle: {
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik400,
    color: CYAN_BLUE,
    paddingVertical: 13,
    lineHeight: 24,

  },
  Button: {
    backgroundColor: ORANGE,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ButtonText: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
    alignSelf: CENTER,
    paddingVertical: 12,
    lineHeight: 24,

  },
});