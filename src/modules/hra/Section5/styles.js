import {StyleSheet} from 'react-native';
import {WHITE, DARK_BLUE, MARINER, RED, BLACK} from '../../../styles/colors';
import {CENTER, FLEX} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  progressBarContainer: {
    width: '100%',
  },
  topContainer: {
    marginHorizontal: 13,
    marginVertical: 20,
    flex: 1,
  },
  topContainerTextStyle: {
    fontfamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize18,
    color: DARK_BLUE,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    flex: 1,
  },
  questionViewContainer: {
    marginTop: 20,
  },
  questionViewContainerText: {
    fontSize: fonts.size.fontSize16,
    fontfamily: fonts.family.monsterrant500,
    marginBottom: 9,
    color: DARK_BLUE,
  },
  boxStylesContainer: {
    backgroundColor: WHITE,
    borderRadius: 8,
    height: 50,
    borderWidth: 1,
    borderColor: DARK_BLUE,
  },
  text: {
    color: DARK_BLUE,
    fontSize: fonts.size.fontSize16,
    fontfamily: fonts.family.montserrat400,
    marginBottom: 9,
  },
  textError: {
    color: RED,
    fontSize: fonts.size.fontSize16,
    fontfamily: fonts.family.montserrat400,
    marginBottom: 8,
  },
  questionViewContainerTextInput: {
    height: 48,
    borderRadius: 8,
    paddingLeft: 5,
    marginTop: 8,
    fontSize: fonts.size.fontSize12,
    fontfamily: fonts.family.monsterrant500,
    backgroundColor: WHITE,
    borderWidth: 1,
    color: BLACK,
    justifyContent: CENTER,
  },
  touchableOpacityViewContainer: {
    marginTop: 30,
  },
  touchableOpacityStyle: {
    display: FLEX,
    alignItems: CENTER,
    justifyContent: CENTER,
    backgroundColor: MARINER,
    borderRadius: 8,
    height: 48,
  },
  touchableOpacityTextStyle: {
    textAlign: CENTER,
    color: WHITE,
  },
});
