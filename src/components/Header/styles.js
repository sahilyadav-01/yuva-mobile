import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, PINK_ORANGE, WHITE} from '../../styles/colors';
import {ABSOLUTE, CENTER, FLEX_START, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  headerContainer: {
   paddingTop:10,
   paddingBottom:12,
    width: '100%',
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: BLACK,
    elevation: 10,
    paddingBottom: 24,
    zIndex: 1,
  },
  topSection: {
    flexDirection: ROW,
    justifyContent: CENTER,
  },
  pinView: {
    left: 0,
    flex: 1,
    flexDirection: ROW,
    marginTop:4
  },
  rightView: {
    right: 0,
    flexDirection: ROW,
    alignItems: FLEX_START,
  },
  rightIcon: {
    paddingHorizontal: 4,
    height: 24,
    justifyContent:CENTER
  },
  loginText: {
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize10,
  },
  boxStyle: {
    paddingTop: 0,
    borderWidth: 0,
    paddingHorizontal: 8,
    minWidth: 75,
  },
  inputStyles: {
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.rubik400,
    color: CYAN_BLUE,
  },
  dropdownStyles: {
    marginTop: 0,
    borderWidth: 0,
    borderRadius: 4,
    position: ABSOLUTE,
    backgroundColor: WHITE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: BLACK,
    elevation: 3,
  },
  sectionBottom: {
    flexDirection: ROW,
    alignSelf: FLEX_START,
    zIndex: -1,
  },
  titleText: {
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
    paddingHorizontal: 12,
  },
  search: {
    zIndex: -1,
  },
  badgeView: {
    backgroundColor: PINK_ORANGE,
    borderRadius: 16,
    height: 15,
    width: 15,
    position: ABSOLUTE,
    left: 15,
    bottom: 14,
    zIndex: 1,
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  badgeText: {
    color: WHITE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize8,
  },
  searchContainer: {position:ABSOLUTE,bottom:18}
});
