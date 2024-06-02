import {StyleSheet} from 'react-native';
import { CYAN_BLUE } from '../styles/colors';
import {ABSOLUTE, CENTER, ROW, SPACE_BETWEEN} from '../styles/constants';
import {fonts} from '../styles/fonts';

export const styles = StyleSheet.create({
  renderItemStyle: {
    alignItems: CENTER,
    flexDirection: ROW,
    marginVertical: 17,
    marginHorizontal: 15,
  },
  dateStyle: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color:CYAN_BLUE,
  },
  reportTextStyle: {
    marginLeft:12,
    marginRight:8,
    color:CYAN_BLUE,
    maxWidth:'60%'
  },
  downloadReportStyle:{
   position:ABSOLUTE,
   right:0
  },
  container: {
    flexDirection:ROW,
    alignItems:CENTER,
    justifyContent:SPACE_BETWEEN,
    paddingHorizontal:12
  },
  innerContainer: {
    width:'70%',
    flexDirection:ROW,
    alignItems:CENTER
  }
});
