import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';
import {fonts} from '../../../../styles/fonts';
import {CENTER} from '../../../../styles/constants';
export const styles = StyleSheet.create({
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.rubik400,
    margin: '10%',
    alignSelf: CENTER,
  },
  subtitle: {
    marginTop: '10%',
    color: ORANGE,
    fontSize: fonts.size.fontSize18,
    fontFamily: fonts.family.rubik600,
    alignSelf: CENTER,
  },
  ImageStyle: {
    alignSelf: CENTER,
    marginTop: '10%',
  },
});
