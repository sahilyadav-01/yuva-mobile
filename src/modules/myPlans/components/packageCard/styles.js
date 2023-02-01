import {StyleSheet} from 'react-native';
import {CYAN_BLUE, ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
export const styles = StyleSheet.create({
  imageStyle: {
    width: 57,
    height: 57,
    marginTop: 12,
  },
  viewContainer: {
    height: 166,
    borderRadius: 6,
    margin: 13,
    backgroundColor: WHITE,
    shadowColor: 'grey',
    borderWidth: 1,
  },
  buttonStyle: {
    height: '20%',
    backgroundColor: ORANGE,
    borderRadius: 8,
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: CENTER,
  },
  head: {
    backgroundColor: 'rgba(239,239,240,1)',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    top: -11,
    fontSize: 14,
    color: CYAN_BLUE,
  },
  expiry: {
    alignSelf: 'flex-end',
    paddingRight: '3%',
    fontSize: 10,
    color: CYAN_BLUE,
  },

  textStyle: {
    color: WHITE,
    alignSelf: CENTER,
  },
  sideBySide: {
    flexDirection: ROW,
    marginLeft: '5%',
  },
  text1: {
    alignSelf: CENTER,
    margin: '5%',
  },
  textColor: {
    color: CYAN_BLUE,
  },
});
