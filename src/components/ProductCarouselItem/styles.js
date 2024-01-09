import {StyleSheet} from 'react-native';
import {
  WHITE,
  INDIGO_LIGHT,
  GAINSBORO_LIGHT,
  ORANGE,
} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GAINSBORO_LIGHT,
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: WHITE,
  },
  iconContainer: {marginLeft: 20, width: 36, height: 36},
  descriptionContainer: {marginTop: 20, marginLeft: 14},
  textContainer: {marginLeft: 14, marginVertical:8},
  addButtonViewContainer: {paddingLeft: 14, paddingRight: 90, marginTop: 16, marginBottom: 6},
  addButtonContainer: {
    borderRadius: 12,
    backgroundColor: ORANGE,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 5,
    paddingHorizontal: 32,
  },
  descriptionStyle: {
    fontFamily: fonts.family.rubik700,
    color: INDIGO_LIGHT,
    fontSize: fonts.size.fontSize12,
    lineHeight: 18,
    maxWidth: 144,
  },
  buttonText: {
    fontFamily: fonts.family.rubik700,
    color: WHITE,
    fontSize: fonts.size.fontSize14,
    lineHeight: 21,
  },
  imageStyle: {width: 46, height: 46}
});