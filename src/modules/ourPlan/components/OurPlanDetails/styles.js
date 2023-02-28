import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, LIGHT_SKY_BLUE, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
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
 
  
});