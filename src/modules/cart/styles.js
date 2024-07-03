import {StyleSheet} from 'react-native';
import {
  CYAN_BLUE,
  FLASH_WHITE,
  MARINER,
  ORANGE,
  WHITE,
} from '../../styles/colors';
import {ABSOLUTE, CENTER, FLEX_END} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {getWindowDimensions} from '../../utils/utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: FLASH_WHITE,
    flex: 1,
  },
  containerStyle: {
    backgroundColor: ORANGE,
    height: 48,
    borderRadius: 8,
    justifyContent: CENTER,
    alignContent: CENTER,
  },
  bodyContainer: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: WHITE,
    height: '70%',
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
  },
  emptyCartContainer: {
    flex: 1,
    height: getWindowDimensions().height,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  emptyCartText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
  },
  crossContainerStyle: {paddingTop: 4},
  screenContainer: {flex: 1, backgroundColor: WHITE},
  buttonContainer: {
    backgroundColor: MARINER,
    alignItems: CENTER,
    justifyContent: CENTER,
    width: getWindowDimensions().width - 40,
    paddingVertical: 16,
    alignSelf: CENTER,
    position: ABSOLUTE,
    bottom: 24,
    borderRadius: 10,
  },
});
