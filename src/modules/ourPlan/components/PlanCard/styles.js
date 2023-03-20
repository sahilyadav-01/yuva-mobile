import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, DEEP_RED, LIGHT_SKY_BLUE, ORANGE, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, FLEX_START, LEFT, RIGHT, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';

const {width, height} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    width: 0.70 * width,
    height: 0.30 * height,
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
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  headingView: {

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
    paddingVertical: 4,
    paddingHorizontal: 4,
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
    paddingHorizontal: 12,
    flexDirection: ROW,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
   priceContainer: {
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  priceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    color: CYAN_BLUE,
    lineHeight: 15,
  },
  durationText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
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
  },
  buyNowView: {
    backgroundColor: CYAN_BLUE,
    borderRadius: 6,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  buyNowText: {
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.rubik400,
    color: WHITE,
  },
  imageView: {
    bottom: 10,
  },
});