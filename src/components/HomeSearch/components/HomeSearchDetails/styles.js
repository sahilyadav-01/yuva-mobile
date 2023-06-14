import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CYAN_BLUE} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  ScrollViewContainerStyle: {
    paddingBottom: '100%',
  },
  SearchText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
    marginTop:5,
  },
  SearchTextView: {
    marginTop: 38,
    marginHorizontal:14,
  },
  packageContainerStyle: {
    marginVertical: 36,
    marginHorizontal:16,
  },
});
