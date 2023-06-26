import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  DARK_BLUE,
  FLASH_WHITE,
  LIGHT_GREYISH_RED,
  LIGHT_SKY_BLUE,
  MEDIUM_CARMINE,
  ORANGE,
  VERY_LIGHT_SKY_BLUE,
  WHITE,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  FLEX_END,
  LEFT,
  RIGHT,
  ROW,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';

const {width} = getDimensions();

export const styles = StyleSheet.create({
  textHeader: {
    marginBottom:43,
    marginTop:26,
    marginLeft:17,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
    color:CYAN_BLUE
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  planDetails:{
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
    color:WHITE
  },
  planDetailsCard: {
    marginTop: '5%',
    borderWidth: 3,
    borderColor: FLASH_WHITE,
    paddingBottom: 22,
  },
  details: {
    marginLeft: 10,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  starIcon: {
    flexDirection: ROW,
    width: '94%',
    paddingTop: 15,
    paddingLeft: 15,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  termsCondition: {
    marginBottom: 18,
    marginTop: 24,
    marginLeft: 26,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
    color: ORANGE,
  },
  buyNow: {
    textAlign: CENTER,
    paddingTop: 15,
    paddingBottom: 15,
    color: WHITE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
  },
  touchableButton: {
    backgroundColor: MEDIUM_CARMINE,
    marginTop: 40,
    marginHorizontal: 22,
    borderRadius: 8,
  },
  headerView: {
    width: '100%',
    height: '5%',
    backgroundColor: ORANGE,
    justifyContent: CENTER,
    paddingHorizontal: 15,
  },
  PricePerMonth: {
    marginTop: 10,
    alignSelf: CENTER,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    color: MEDIUM_CARMINE,
  },
  PricePerYear:{
    marginTop: 10,
    alignSelf: CENTER,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize18,
    color: ORANGE,
  },
  oneYear:{
    marginTop: 10,
    alignSelf: CENTER,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize18,
    color: CYAN_BLUE,
  },
  rupee: {
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize16,
    color: MEDIUM_CARMINE,
  },
  image: {
    height: 40,
  },
  carView: {
    backgroundColor: WHITE,
    shadowOpacity: 1,
    shadowColor: BLACK,
    minHeight: 117,
    width: width - 30,
    borderRadius: 6,
  },
  overallView: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: '4%',
  },
  planAlso: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize20,
    marginTop: 30,
    color: ORANGE,
    marginLeft: 16,
  },
  includes: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize20,
    color: ORANGE,
    marginTop: 30,
    marginLeft: 6,
  },
  PlanText: {
    flexDirection: ROW,
  },
  ImageStyle: {
    width: 6,
    height: 6,
    marginVertical: 4,
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
  dropStyles: {
    paddingHorizontal: 10,
    borderColor: CYAN_BLUE,
    backgroundColor: WHITE,
    position:ABSOLUTE,
  },
  valueStyle: {
    alignSelf: CENTER,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  boxStyles: {
    paddingVertical:4,
    paddingHorizontal:6,
    marginHorizontal:16,
    borderColor: CYAN_BLUE,
    color: LIGHT_GREYISH_RED,
    backgroundColor: WHITE,
  },
  backGroundStyle: {backgroundColor: WHITE},
  subHeadingView: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:ROW,
    zIndex:999
  },
  subHeadingText: {
    marginTop:8,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color: ORANGE,
  },
});
