import {StyleSheet} from 'react-native';
import { CYAN_BLUE, ORANGE, SEASHELL, V_LIGHT_GREY, WHITE } from '../../styles/colors';
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
    width: 208,
  },
  cardView: {
    backgroundColor: WHITE,
  },
  subHeadingView: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  subHeadingText: {
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
  }
});