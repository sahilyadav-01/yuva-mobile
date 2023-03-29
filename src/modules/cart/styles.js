import {StyleSheet} from 'react-native';
import {
  FLASH_WHITE,
  ORANGE,
  WHITE,
} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

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
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 24,
  },
  textStyle: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
  },
});
