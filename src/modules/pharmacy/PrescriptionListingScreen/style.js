import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, ORANGE, WHITE} from '../../../styles/colors';
import {ABSOLUTE, CENTER, ROW} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
  },
  CardViewContainerStyle: {
    marginTop: '10%',
    flex: 1,
  },
  CompleteView: {
    backgroundColor: WHITE,
    marginLeft: '5%',
    marginRight: '5%',
    marginVertical: 12,
    minHeight: 143,
    borderRadius: (10, 10, 6, 6),
  },
  CardView: {
    backgroundColor: WHITE,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowColor: BLACK,
    borderRadius: 6,
  },
  NameView: {
    flexDirection: ROW,
  },
  NameText: {
    marginLeft: 14,
    marginTop: 14,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  PresText: {
    marginLeft: 14,
    marginTop: 14,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  PincodeText: {
    marginHorizontal: 14,
    marginTop: 14,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
    position: ABSOLUTE,
    right: 10,
  },
  Button: {
    marginTop: 12,
    backgroundColor: ORANGE,
    height: 40,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  ButtonText: {
    color: WHITE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    alignSelf: CENTER,
    marginTop: '3%',
  },
  NoOrderText: {
    textAlign: CENTER,
    marginVertical: '40%',
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
    color: CYAN_BLUE,
  },
});
