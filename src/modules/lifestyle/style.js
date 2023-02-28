import {StyleSheet} from 'react-native';
import { FLASH_WHITE, ORANGE, WHITE } from '../../styles/colors';
import { CENTER } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    scrollContainer: {flex: 1},
    container: {flex:1,paddingHorizontal: 14,backgroundColor:FLASH_WHITE},
    boxStyles: {marginTop:36,borderRadius: 12, backgroundColor:WHITE},
    dropdownInputStyles: {fontFamily:fonts.family.rubik500, fontSize: 14, lineHeight: 21, color:'#52608E'},
    dropdownStyles: {backgroundColor:WHITE},
    buttonContainer: {
      paddingVertical: 16,
      backgroundColor: ORANGE,
      borderRadius: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
      marginTop: 28
    },
    buttonText: {
      fontFamily: fonts.family.rubik500,
      lineHeight: 24,
      fontSize: 16,
      color: WHITE,
    },
    testsContainer: {marginTop: 36},
    packagesContainer: {marginTop: 48}
  });
};
