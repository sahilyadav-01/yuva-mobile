import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE} from '../../../../styles/colors';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  description: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.rubik400,
    margin: '10%',
  },
  subtitle: {
    marginTop: '30%',
    color: ORANGE,
    fontSize: fonts.size.fontSize18,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.rubik400,
    marginLeft: '30%',
    marginRight: '20%',
  },
});
