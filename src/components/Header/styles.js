import { StyleSheet } from "react-native";
import { WHITE } from "../../styles/colors";
import { ABSOLUTE, CENTER, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
  headerContainer: {
    height: '18%',
    width: '100%',
    justifyContent: CENTER,
    flexDirection: ROW,
    alignItems: CENTER,
  },
  logo: {
    alignSelf: CENTER,
    justifyContent: CENTER,
    position: ABSOLUTE,
  },
  body: {
    flex:1
  },
  rightIcon: {
    right: 0,
    paddingRight: 10,
  },
  loginText: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight600,
    color: WHITE,
    fontSize: fonts.size.fontSize10,
  },

});