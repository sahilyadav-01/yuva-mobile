import {StyleSheet} from 'react-native';
import {
  ABSOLUTE,
  AUTO,
  CENTER,
  CONTAIN,
  FLEX_START,
  ROW,
  SPACE_AROUND,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {
  BLACK,
  CYAN_BLUE,
  ORANGE,
  ORANGE_RED,
  WHITE,
} from '../../../../styles/colors';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  OurPlansHeaderStyle: {
    alignItems: CENTER,
    marginVertical: 8,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginHorizontal: 16,
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
    borderBottomColor: ORANGE_RED,
    borderBottomWidth: 1,
    flex: 1,
  },
  subHeadingView: {
    marginVertical: 6,
    marginHorizontal: 16,
    flexDirection: ROW,
    zIndex: 999,
  },
  subHeadingText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color: ORANGE,
  },
  ImageBanner: {
    width: '95%',
    height: AUTO,
    aspectRatio: 19 / 9,
    borderRadius: 14,
  },
  ImageView: {
    alignItems: CENTER,
    justifyContent: FLEX_START,
  },
  radioOuterCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: BLACK,
    alignItems: CENTER,
    justifyContent: CENTER,
    marginLeft: 40,
    marginTop: 2,
  },
  radioOuterCircleSelected: {
    borderColor: BLACK,
  },
  radioInnerCircle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: ORANGE,
  },
  radioButtonText: {
    color: BLACK,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
  },
  expandedContent: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 8,
    justifyContent: CENTER,
    alignSelf: CENTER,
    backgroundColor: ORANGE,
  },
  expandedContentText: {
    color: WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  PlanClickView: {
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BLACK,
    backgroundColor: WHITE,
    marginRight: 5,
   paddingVertical:6,
  },
  PlanView: {
    marginVertical: 18,
    width: '95%',
    height: AUTO,
    alignSelf:CENTER,
    marginHorizontal:6,
    borderRadius: 12,
    overflow: 'hidden', 
  },
  ImageBanner2: {
    paddingBottom: 24,
    flex: 1,
    width: '100%',
  },
  TextImage: {
    paddingTop: 12,
    paddingRight:16,
    paddingLeft:14,
  },
  PlanContainer: {
    flexDirection: ROW,
    justifyContent: SPACE_AROUND,
    alignItems: FLEX_START,
    paddingBottom: 2,
    marginTop: 4,
  },
  DetailsContainer: {
    flexDirection: ROW,
    justifyContent: SPACE_AROUND,
    marginLeft: 40,
    marginTop:2
  },
  PlanYear: {width: '30%'},
  PlanText: {width: '45%'},
});
