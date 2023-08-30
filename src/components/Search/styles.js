import {Platform, StyleSheet} from 'react-native';
import {CYAN_BLUE, FLASH_WHITE} from '../../styles/colors';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 16 : undefined,
    backgroundColor: FLASH_WHITE,
    paddingHorizontal: 12,
  },
  textInputStyles: {
    width: '100%',
    paddingLeft: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
  },
});
