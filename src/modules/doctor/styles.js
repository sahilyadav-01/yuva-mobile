import {StyleSheet} from 'react-native';
import {DARK_MAROON} from '../../styles/colors';

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
});
