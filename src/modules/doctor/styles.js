import {StyleSheet} from 'react-native';
import {
  ORANGE_GREY,
  VERY_LIGHT_ORANGE,
  DARK_MAROON,
  ORANGE,
} from '../../styles/colors';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingBottom: 60,
  },
  search: {
    backgroundColor: VERY_LIGHT_ORANGE,
    color: ORANGE_GREY,
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ORANGE,
  },
  theme: {colors: {text: DARK_MAROON}},
  search: {
    marginHorizontal: '5%',
    marginBottom: '8%',
    marginTop: '4%',
  },
});
