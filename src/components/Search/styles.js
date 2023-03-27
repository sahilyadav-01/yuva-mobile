import { StyleSheet } from "react-native";
import { BLACK, ORANGE_GREY, VERY_LIGHT_ORANGE } from "../../styles/colors";
import { ABSOLUTE, CENTER, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";
import { getDimensions } from "../../utils/utils";

const {width} = getDimensions();
export const styles = StyleSheet.create({
  conatiner: {
    position: ABSOLUTE,
    height: 36,
    backgroundColor: VERY_LIGHT_ORANGE,
    borderColor: ORANGE_GREY,
    borderWidth: 0.5,
    borderRadius: 8,
    flexDirection: ROW,
    paddingHorizontal: 12,
    alignItems: CENTER,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: BLACK,
    elevation: 5,
    zIndex: 10,
    width: width - 32,
    marginHorizontal:16
  },
  textInputStyles: {
    flex: 1,
    paddingLeft: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
  }
});