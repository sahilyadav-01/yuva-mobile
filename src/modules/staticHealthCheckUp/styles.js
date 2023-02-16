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
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize20,
    fontFamily: fonts.family.rubik500,
  },
  subtitleContainer: {
    backgroundColor: CYAN_BLUE,
    height: 67,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  headTitle: {
    marginBottom: '5%',
    marginTop: '5%',
    alignSelf: CENTER,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize20,
    fontFamily: fonts.family.rubik600,
  },
  subtitleText: {
    color: WHITE,
    padding: 5,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.rubik400,
  },
});
