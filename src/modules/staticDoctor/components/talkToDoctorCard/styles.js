import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE, BLACK} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';
const {width} = getDimensions();
export const styles = StyleSheet.create({
  description: {
    marginBottom: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
  },

  imageView: {
    height: '60%',
    justifyContent: CENTER,
    alignItems: CENTER,
    marginTop: 10,
  },
  textView: {
    alignItems: CENTER,
  },
  textStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.fontFamilyRubix,
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
    textAlign: CENTER,
  },
  imageStyle: {
    height: 0.12 * width,
    width: 0.12 * width,
  },
  imageName: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
    fontFamily: fonts.family.fontFamilyRubix,
    alignSelf: CENTER,
  },

  title: {
    marginBottom: '5%',
    marginTop: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  headTitle: {
    marginTop: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  container: {
    backgroundColor: WHITE,
    borderRadius: 12,
    shadowRadius: 12,
    width: 0.27 * width,
    height: 0.27 * width,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 4,
    justifyContent: CENTER,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowColor: BLACK,
    elevation: 5,
  },
});
