import { StyleSheet } from "react-native";
import { ORANGE, WHITE } from "../../styles/colors";
import { CENTER } from "../../styles/constants";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  disabledContainer: {
    opacity: 0.3,
  },
  containerStyle: {
    backgroundColor: ORANGE,
    wdith: '100%',
    marginVertical: 20,
    height: 48,
    justifyContent: CENTER,
    borderRadius: 8,
  },
  textStyle: {
    color: WHITE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight600,
  },
});