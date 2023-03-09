import {StyleSheet} from 'react-native';
import { CYAN_BLUE, SEASHELL } from '../../styles/colors';
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
    marginTop: 20,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginHorizontal: 16,
    marginBottom:36,
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
    paddingBottom: 10,
  }
});