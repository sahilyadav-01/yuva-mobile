import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  DARK_BLUE,
  ORANGE,
  WHITE,
} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainStyle: {
    marginLeft: 30,
    marginRight: 22,
  },
  headingTextStyle: {
    color: ORANGE,
    marginVertical: 30,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize20,
    lineHeight: 27,
  },
  inputContainer: {
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: SPACE_BETWEEN,
    marginVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderColor: BLACK,
    backgroundColor: WHITE,
    borderRadius: 12,
    color: DARK_BLUE,
    minHeight: 42,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  inputTextStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize17,
    lineHeight: 24,
  },
  iconStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize24,
    paddingRight: 15,
  },
  textInputStyle: {
    marginVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderColor: BLACK,
    backgroundColor: WHITE,
    borderRadius: 12,
    color: CYAN_BLUE,
    minHeight: 42,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  buttonContainer: {
    marginVertical: 24,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignItems: CENTER,
    backgroundColor: ORANGE,
  },
  buttonText: {
    fontFamily: fonts.family.rubik600,
    color: WHITE,
    fontSize: fonts.size.fontSize16,
    lineHeight: 24,
  },
});
