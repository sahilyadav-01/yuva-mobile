import { StyleSheet } from 'react-native';
import { BLACK, CYAN_BLUE, DARK_BLUE, GREY, INDIGO_LIGHT, MEDIUM_CARMINE, ORANGE, WHITE } from '../../styles/colors';
import { CENTER, COLUMN, ROW } from '../../styles/constants';
import { fonts } from '../../styles/fonts';
export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    flex:1
  },
  headingStyle: {
    paddingLeft: 16,
    color: INDIGO_LIGHT,
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.rubik400,
    lineHeight: fonts.Height.lineHeight18,
    marginVertical: 18,
  },
  subHeadingStyle: {
    color: ORANGE,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    lineHeight: fonts.Height.lineHeight18,
    marginBottom: 10
  },
  subHeading2Style: {
    color: DARK_BLUE,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    lineHeight: fonts.Height.lineHeight18,

  },
  searchConatiner:{
    marginVertical: 10,
    marginHorizontal:10,
    minHeight: 42,
    backgroundColor: WHITE,
    borderColor: BLACK,
    borderWidth: 0.5,
    borderRadius: 12,
    flexDirection: ROW,
    paddingHorizontal: 12,
    alignItems: CENTER,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 2,
    zIndex: 10,
  },
  searchTextInputStyle:{ 
    flex: 1,
    paddingLeft: 20,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik300,
    color:CYAN_BLUE
  },
  textInputStyle: {
    marginVertical: 10,
    marginHorizontal:10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
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
    zIndex: 10,
  },
  CompleteView: {
    backgroundColor: WHITE,
    marginVertical: 12,
    minHeight: 48,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderWidth: 0.5,
    borderColor: GREY,
    backgroundColor: WHITE,
    borderRadius: 10,
  },
  Top: {
    flexDirection: COLUMN,
    paddingLeft: 30,
  },
  cardNameStyle: {
    color: ORANGE,
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
    lineHeight: 24,
    paddingTop: 12,
  },
  cardAddressStyle: {
    marginRight:16,
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
    lineHeight: 24,
  },
  subTextStyle: {
    flexDirection: ROW,
    paddingVertical: 10,
  },
  subTextBottomStyle: {
    flexDirection: ROW,
    marginBottom: 16,
    marginRight:'50%',
    paddingVertical:6
  },
  textStyle: {
    paddingLeft:20,
    color: MEDIUM_CARMINE,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize16,
  },
})