import { StyleSheet } from 'react-native';
import { BLACK,FLASH_WHITE,RED_SHADE, WHITE } from '../../styles/colors';
import { CENTER, COLUMN, FLEX_START, LEFT } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flex:1,
    flexDirection:COLUMN,
    marginHorizontal:2,
    marginVertical:12,
  },
  subTopContainerStyle: {
    alignItems:FLEX_START,
    justifyContent:FLEX_START,
    flexDirection:COLUMN,

  },
  subBottomContainerStyle: {
    paddingTop: 10,
    alignItems:FLEX_START,
    justifyContent:FLEX_START,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    textAlign:LEFT,
    paddingLeft:5,
    color: BLACK,
    backgroundColor:'blue',

  },
    headView: {
      justifyContent:FLEX_START,
      alignSelf:FLEX_START,
      marginLeft: 32,
      top:10,
      borderRadius: 6,
      maxWidth:155,
      backgroundColor:WHITE,
      zIndex:999
    },
    head: {
      shadowColor: WHITE,
      color:RED_SHADE,
      fontSize: fonts.size.fontSize8,
      fontFamily: fonts.family.rubik500,
      position:'absolute',
      right:0,
       maxWidth:40,
       height:20,
       zIndex:999,
       lineHeight:10,
       top:-5.5,
       backgroundColor:FLASH_WHITE,
      textAlignVertical:"center"
    },
});