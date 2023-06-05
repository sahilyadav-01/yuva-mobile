import {StyleSheet} from 'react-native';
import { CYAN_BLUE, LIGHT_GREYISH_RED, LIGHT_MERCURY, ORANGE, SEASHELL, V_LIGHT_GREY, WHITE } from '../../styles/colors';
import { ABSOLUTE, CENTER, FLEX_END, FLEX_START, ROW, SPACE_BETWEEN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';
import { getDimensions } from '../../utils/utils';

const {height} = getDimensions();
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
    borderBottomColor: SEASHELL,
    borderBottomWidth: 1,
    flex:1
  },
  cardView: {
    paddingHorizontal: 12
  },
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
  indexContainer:{
    marginHorizontal: 15,
    marginVertical: 10,
  },
  indexView: {
    backgroundColor: V_LIGHT_GREY,
    height: 10,
    width: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  activeIndexView: {
    backgroundColor: ORANGE
  },
  separatorStyle: {width:24},
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
});