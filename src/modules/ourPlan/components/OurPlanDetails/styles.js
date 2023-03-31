import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, DARK_BLUE, FLASH_WHITE, LIGHT_SKY_BLUE, ORANGE, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, LEFT, RIGHT, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';

const {width} = getDimensions();

export const styles = StyleSheet.create({
  textHeader: {
   marginBottom:43,
    marginTop:26,
    marginLeft:17,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
    color:CYAN_BLUE
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  planDetails:{
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
    color:WHITE
  },
  planDetailsCard:{
    marginTop:'5%',
    borderWidth:3,
    borderColor:FLASH_WHITE,
    paddingBottom:22,
  },
  details:{
    marginLeft:16,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color:CYAN_BLUE

  },
  starIcon:{
    flexDirection:ROW,
    width: '94%',
    paddingTop:15,
    paddingLeft:15,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color:CYAN_BLUE
  },
  termsCondition:{
    marginBottom:18,
    marginTop:24,
    marginLeft:26,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
    color:CYAN_BLUE
  },
  buyNow: {
    textAlign: CENTER,
    paddingTop: 15,
    paddingBottom: 15,
    color: WHITE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,

},
touchableButton: {
  backgroundColor: ORANGE,
  marginTop: 40,
  marginLeft: 13,
  marginRight: 14,
  borderRadius: 8
},
headerView: {
  width: '100%',
  height: '5%',
  backgroundColor: ORANGE,
  justifyContent: CENTER,
  paddingHorizontal: 15,
},
PricePerMonth:{
  marginTop:10,
  alignSelf:CENTER,
  fontFamily: fonts.family.rubik500,
  fontSize: fonts.size.fontSize12,
  color:CYAN_BLUE,
},
rupee:{
  fontFamily: fonts.family.rubik600,
  fontSize: fonts.size.fontSize16,
},
image:{
  height:40,
},
carView: {
  backgroundColor: WHITE,
  shadowOpacity: 1,
  shadowColor: BLACK,
  minHeight: 117,
  width: width - 30,
  borderRadius: 6,
},
overallView: {
  flex: 1,
  marginTop: 15,
  marginHorizontal: '4%',
},
});