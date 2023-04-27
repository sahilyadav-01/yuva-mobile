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
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  imageStyle: {
    width: 57,
    height: 57,
    marginTop: 12,
  },
  viewContainer: {
    height: 176,
    borderRadius: 8,
    margin: '5%',
    backgroundColor: WHITE,
    borderColor: GREY,
    elevation: 7,
  },
  headViewContainer:{
    flexDirection:ROW,
    justifyContent:SPACE_BETWEEN,
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
    minHeight: 20,
    borderRadius: 6,
    backgroundColor: BIANCA,
    maxWidth:155,
  },
  head: {
    alignSelf: FLEX_START,
    shadowColor: WHITE,
    color: CYAN_BLUE,
    paddingHorizontal: 5,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    paddingVertical:5,
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
  Available: {
    marginLeft: 11,
    marginVertical: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
  },
  textColor: {
    color: CYAN_BLUE,
  },
  emptyContainer: {height:'100%',alignItems:CENTER,justifyContent:CENTER},
  emptyText: {fontFamily:fonts.family.rubik500,color:CYAN_BLUE}
});
