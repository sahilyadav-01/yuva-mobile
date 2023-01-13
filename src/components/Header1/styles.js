import { StyleSheet } from "react-native";
import { ABSOLUTE, CENTER, ROW } from "../../styles/constants";

export const styles = StyleSheet.create({
  headerContainer: {
    height: '23%',
    justifyContent: CENTER,
    flexDirection: ROW,
    alignItems: CENTER
  },
  logo: {
    alignSelf: CENTER,
    position: ABSOLUTE,
  }

});