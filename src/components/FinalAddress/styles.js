import {StyleSheet} from 'react-native';
import {CYAN_BLUE, WHITE} from '../../styles/colors';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  containView: {
    marginHorizontal: 16,
    marginTop: 48,
    backgroundColor: WHITE,
    borderRadius: 12,
    height: 123,
  },
  nameStyle: {
    color: CYAN_BLUE,
    marginLeft: 19,
    marginTop: 11,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
  },
  addressStyle: {
    color: CYAN_BLUE,
    marginLeft: 19,
    marginTop: 11,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  numberStyle: {
    color: CYAN_BLUE,
    marginLeft: 19,
    marginTop: 11,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
});
