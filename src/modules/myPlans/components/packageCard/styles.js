import {StyleSheet} from 'react-native';
import {CYAN_BLUE, ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
export const styles = StyleSheet.create({
  imageStyle: {
    width: 57,
    height: 57,
    marginVertical: '3%',
    marginTop: 32,
  },
  viewContainer: {
    height: 166,
    borderRadius: 6,
    margin: 13,
    backgroundColor: WHITE,
    marginTop: 239,
  },
  buttonStyle: {
    height: 32,
    backgroundColor: ORANGE,
    borderRadius: 8,
    marginTop: 19,
    margin: 11,
    justifyContent: CENTER,
  },
  textStyle: {
    color: WHITE,
    alignSelf: CENTER,
  },
  sideBySide: {
    flexDirection: ROW,
  },
  text1: {
    alignSelf: CENTER,
    margin: '5%',
    marginTop: '10%',
  },
  textColor: {
    color: CYAN_BLUE,
  },
});
