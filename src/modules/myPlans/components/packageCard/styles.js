import {StyleSheet} from 'react-native';
import {CYAN_BLUE, GREY, ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER, FLEX_END, FLEX_START, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  imageStyle: {
    width: 57,
    height: 57,
    marginTop: 12,
  },
  viewContainer: {
    height: 166,
    borderRadius: 6,
    margin: '5%',
    backgroundColor: WHITE,
    shadowColor: GREY,
    borderWidth: 1,
  },
  buttonStyle: {
    height: '20%',
    backgroundColor: ORANGE,
    borderRadius: 8,
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: CENTER,
  },
  head: {
    backgroundColor: WHITE,
    alignSelf: FLEX_START,
    marginLeft: '5%',
    top: -11,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
    color: CYAN_BLUE,
  },
  expiry: {
    alignSelf: FLEX_END,
    paddingRight: '3%',
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
    color: CYAN_BLUE,
  },

  textStyle: {
    color: WHITE,
    alignSelf: CENTER,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  sideBySide: {
    flexDirection: ROW,
    marginLeft: '5%',
  },
  text1: {
    alignSelf: CENTER,
    margin: '5%',
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  text2: {
    color: GREY,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  textColor: {
    color: CYAN_BLUE,
  },
});
