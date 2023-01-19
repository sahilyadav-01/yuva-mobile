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
  iconContainer: {marginLeft: 40, width: 52.7, height: 52,marginRight:40},
  descriptionContainer: {marginTop: 20, marginLeft: 40,marginRight:40},
  textContainer: {marginLeft: 55, marginVertical: 8},
 
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
    lineHeight: 20,
  },
  imageStyle: {marginTop:10,marginLeft: 30,width: 52.7, height: 52},
});