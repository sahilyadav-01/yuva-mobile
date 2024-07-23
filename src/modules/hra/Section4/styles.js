import {StyleSheet} from 'react-native';
import {WHITE, DARK_BLUE, MARINER, SLATE_GRAY} from '../../../styles/colors';
import {CENTER, FLEX} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE},
  progressBarContainer: {
    width: '100%',
  },
  topContainer: {
    marginHorizontal: 13,
    marginVertical: 20,
    flex: 1,
  },
  topContainerTextStyle1: {
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
    color: SLATE_GRAY,
  },
  boxStylesContainer: {
    backgroundColor: WHITE,
    borderRadius: 8,
    height: 50,
    borderWidth: 1,
    borderColor: DARK_BLUE,
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
