import {StyleSheet} from 'react-native';
import {DARK_BLUE, ORANGE, WHITE} from '../../styles/colors';
import {CENTER, ABSOLUTE, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
  },
  imageBackground: {
    position: ABSOLUTE,
  },
  mainContainer: {
    flex: 1,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  IntroStaticScreen1Text: {
    marginTop: 10,
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
  },
  IntroStaticScreen1ColorText: {
    color: ORANGE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight400,
  },
  bottomStyle: {
    height: '10%',
    flexDirection: ROW,
    justifyContent: CENTER,
    alignItems: CENTER,
    marginHorizontal: 10,
    backgroundColor: WHITE,
  },
  line: {
    borderBottomColor: ORANGE,
    borderBottomWidth: 2,
    width: '100%',
  },
  bottomContaierText: {
    marginRight: 20,
  },
  buttonStyle: {
    alignItems: CENTER,
    justifyContent: CENTER,
    height: '60%',
    borderRadius: 4,
    backgroundColor: ORANGE,
    width: '94%',
  },
  buttonText: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight700,
  },
});
