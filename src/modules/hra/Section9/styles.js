import {StyleSheet} from 'react-native';
import {WHITE, DARK_BLUE, MARINER} from '../../../styles/colors';
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
  topContainerTextStyle: {
    fontSize: fonts.size.fontSize18,
    color: DARK_BLUE,
    fontfamily: fonts.family.monsterrant500,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    flex: 1,
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
