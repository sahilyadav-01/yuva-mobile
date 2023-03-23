import { StyleSheet } from 'react-native';
import {
  CYAN_BLUE,
  CYAN_BLUE_OPACITY,
  ORANGE,
  SPANISH_WHITE,
} from '../../styles/colors';
import { ABSOLUTE, CENTER, ROW, FLEX_START } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: SPANISH_WHITE,
    height: 162,
  },
  ScrollViewContainerStyle: {},
  orderDetailsContainer: {
    backgroundColor: SPANISH_WHITE,
    height: 162,
  },
  headerStyle: {
    alignItems: FLEX_START,
    marginHorizontal: '3%',
    marginVertical: '3%',
    height: 20,
  },
  textStyle: {
    color: CYAN_BLUE,
    marginLeft: 13,
    marginRight: 132,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
  },
  textTestStyle: {
    marginBottom: 19,
    color: CYAN_BLUE,
    marginLeft: 13,
    marginRight: 132,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
  },
  textStyle1: {
    color: ORANGE,
    fontFamily: fonts.family.rubik700,
    fontSize: fonts.size.fontSize18,
  },
  buttonStyle: {
    right: 15,
    position: ABSOLUTE,
  },
  reportContainer: {
    borderTopWidth: 1,
    marginHorizontal: 15,
    borderTopColor: CYAN_BLUE_OPACITY,
  },
  renderItemStyle: {
    alignItems: CENTER,
    flexDirection: ROW,
    marginVertical: 17,
  },
  dateStyle: {
    position: ABSOLUTE,
    right: 0,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  reportTextStyle: {
    marginHorizontal: 15,
  },
});
