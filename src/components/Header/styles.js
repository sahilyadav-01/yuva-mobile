import { StyleSheet } from "react-native";
import { BLACK, CYAN_BLUE, WHITE } from "../../styles/colors";
import { CENTER, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";
import { getDimensions } from "../../utils/utils";

const {height} = getDimensions();

export const styles = StyleSheet.create({
  headerContainer: {
    maxHeight: 0.12*height,
    width: '100%',
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: BLACK,
    elevation: 10,
  },
  topSection: {
    flexDirection: ROW,
    justifyContent: CENTER,
    paddingVertical: 4,
    paddingTop: 16,
  },
  pinView: {
    left: 0,
    flex: 1,
    flexDirection: ROW,
  },
  rightView: {
    right: 0,
    flexDirection: ROW,
  },
  rightIcon: {
    paddingHorizontal: 4,
  },
  loginText: {
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize10,
  },
  boxStyle: {
    paddingTop: 0,
    borderWidth: 0,
    paddingHorizontal: 8,
    minWidth: 75,
  },
  inputStyles: {
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.rubik400,
    color: CYAN_BLUE,
    textAlignVertical: CENTER,
  },
  dropdownStyles: {
    marginTop: 0,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: WHITE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: BLACK,
    elevation: 3,
  },
  // sectionBottom: {
  //   flexDirection: ROW,
  //   alignSelf: FLEX_START,
  //   marginHorizontal: 12,
  //   bottom: 12,
  // },
  // titleText: {
  //   fontFamily: fonts.family.fontFamilyRubix,
  //   fontSize: fonts.size.fontSize16,
  //   color: WHITE,
  //   paddingHorizontal: 12,
  // }
});
