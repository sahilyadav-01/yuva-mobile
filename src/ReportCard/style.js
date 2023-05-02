import {StyleSheet} from 'react-native';
import { CYAN_BLUE } from '../styles/colors';
import {ABSOLUTE, CENTER, ROW} from '../styles/constants';
import {fonts} from '../styles/fonts';

export const styles = StyleSheet.create({
  renderItemStyle: {
    alignItems: CENTER,
    flexDirection: ROW,
    marginVertical: 17,
    marginHorizontal: 15,
  },
  dateStyle: {
    position: ABSOLUTE,
    right: 0,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  reportTextStyle: {
    marginHorizontal: 15,
    color:CYAN_BLUE,
  },
  downloadReportStyle:{
    paddingHorizontal:12,
    paddingVertical:12,
  }
});
