import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  ORANGE,
  PINK_RED,
  SILVER,
  WHITE,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  FLEX_END,
  FLEX_START,
  LEFT,
  LINE_THROUGH,
  ROW,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';

const {width, height} = getDimensions();

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    elevation: 10,
    zIndex: 10,
    shadowColor: BLACK,
    marginBottom: 12,
    marginTop: 8,
    width: width - 32,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    position: ABSOLUTE,
    borderRadius: 12,
    elevation: 15,
    zIndex: 15,
    shadowColor: BLACK,
  },
  containerView: {
    paddingLeft: 16,
    paddingTop: 10,
    elevation: 16,
    zIndex: 16,
  },
  headingView: {
    paddingTop: 4,
  },
  headingText: {
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik600,
    color: ORANGE,
    lineHeight: 21,
    paddingHorizontal: 8,
  },
  itemContainer: {
    flex: 1,
    flexDirection: ROW,
    paddingVertical: 6,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  serviceContainer: {
    flex: 1,
    paddingTop: 4,
  },
  detailsView: {
    justifyContent: CENTER,
  },
  serviceNameText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    lineHeight: 10,
    color: CYAN_BLUE,
  },
  serviceDetailsText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize8,
    lineHeight: 10,
    color: CYAN_BLUE,
  },
  notAvailable: {
    color: '#949494',
  },
  bottomView: {
    flexDirection: ROW,
    justifyContent: FLEX_END,
  },
  priceView: {
    justifyContent: CENTER,
  },
  priceContainer: {
    paddingBottom: 12,
    alignItems: CENTER,
  },
  priceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
    lineHeight: 18,
    paddingHorizontal: 4,
    flex:1,
    textAlign:LEFT
  },
  discountpriceText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: PINK_RED,
    lineHeight: 18,
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
    alignItems: FLEX_START,
  },
  moreView: {
    paddingVertical: 8,
  },
  moreText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize8,
    color: CYAN_BLUE,
    lineHeight: 12,
  },
  buyNowView: {
    backgroundColor: ORANGE,
    borderRadius: 6,
    justifyContent: CENTER,
    alignItems: CENTER,
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  buyNowText: {
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    color: WHITE,
    lineHeight: 17,
  },
  valueContainer: {
    flexDirection: ROW,
  },
  imageDetails: {
    width: 0.45 * width,
  },
  popularPlanImageContainer: {marginLeft:16,paddingRight:4, flex: 1},
  iconContainer: {
    alignItems: CENTER,
    justifyContent: CENTER,
    marginRight: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  planDescriptionInitial: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize7,
    color: CYAN_BLUE,
    textAlign: CENTER,
    lineHeight:10.5
  },
  descriptionInitialContainer: {justifyContent:CENTER},
  spaceContainer: {marginTop:10},
  moreTextContainer: {marginTop:5},
  descriptionContainer: {width:'100%',flexDirection:ROW},
  bottomContainer: {flex:1,marginTop:10},
  footerContainer: {marginTop:10,borderWidth:0.3,marginRight:16,borderColor:SILVER,backgroundColor:SILVER},
  detailsSeparator: {height:2},
  imageContainer: {flex:1},
  imageStyle: {width:'100%',height:'100%'}
});
