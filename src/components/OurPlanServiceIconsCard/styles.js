import { StyleSheet } from 'react-native';
import { BLACK,GREEN, WHITE } from '../../styles/colors';
import { ABSOLUTE, CENTER, COLUMN, FLEX_START, LEFT } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flex:1,
    flexDirection:COLUMN,
    marginHorizontal:8,
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
  },
    headView: {
       marginLeft: 36,
       zIndex:999,
       backgroundColor:WHITE,
      position:ABSOLUTE,
      height:"20%",
      borderRadius:8,
      top:-5.8,
      justifyContent:CENTER
    },
    head: {
      color:GREEN,
      fontSize: fonts.size.fontSize8,
      fontFamily: fonts.family.rubik500,
      textAlign:CENTER,
    },
});