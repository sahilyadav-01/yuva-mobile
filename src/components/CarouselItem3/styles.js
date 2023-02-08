import {StyleSheet} from 'react-native';
import {WHITE, INDIGO_LIGHT, GAINSBORO_LIGHT} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: GAINSBORO_LIGHT,
    paddingTop: 22,
    paddingBottom: 16,
    backgroundColor: WHITE,
  },
  iconContainer: {paddingHorizontal: 65, alignItems: CENTER},
  descriptionContainer: {marginTop: 18, alignItems: CENTER},
  descriptionStyle: {
    fontFamily: fonts.family.rubik400,
    fontWeight: fonts.weight.fontWeight500,
    color: INDIGO_LIGHT,
    fontSize: fonts.size.fontSize12,
    lineHeight: fonts.Height.lineHeight18,
    maxWidth: 115,
    textAlign: CENTER,
  },
});
