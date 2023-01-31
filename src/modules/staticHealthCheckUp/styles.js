import {StyleSheet} from 'react-native';
import {ORANGE, CYAN_BLUE, WHITE, RED_SHADE, BLACK} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
export const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  ScrollViewContainerStyle: {
    paddingBottom: '40%',
  },
  title: {
    marginBottom: '5%',
    color: ORANGE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  subtitleContainer: {
    backgroundColor: CYAN_BLUE,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTitle: {
    marginBottom: '5%',
    marginTop: '5%',
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight600,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  subtitleText: {
    color: WHITE,
    padding: 5,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
  },
});
