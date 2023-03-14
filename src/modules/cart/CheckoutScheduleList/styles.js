import {StyleSheet} from 'react-native';
import {ORANGE, WHITE} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  bodyContainer: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 24,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
  },
  touchableButton: {
    backgroundColor: ORANGE,
    marginTop: 20,
    marginLeft: 13,
    marginRight: 14,
    borderRadius: 8,
    marginBottom: 30,
  },
  textBook: {
    textAlign: CENTER,
    paddingTop: 15,
    paddingBottom: 15,
    color: WHITE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
  },
});
