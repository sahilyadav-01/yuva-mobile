import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE_OPACITY, MARINER, ANAKIVA} from '../../styles/colors';
import {ABSOLUTE, CENTER, ROW, FLEX_START} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: ANAKIVA,
    height: 162,
  },
  ScrollViewContainerStyle: {},
  orderDetailsContainer: {
    backgroundColor: ANAKIVA,
    height: 162,
  },
  headerStyle: {
    alignItems: FLEX_START,
    marginHorizontal: '3%',
    marginVertical: '3%',
    height: 20,
  },
  textStyle: {
    color: BLACK,
    marginLeft: 13,
    marginRight: 132,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize14,
  },
  textTestStyle: {
    marginBottom: 19,
    color: BLACK,
    marginLeft: 13,
    marginRight: 132,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize14,
  },
  textStyle1: {
    color: MARINER,
    fontFamily: fonts.family.montserrant700,
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
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize10,
  },
  reportTextStyle: {
    marginHorizontal: 15,
  },
});
