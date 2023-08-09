import {StyleSheet} from 'react-native';
import { AUTO, CENTER, CONTAIN, FLEX_START, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { CYAN_BLUE, GREY, GREY70, LIGHT_GREY, LIGHT_GREYISH_RED, ORANGE, ORANGE_RED, SEASHELL, WHITE } from '../../../../styles/colors';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';


const { width,height } = getDimensions();
export const styles = StyleSheet.create({
  container:{
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
    flex:1
  },
  subHeadingView: {
    marginVertical: 6,
    marginHorizontal: 16,
    flexDirection:ROW,
    zIndex:999
  },
  subHeadingText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color: ORANGE,
  },
  ImageBanner: {
    width:'95%',
    height:AUTO,
    aspectRatio: 19/9,
    borderRadius:14,
    resizeMode:CONTAIN,
  },
  ImageView: {
    alignItems:CENTER,
    justifyContent: FLEX_START,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioOuterCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioOuterCircleSelected: {
    borderColor: '#007bff',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  radioButtonText: {
    fontSize: 16,
  },
  expandedContent: {
    marginHorizontal:10,
    borderRadius:12,
    padding:6,
    justifyContent:CENTER,
    alignSelf:CENTER,
    backgroundColor:ORANGE,
  },
  expandedContentText:{
    color:WHITE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  PlanView:{
    marginHorizontal:5,
    marginVertical:12,
    borderWidth:1,
    borderRadius:10,
    borderColor:GREY70,
  },
  PlanClickView:{
    marginHorizontal:12,
    marginVertical:12,
    borderWidth:1,
    borderRadius:10,
    borderColor:GREY70
  }
});