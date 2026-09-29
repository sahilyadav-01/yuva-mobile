import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  KASHMIR_BLUE,
  LIGHT_ASH,
  LIGHT_WHITE,
  WHITE,
} from '../../styles/colors';
import {ABSOLUTE, CENTER, FLEX_START, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerView: {
    height: '80%',
    width: '60%',
    backgroundColor: LIGHT_WHITE,
    borderRadius: 24,
    alignItems: CENTER,
    justifyContent: CENTER,
    shadowColor: BLACK,
    elevation: 10,
    shadowOpacity: 0.3,
  },
  containerView1: {
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  textStyle: {
    color: KASHMIR_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize20,
    width: 136,
    marginTop: 24,
    marginLeft: 15,
  },
  notchStyle: {
    height: 4,
    width: 36,
    backgroundColor: LIGHT_ASH,
    borderRadius: 4,
    shadowColor: BLACK,
    elevation: 2,
    shadowOpacity: 0.2,
  },
  bottomNotchStyle: {
    height: 4,
    width: 36,
    backgroundColor: LIGHT_ASH,
    borderRadius: 4,
    shadowColor: BLACK,
    elevation: 2,
    shadowOpacity: 0.2,
    bottom: 10,
    position: ABSOLUTE,
  },
  dotStyle: {
    height: 4,
    width: 4,
    backgroundColor: LIGHT_ASH,
    borderRadius: 4,
    marginLeft: 6,
    shadowColor: BLACK,
    elevation: 2,
    shadowOpacity: 0.2,
  },
  notchDotStyle: {
    position: ABSOLUTE,
    top: 10,
    flexDirection: ROW,
  },
});
