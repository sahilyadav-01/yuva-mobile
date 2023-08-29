import { StyleSheet } from "react-native";
import { BLACK, CYAN_BLUE, FLASH_WHITE, ORANGE_GREY, VERY_LIGHT_ORANGE } from "../../styles/colors";
import { ABSOLUTE, CENTER, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: FLASH_WHITE,
    paddingHorizontal: 12,
  },
  textInputStyles: {
    width: '100%',
    paddingLeft: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    color:CYAN_BLUE,
  }
});