import {StyleSheet} from 'react-native';
import { BLACK, CYAN_BLUE, DEEP_RED, LIGHT_SKY_BLUE, ORANGE, PINK_RED, VERY_LIGHT_SKY_BLUE, WHITE } from '../../../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, FLEX_START, LEFT, LINE_THROUGH, RIGHT, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';

const {width, height} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    elevation:10,
    zIndex:10,
    shadowColor:BLACK,
    marginBottom:12,
    marginTop:8
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    position: ABSOLUTE,
    borderRadius: 12,
    elevation:15,
    zIndex:15,
    shadowColor:BLACK
  },
  containerView: {
    paddingLeft: 12,
    paddingTop: 10,
    elevation:16,
    zIndex:16
  },
  headingView: {
    paddingTop: 4,
  }, 
  headingText: {
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik600,
    color: ORANGE,
    lineHeight: 18,
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex:1,
    flexDirection: ROW,
    paddingVertical: 6,
  },
  iconStyle: {
    width:30,
    height:30
  },
  serviceContainer: {
    flex:1,
    paddingTop: 4,
  },
  detailsView: {
    justifyContent: CENTER,
  },
  serviceNameText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize8,
    lineHeight: 10,
    color: CYAN_BLUE,
    maxWidth: 80,
  },
  serviceDetailsText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize6,
    lineHeight: 8,
    color: CYAN_BLUE,
    maxWidth: 80
  },
  notAvailable: {
    color: DEEP_RED,
  },
  bottomView: {
    flex: 1,
    flexDirection: ROW,
  },
  priceView: {
    justifyContent: CENTER,
    alignItems: CENTER,
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
  valueContainer: {
    flexDirection: ROW,
  },
  imageDetails: {
    width: 0.45 * width,
  },
});