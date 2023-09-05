import {StyleSheet} from 'react-native';
import {
  AUTO,
  CENTER,
  FLEX_START,
  ROW,
  SPACE_AROUND,
} from '../../../../styles/constants';
import {
  BLACK,
  GREY,
  ORANGE,
  ORANGE_RED,
  RED,
  WHITE,
} from '../../../../styles/colors';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 110,
  },
  line: {
    borderBottomColor: ORANGE_RED,
    borderBottomWidth: 1,
    flex: 1,
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
    marginVertical:14,
  },
  radioOuterCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: BLACK,
    alignItems: CENTER,
    justifyContent: CENTER,
    marginLeft: 22,
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
    borderWidth:0.7,
    borderColor:GREY,
  },
  ImageBanner2: {
    paddingBottom:100,
    width: '100%',
    paddingTop:10,
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
    marginLeft: 25,
    marginTop:2,
    alignItems:CENTER,
    paddingHorizontal: 10,
  },
  PlanYear: {width: '20%' },
  PlanText: {width: '45%'},
  PlanPrice:{
    flexDirection:ROW,
    width: '40%',
    justifyContent:CENTER
  },
  lineThrough: {
    color: RED,
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.rubik400,
    textDecorationLine:'line-through',
    marginHorizontal:3,
  },
});