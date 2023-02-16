import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, LIGHT_SKY_BLUE, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, LEFT, RIGHT, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';

const {width} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    width: 0.75 * width,
    height: '100%',
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowColor: BLACK,
    elevation: 10,
    backgroundColor : WHITE,
    alignItems: CENTER,
  },
  activeContainer: {
    marginTop: '20%',
    height: '120%',
  },
  headingView: {
    justifyContent: CENTER,
    alignItems: CENTER,
    padding: 12,
  },
  line: {
    height: 5,
    width: '100%',
    backgroundColor: LIGHT_SKY_BLUE,
    position: ABSOLUTE
  },
  headingTextView: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
  },
  detailsView: {
    flex: 1,
    // maxHeight: 100,
    marginVertical: 6,
    padding: 12,
  },
  planView: {
    flexDirection: ROW,
    backgroundColor: WHITE,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginVertical: 8,
    width: '100%',
    borderRadius: 4,
  },
  oddColor: {
    backgroundColor: LIGHT_SKY_BLUE,
  },
  evenColor: {
    backgroundColor: VERY_LIGHT_SKY_BLUE,
  },
  titleView: {
    width: '55%',
  },
  valueView: {
    width: '45%',
  },
  titleText: {
    textAlign: LEFT,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
  },
  valueText: {
    textAlign: RIGHT,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    color: CYAN_BLUE,
  },
  moreText: {
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
  },
  footerView: {
    width: '100%',
    justifyContent: FLEX_END,
  },
  buyNowView: {
    backgroundColor: CYAN_BLUE,
    width: '100%',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: '30%',
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  buyNowText: {
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik600,
    color: WHITE,
  },
  moreView: {
    padding: 12,
    width: '100%',
  }
});