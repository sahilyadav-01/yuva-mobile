import { StyleSheet } from "react-native";
import { CYAN_BLUE, ORANGE } from "../styles/colors";
import { fonts } from "../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 162,
  },
  tabNavigation:{
flex:1,
marginTop:5,
  },
  screenOptions:{
    tabBarLabelStyle: {fontSize: 16, marginTop:0},
    tabBarStyle: { height: 40},
    swipeEnabled: true,
    lazy: false, 
  },
  textColor:{
    color:CYAN_BLUE,
    },
carouselText:{
  marginRight:310,
  marginTop:35,
  marginBottom:-20,
  color:CYAN_BLUE,
  fontWeight: fonts.weight.fontWeight700,
  fontSize: fonts.size.fontSize14,
}
});
