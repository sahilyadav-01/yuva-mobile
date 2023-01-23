import { StyleSheet } from "react-native";
import { CYAN_BLUE,FLASH_WHITE, GREY} from "../styles/colors";
import { CENTER, ROW, SPACE_BETWEEN } from "../styles/constants";
import { fonts } from "../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 162,
  },
  tabNavigation: {
    flex: 1,
    marginTop: 21,
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
    marginTop: 0,
  },
  height: {
    height: 40,
    backgroundColor:FLASH_WHITE,
  },
  flatlist: {
    flexDirection: ROW,
    marginTop: 20,
  },

});
