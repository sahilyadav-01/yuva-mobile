import { StyleSheet } from "react-native";
import { CENTER, SPACE_BETWEEN,FLEX, ROW } from "../styles/constants";
import { CYAN_BLUE,FLASH_WHITE, GREY} from "../styles/colors";
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
    marginTop: 0,
  
  },
  barColor:{
    backgroundColor:FLASH_WHITE,
  },
  screenOptions: {
    tabBarLabelStyle: { fontSize: 16, marginTop: 0 },
    tabBarStyle: { height: 40 },
    swipeEnabled: true,
    lazy: false,
  },
  textColor: {
    color:CYAN_BLUE,
    fontWeight: fonts.weight.fontWeight600,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  carouselText: {
    marginLeft: 17,
   marginTop:11,
    color: CYAN_BLUE,
    fontWeight: fonts.weight.fontWeight700,
    fontSize: fonts.size.fontSize16,
    height:21
    
  },
  line:{
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    width: 246,
    marginLeft:35,
    marginTop:19,
  },
  lineJustify:{
    alignItems:CENTER,
    flexDirection: ROW,
     justifyContent: SPACE_BETWEEN,

    
  },
  carouselMain: {
    justifyContent:CENTER,
    marginTop:16,
    marginLeft: 14,
    marginRight: 15,
    alignItems: CENTER,

  },
  tab: {
    fontSize: fonts.size.fontSize16,
    marginTop: 100,
  },
  verticalLine:{
    borderRightWidth:2,
    marginTop:10,
    height:40,
    borderRightColor:CYAN_BLUE
  },
  height: {
    height: 40,
    backgroundColor:FLASH_WHITE,
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
