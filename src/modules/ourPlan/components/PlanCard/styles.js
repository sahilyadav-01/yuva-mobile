import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, LIGHT_SKY_BLUE, ORANGE, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, FLEX_START, LEFT, RIGHT, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';

const {width} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    width: 0.90 * width,
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
    marginHorizontal: 8,
  },
  headingView: {
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: CYAN_BLUE,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  }, 
  headingText: {
    fontSize: fonts.size.fontSize28,
    fontFamily: fonts.family.rubik400,
    color: WHITE,
  },
  bodyView: {
    width: '100%',
    justifyContent: CENTER,
    paddingHorizontal: 8,
  },
  imageView: {
    alignItems: CENTER,
    paddingVertical: 16,
  },
  itemContainer: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    flexDirection: ROW,
  },
  iconView: {
    paddingHorizontal: 4,
    alignItems: CENTER,
  },
  serviceView: {
    width: '60%',
    paddingHorizontal: 8,
  },
  serviceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
  },
  valueView: {
    flex: 1,
    paddingHorizontal: 8,
  },
  valueText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
  },
  priceContainer: {
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingBottom: 16,
  },
  priceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize32,
    color: CYAN_BLUE,
  },
  durationText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  buyNowView: {
    backgroundColor: CYAN_BLUE,
    width: '80%',
    borderRadius: 6,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 18,
  },
  buyNowText: {
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik600,
    color: WHITE,
  },
  footerView: {
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  moreView: {
    paddingVertical: 8,
  },
  moreText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    color: CYAN_BLUE,
  },
  featuredView: {
    marginVertical: 4,
    backgroundColor: ORANGE,
    height: '5%',
    width: '100%',
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  featuredText: {
    color: WHITE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
  }
});