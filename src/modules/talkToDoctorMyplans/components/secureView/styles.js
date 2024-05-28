import { StyleSheet } from "react-native";
import { GREY } from "../../../../styles/colors";
import { CENTER, ROW } from "../../../../styles/constants";
import { fonts } from "../../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: CENTER,
    marginVertical: 10,
  },
  text: {
    color: GREY,
    paddingHorizontal: 10,
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.montserrat400,
  },
});