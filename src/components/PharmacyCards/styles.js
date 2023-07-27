import { StyleSheet } from 'react-native';
import { CYAN_BLUE, DARK_BLUE, GREEN, WHITE } from '../../styles/colors';
import { CENTER, COLUMN, ROW, SPACE_BETWEEN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  CompleteView: {
    backgroundColor: WHITE,
    marginLeft: '5%',
    marginRight: '5%',
    marginVertical: 12,
    minHeight: 143,
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Top: {
    flexDirection: ROW,
  },
  pngView: {
    width: 68,
    height: 78,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  Image: {
    height: 35,
    width: 35,
  },
  Add: {
    flex: 1,
  },
  Cont: {
    marginTop: '5%',
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  subCont: {
    flexDirection: COLUMN,
  },
  NameStyle: {
    marginLeft: '3%',
    color: DARK_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
    width: "40%",
  },
  Year: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    marginRight: '5%',
  },
  subText: {
    color: GREEN,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize10,
    marginRight: '5%',
  },
  ContentStyle: {
    marginVertical: '2%',
    marginLeft: '3%',
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize12,
  },
  addressView: {
    marginBottom: 21,
    marginLeft: '3%',
    flexDirection: ROW,
    marginTop: 13,
  },
  Address: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
  },
  Button: {
    backgroundColor: CYAN_BLUE,
    marginTop: 12,
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
});