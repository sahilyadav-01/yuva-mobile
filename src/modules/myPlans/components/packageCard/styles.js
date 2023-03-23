import {StyleSheet} from 'react-native';
import {
  BIANCA,
  CYAN_BLUE,
  GREY,
  ORANGE,
  WHITE,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  FLEX_END,
  FLEX_START,
  ROW,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  imageStyle: {
    width: 57,
    height: 57,
    marginTop: 12,
  },
  viewContainer: {
    height: 166,
    borderRadius: 8,
    margin: '5%',
    backgroundColor: WHITE,
    borderColor: GREY,
    elevation: 7,
  },
  buttonStyle: {
    height: 48,
    backgroundColor: ORANGE,
    borderRadius: 8,
    justifyContent: CENTER,
    position: ABSOLUTE,
    bottom: 0,
    width: '100%',
  },

  headView: {
    justifyContent: CENTER,
    alignItems: CENTER,
    marginLeft: 19,
    bottom: 9,
    width: '44%',
    height: 20,
    borderRadius: 6,
    backgroundColor: BIANCA,
  },
  head: {
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
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
