import { StyleSheet } from "react-native";
import { CYAN_BLUE, GREY } from "../styles/colors";
import { CENTER, FLEX, ROW, SPACE_BETWEEN } from "../styles/constants";
import { fonts } from "../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 162,
  },
  homeScreenContainer: {
    flex: 1,
  },
  ScrollViewContainerStyle: {
    paddingBottom: 400,
  },
  serviceContainerWrapperStyle: {
    display: FLEX,
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: CENTER,
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
  bannerContainer: {
    marginTop: 13,
    flexDirection: ROW,
    justifyContent: CENTER,
    marginHorizontal: 13,
  },
  bannerImage: {
    width: "100%",
  },
  PopularHealthCheckups: {
    alignItems: CENTER,
    marginTop: 15,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginHorizontal: 16,
  },
  LandingPageText1: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.fontFamilyRubix,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight700,
  },
  LandingPageText2: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.fontFamilyRubix,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
  },
  line: {
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    width: 118,
  }

});
