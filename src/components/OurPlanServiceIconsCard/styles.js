import { StyleSheet } from 'react-native';
import { BLACK,RED_SHADE, WHITE } from '../../styles/colors';
import { CENTER, COLUMN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flex:1,
    flexDirection:COLUMN,
    marginHorizontal: 4,
    marginVertical:16
  },
  subTopContainerStyle: {
    alignItems: CENTER,
    flexDirection:'column',
    paddingTop:5,
  },
  subBottomContainerStyle: {
    paddingTop: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    textAlign: CENTER,
    color: BLACK,
  },
  topText: {
    fontSize: fonts.size.fontSize8,
    fontFamily: fonts.family.rubik500,
    color: RED_SHADE,
    alignSelf:'flex-end',
    marginLeft:40,
    width:'58%',
    paddingLeft:10,
    backgroundColor:WHITE,
  },
});