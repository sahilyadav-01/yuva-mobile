import { StyleSheet } from "react-native";
import { WHITE } from "../../styles/colors";
import { CENTER, FLEX_START, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";
import { getDimensions } from "../../utils/utils";

const {height} = getDimensions();

export const styles = StyleSheet.create({
  headerContainer: {
    height: 0.12*height,
    width: '100%',
    justifyContent: CENTER,
  },
  body: {
    flex: 1,
  },
  rightIcon: {
    right: 0,
    paddingRight: 10,
  },
  loginText: {
    fontFamily: fonts.family.rubik400,
    fontWeight: fonts.weight.fontWeight600,
    color: WHITE,
    fontSize: fonts.size.fontSize10,
  },
  sectionTop: {
    flexDirection: ROW,
    alignItems: CENTER,
    flex:1,
  },
  sectionBottom: {
    flexDirection: ROW,
    alignSelf: FLEX_START,
    marginHorizontal: 12,
    bottom: 12,
  },
  titleText: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontSize: fonts.size.fontSize16,
    color: WHITE,
    paddingHorizontal: 12,
  }
});
