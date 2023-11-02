import { StyleSheet, Dimensions } from 'react-native';
import { DARK_BLUE, ORANGE, WHITE } from '../../styles/colors';
import { CENTER, ROW } from '../../styles/constants';
import { fonts } from '../../styles/fonts';
const screenHeight = Dimensions.get('window').height;
const view1Height = screenHeight * 0.2;
const view2Height = screenHeight * 0.4;
const view3Height = screenHeight * 0.28;
const view4Height = screenHeight * 0.1;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  firstContainerStyle: {
    height: view1Height,
    justifyContent: CENTER,
    alignItems: CENTER,
    backgroundColor: WHITE,
  },
  imageBackgroundStyle: {
    width: '100%',
    flex: 1,
    backgroundColor: WHITE,
  },
  secondContainerStyle: {
    height: view2Height,
    justifyContent: CENTER,
    alignItems: CENTER,
    backgroundColor: WHITE,
  },
  mainContainer: {
    alignItems: CENTER,
    justifyContent: CENTER,
    backgroundColor: WHITE,
  },
  IntroStaticScreen1Text: {
    paddingTop: 15,
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
  thirdContainerStyle: {
    height: view3Height,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  line: {
    borderBottomColor: ORANGE,
    borderBottomWidth: 2,
    width: '100%',
  },
  fourthContainerStyle: {
    height: view4Height,
    justifyContent: CENTER,
    alignItems: CENTER,
    flexDirection: ROW,
    backgroundColor: WHITE,
  },
  fourthInnerContainerStyle: {
    flexDirection: ROW,
    alignItems: CENTER,
  },
  fourthContainerText: {
    flexDirection: ROW,
    marginRight: 20,
  },
  buttonStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    width: '90%',
  },
  buttonText: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight700,
  },
});