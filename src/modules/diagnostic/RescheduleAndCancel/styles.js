import { StyleSheet } from 'react-native';
import { BOX_SHADOW, CYAN_BLUE, DARK_BLUE, GREEN, LIGHT_GREY, ORANGE, VERY_LIGHT_GREY, VERY_PALE_WHITE, V_LIGHT_GREY, WHITE } from '../../../styles/colors';
import { ROW } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  button: {
    marginTop: 47,
    marginLeft: 13,
    marginRight: 14,
  },
  details: {
    flexDirection: ROW,
    backgroundColor:LIGHT_GREY,
  },
  BookingStatus: {
    marginTop: 22,
    marginLeft: 16,
    color:GREEN
  },
  Status: {
    backgroundColor: VERY_PALE_WHITE,
    flexDirection:ROW,
    minHeight:92,
  },
  timeSlot:{
    backgroundColor:CYAN_BLUE,
    marginLeft:210,
    marginTop:22,
    borderBottomLeftRadius:24,
    borderTopLeftRadius:24,
    minHeight:48,
    marginBottom:22,
    width:141,
    color:WHITE,
    paddingLeft:30,
    paddingTop:12,
    fontFamily:fonts.family.rubik400,
    fontSize:fonts.size.fontSize10
  },
  // dateTime:{
  //   backgroundColor:WHITE
  // },
  selectDate: {
    marginTop: 21,
    marginLeft: 16,
    marginRight:140,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
},
border: {
  borderWidth: 0.2,
  marginTop: 14,
  marginLeft: 16,
  marginRight: 16,
  shadowColor: WHITE,
  shadowOpacity: "5%",
  borderRadius: 6,
  backgroundColor:VERY_LIGHT_GREY,
  dropShadow:BOX_SHADOW

},
adressName: {
  marginTop:11,
  marginLeft: 19,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik500,
  fontSize: fonts.size.fontSize16,

},
address:{
  marginTop:11,
  marginLeft: 19,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik400,
  fontSize: fonts.size.fontSize12,

},
adressPhn: {
  marginTop: 11,
  marginLeft: 19,
  marginBottom:10,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik400,
  fontSize: fonts.size.fontSize14,
},
TestHeader:{
  marginTop:37,
  backgroundColor:V_LIGHT_GREY,
  minHeight:50,
},
Test:{
  marginTop:14,
  marginLeft:16,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik600,
  fontSize: fonts.size.fontSize14,
},
TestList:{
  backgroundColor:LIGHT_GREY,
},
testItems:{
  minHeight:50,
  marginTop:16,
  marginLeft:16,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik400,
  fontSize: fonts.size.fontSize14,
},
PackageHeader:{
  backgroundColor:V_LIGHT_GREY,
  minHeight:50,
},
package:{
  marginTop:14,
  marginLeft:16,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik600,
  fontSize: fonts.size.fontSize14,
},
packageName:{
  minHeight:50,
  marginTop:16,
  marginLeft:16,
  color: CYAN_BLUE,
  fontFamily: fonts.family.rubik400,
  fontSize: fonts.size.fontSize14,
},
packageDetails:{
marginTop:14,
marginLeft:133,
color: CYAN_BLUE,
fontFamily: fonts.family.rubik400,
fontSize: fonts.size.fontSize10,
},
numberSytle: {
  color: WHITE,
  fontFamily: fonts.family.rubik400,
  fontSize: fonts.size.fontSize10,
},
direction: {
  flexDirection: ROW,
},
});
