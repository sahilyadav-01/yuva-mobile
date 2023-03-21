import {StyleSheet} from 'react-native';
import {
  FLASH_WHITE,
  GREEN,
  ORANGE,
  WHITE,
} from '../../styles/colors';
import {ABSOLUTE, CENTER} from '../../styles/constants';
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
  crossStyle: {
    color: GREEN,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
  },
  appliedStyle: {
    color: GREEN,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    marginLeft: 21,
  },
  descStyle: {
    height: 57,
    width: '100%',
    justifyContent: CENTER,
    borderBottomLeftRadius:12,
    marginBottom:12,
  },
  buttonStyle: {
    position: ABSOLUTE,
    right: 23,
    top: 20,
  },
});
