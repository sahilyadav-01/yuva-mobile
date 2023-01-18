import {StyleSheet} from 'react-native';
import {
  WHITE,
  INDIGO_LIGHT,
  GAINSBORO_LIGHT,
  ECHO_BLUE,
} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: GAINSBORO_LIGHT,
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: WHITE,
  },
  iconContainer: {marginLeft: 20, width: 36, height: 36},
  descriptionContainer: {marginTop: 14, marginLeft: 14},
  textContainer: {marginLeft: 14, marginVertical: 8},
  addButtonViewContainer: {paddingLeft: 14, paddingRight: 90},
  addButtonContainer: {
    borderRadius: 12,
    backgroundColor: INDIGO_LIGHT,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 5,
    paddingHorizontal: 32,
  },
  descriptionStyle: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500,
    color: INDIGO_LIGHT,
    fontSize: fonts.size.fontSize12,
    lineHeight: 18,
  },
  textStyle: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight300,
    color: ECHO_BLUE,
    fontSize: fonts.size.fontSize10,
    lineHeight: 15,
  },
  buttonText: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500,
    color: WHITE,
    fontSize: fonts.size.fontSize14,
    lineHeight: 21,
  },
  imageStyle: {width: 36, height: 36},
});
