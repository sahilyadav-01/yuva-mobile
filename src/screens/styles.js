import {StyleSheet} from 'react-native';
import {CENTER, SPACE_BETWEEN, FLEX, ROW, ROW_REVERSE, HIDDEN} from '../styles/constants';
import {CYAN_BLUE, FLASH_WHITE, LIGHT_GREY, SEASHELL} from '../styles/colors';
import {fonts} from '../styles/fonts';
import { getDimensions } from '../utils/utils';

export const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: LIGHT_GREY,
  },
  margin: {
    marginBottom: 0,
  },
  ScrollViewContainerStyle: {
    paddingVertical: 23,
  },
  serviceContainerWrapperStyle: {
    display: FLEX,
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: CENTER,
    width:getDimensions()?.width
  },
  tabNavigation: {
    marginTop: 0,
  },
  barColor: {
    backgroundColor: FLASH_WHITE,
  },
  screenOptions: {
    tabBarLabelStyle: {fontSize: 16, marginTop: 0},
    tabBarStyle: {height: 40},
    swipeEnabled: true,
    lazy: false,
  },
  textColor: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik600,
  },
  carouselText: {
    marginLeft: 17,
    marginTop: 11,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize16,
    height: 21,
  },
  line: {
    borderBottomColor: SEASHELL,
    borderBottomWidth: 2,
    flex:1,
  },
  line1: {
    borderBottomColor: SEASHELL,
    borderBottomWidth: 1,
    width: '70%',
  },
  line2: {
    borderBottomColor: SEASHELL,
    borderBottomWidth: 1,
    width: '45%',
  },
  lineJustify: {
    alignItems: CENTER,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  carouselMain: {
    justifyContent: CENTER,
    marginTop: 16,
    marginLeft: 14,
    marginRight: 15,
    alignItems: CENTER,
  },
  tab: {
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik400,
    marginTop: 100,
  },
  verticalLine: {
    borderRightWidth: 1,
    height: 20,
    marginVertical:20,
    borderRightColor: CYAN_BLUE,
  },
  height: {
    height: 40,
    backgroundColor: FLASH_WHITE,
  },
  flatlist: {
    flexDirection: ROW,
    marginTop: 20,
  },
  bannerContainer: {
    width:getDimensions()?.width,
    paddingHorizontal:12,
    paddingVertical:8
  },
  bannerImage: {
    width: '100%',
  },
  PopularHealthCheckups: {
    alignItems: CENTER,
    marginTop: 18,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginHorizontal: 16,
  },
  OurPlansHeaderStyle: {
    alignItems: CENTER,
    marginTop: 20,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginHorizontal: 16,
    marginBottom: 36,
  },
  LandingPageText1: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize14,
  },
  LandingPageText2: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  line: {
    borderBottomColor: SEASHELL,
    borderBottomWidth: 1,
    width: 118,
  },
  planContainer: {marginTop:0},
  textContainer: {flex:1,flexDirection:ROW_REVERSE,justifyContent:SPACE_BETWEEN,alignItems:CENTER,overflow:HIDDEN},
  keyboardAvoidViewStyle: {flex:1}
});
