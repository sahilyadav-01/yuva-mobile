import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, DEEP_RED, LIGHT_SKY_BLUE, ORANGE, PINK_RED, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, FLEX_START, LEFT, LINE_THROUGH, RIGHT, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';

const {width, height} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    width: 0.70 * width,
    height: 0.32 * height,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowColor: BLACK,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  containerView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headingView: {
    paddingTop: 4,
  }, 
  headingText: {
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik600,
    color: ORANGE,
    lineHeight: 18,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: ROW,
    paddingHorizontal: 6,
    paddingVertical: 4,
    width: '40%',
    marginHorizontal: 8,
  },
  serviceContainer: {
    flex:1,
  },
  detailsView: {
    paddingHorizontal: 4,
    justifyContent: CENTER,
  },
  serviceNameText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize8,
    lineHeight: 10,
    color: CYAN_BLUE,
  },
  serviceDetailsText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize6,
    lineHeight: 8,
    color: CYAN_BLUE,
  },
  notAvailable: {
    color: DEEP_RED,
  },
  bottomView: {
    width: '100%',
    flex: 1,
    flexDirection: ROW,
  },
  priceView: {
    width: '40%',
    marginHorizontal: 4,
  },
  priceContainer: {
    paddingBottom: 12,
    alignItems: CENTER,
  },
  priceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    color: CYAN_BLUE,
    lineHeight: 15,
    paddingHorizontal: 4,
  },
  discountpriceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    color: PINK_RED,
    lineHeight: 15,
    textDecorationLine: LINE_THROUGH,
    paddingHorizontal: 4,
  },
  durationText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize6,
    color: CYAN_BLUE,
    lineHeight: 8,
    paddingLeft: 40,
  },
  footerView: {
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  moreView: {
    paddingVertical: 8,
  },
  moreText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize6,
    color: CYAN_BLUE,
    lineHeight: 9,
  },
  buyNowView: {
    backgroundColor: CYAN_BLUE,
    borderRadius: 6,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  buyNowText: {
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.rubik400,
    color: WHITE,
    lineHeight: 15,
  },
  imageView: {
    width: '50%',
    bottom: 10,
    right: 10,
  },
  valueContainer: {
    flexDirection: ROW,
    paddingHorizontal: 4,
  }
});