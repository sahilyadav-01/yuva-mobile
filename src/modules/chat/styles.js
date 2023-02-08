import {StyleSheet} from 'react-native';
import {ORANGE, WHITE} from '../../styles/colors';
import {CENTER, FLEX_END} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight600,
  },
  buttonView: {
    flex: 1,
    justifyContent: FLEX_END,
  },
});
