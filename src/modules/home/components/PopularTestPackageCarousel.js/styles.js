import {StyleSheet} from 'react-native';
import {
  INDIGO_LIGHT,
  PALE_PEACH,
  VIVID_TANGERINE,
} from '../../../../styles/colors';
import {
  CENTER,
  HIDDEN,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  PopularHealthCheckups: {
    alignItems: CENTER,
    marginTop: 28,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  LandingPageText1: {
    color: INDIGO_LIGHT,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize14,
  },
  textContainer: {
    flex: 1,
    flexDirection: ROW_REVERSE,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
    overflow: HIDDEN,
  },
  LandingPageText2: {
    color: INDIGO_LIGHT,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  line: {
    borderBottomColor: VIVID_TANGERINE,
    borderBottomWidth: 2,
    flex: 1,
  },
  CarouselContainerStyle: {
    backgroundColor: PALE_PEACH,
  },
});
