import { StyleSheet } from 'react-native';
import { BLACK, CYAN_BLUE, DARK_BLUE, WHITE } from '../../../styles/colors';
import { CENTER, ROW } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    flex:1
  },
  search: {
    marginBottom: '16%',
    marginTop: '4%',
  },
  middleContainer: {
    marginTop: 18,
    flexDirection: ROW,
    alignItems: CENTER,
  },
  subHeadingTextStyle: {
    fontFamily: fonts.family.rubik600,
    fontWeight: fonts.weight.fontWeight600,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
    lineHeight: 21,
    marginLeft: "5%",
  },
  imageStyle: { width: 36, height: 36 },
  textInputStyle: {
    marginVertical: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderColor: BLACK,
    backgroundColor: WHITE,
    borderRadius: 12,
    color: DARK_BLUE,
    minHeight: 42,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize14,
  },
  bottomContainer: {
    flex:1
  },

});
