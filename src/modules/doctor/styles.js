import {StyleSheet} from 'react-native';
import {DARK_MAROON, PALE_ORANGE} from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
  theme: {colors: {text: DARK_MAROON}},
  search: {
    marginHorizontal: '5%',
    marginBottom: 24,
    marginTop: '4%',
  },
  searchStyle: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: PALE_ORANGE
  }
});
