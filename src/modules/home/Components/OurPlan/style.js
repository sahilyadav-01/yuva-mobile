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
    resizeMode: CONTAIN,
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
  PlanView: {
    marginVertical: 18,
    width: '95%',
    height: AUTO,
    borderRadius: 12,
    marginHorizontal: 6,
    alignSelf:CENTER,
  },
  PlanClickView: {
    marginVertical:6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BLACK,
    backgroundColor: WHITE,
    paddingBottom: 6,
    marginRight: 5,
  },
  ImageBanner2: {
    width: '100%',
    height: AUTO,
    aspectRatio: 19 / 9,
    borderRadius: 12,
  },
  TextImage: {
    position: ABSOLUTE,
    height:'100%',
    top: 12,
    left: 20,
    alignItems: FLEX_START,
    justifyContent: FLEX_START,
    paddingBottom:5,
  },
  PlanContainer:{flexDirection:ROW, justifyContent:SPACE_AROUND,alignItems:FLEX_START,paddingBottom:2,marginTop:4},
  DetailsContainer:{flexDirection:ROW,justifyContent:SPACE_AROUND,marginLeft:40},
  PlanYear:{width: '30%'},
  PlanText:{width: '45%'}
});
