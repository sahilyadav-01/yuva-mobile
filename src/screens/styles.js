import { StyleSheet } from "react-native";
import { CYAN_BLUE, ORANGE } from "../styles/colors";
import { CENTER, ROW } from "../styles/constants";
import { fonts } from "../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 162,
  },
  tabNavigation: {
    flex: 1,
    marginTop: 5,
  },
  screenOptions: {
    tabBarLabelStyle: { fontSize: 16, marginTop: 0 },
    tabBarStyle: { height: 40 },
    swipeEnabled: true,
    lazy: false,
  },
  textColor: {
    color: CYAN_BLUE,
  },
  carouselText: {
    marginLeft: 20,
    color: CYAN_BLUE,
    fontWeight: fonts.weight.fontWeight700,
    fontSize: fonts.size.fontSize14,
  },
  carouselMain: {
    justifyContent: CENTER,
    marginLeft: 12,
    marginRight: 4,
    alignItems: CENTER
  },
  tab: {
    fontSize: fonts.size.fontSize16,
    marginTop: 0
  },
  height: {
    height: 40,
  },
  flatlist: {
    flexDirection: ROW,
    marginTop: 20,
  },
  // carouselCard: {
  //   height: 2,
  //   width: 2,
  //   marginLeft: 2,
  //   borderRadius: 9,
  //   borderColor: 'grey', borderWidth: 2
  // }

});
