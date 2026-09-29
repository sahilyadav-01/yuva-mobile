import {StyleSheet} from 'react-native';
import {CYAN_BLUE, CYAN_BLUE_OPACITY} from '../../styles/colors';
import {ABSOLUTE, CENTER, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 30,
    marginHorizontal: 13,
    borderRadius: 12,
    borderWidth: 1,
  },
  headerStyle: {
    flexDirection: ROW,
    alignItems: CENTER,
    height: 86,
  },
  bookingIdStyle: {
    color: CYAN_BLUE,
    marginLeft: 15,
    marginBottom: 5,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  textStyle: {
    color: CYAN_BLUE,
    marginLeft: 13,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
  },
  textStyle1: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
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
  listContainer: {
    paddingVertical: 36,
  },
  itemSeparator: {
    height: 40,
  },
});
