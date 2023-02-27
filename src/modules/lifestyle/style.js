import {StyleSheet} from 'react-native';
import { FLASH_WHITE, WHITE } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {flex:1,paddingHorizontal: 14,backgroundColor:FLASH_WHITE},
    boxStyles: {marginTop:36,borderRadius: 12, backgroundColor:WHITE},
    dropdownInputStyles: {fontFamily:fonts.family.rubik500, fontSize: 14, lineHeight: 21, color:'#52608E'},
    dropdownStyles: {backgroundColor:WHITE}
  });
};
