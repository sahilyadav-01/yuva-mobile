import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, WHITE} from '../../../../styles/colors';
import {ABSOLUTE, CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';

const {width} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 12,
    shadowRadius: 12,
    width: 0.28 * width,
    height: 0.28 * width,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowColor: BLACK,
    elevation: 5,
  },
  selected: {
    position: ABSOLUTE,
    right: 6,
    top: 6,
  },
  imageView: {
    height: '60%',
    justifyContent: CENTER,
    alignItems: CENTER,
    marginTop: 10,
  },
  textView: {
    height: '40%',
    alignItems: CENTER,
  },
  imageStyle: {
    height: 0.12 * width,
    width: 0.12 * width,
  },
  textStyle: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
    textAlign: CENTER,
  },
  selectedContainer: {
    borderColor: CYAN_BLUE,
    borderWidth: 1,
  },
});
