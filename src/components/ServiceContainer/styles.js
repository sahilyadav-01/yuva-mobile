import {StyleSheet} from 'react-native';
import {CYAN_BLUE, GREY, ORANGE, WHITE} from '../../styles/colors';
import {
  CENTER,
  FLEX_END,
  RELATIVE,
  ABSOLUTE,
  SPACE_BETWEEN,
  ROW,
  WRAP,
} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainerStyle: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  subContainerStyle1: {
    alignItems: CENTER,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  subContainerStyle2: {
    marginTop: 16,
    flexDirection: ROW,
    flexWrap: WRAP,
    backgroundColor: WHITE,
    borderRadius: 6,
  },
  serviceHeading: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight700,
  },
  line: {
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    width: 246,
  },
});
