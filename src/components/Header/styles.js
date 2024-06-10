import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  MARINER,
  ORANGE,
  PINK_ORANGE,
  WHITE,
} from '../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  FLEX_END,
  FLEX_START,
  ROW,
  SPACE_BETWEEN,
} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {getDimensions} from '../../utils/utils';

const {height} = getDimensions();
export const styles = StyleSheet.create({
  container: {
    zIndex: 5,
  },
  headerContainer: {
    minHeight: 0.12 * height,
    width: '100%',
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  topSection: {
    backgroundColor: WHITE,
    paddingVertical: 8,
    flexDirection: ROW,
    alignItems: CENTER,
    //justifyContent: SPACE_BETWEEN,
    marginBottom: 8,
  },
  nameContainer: {
    marginVertical: 4,
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: ORANGE,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  pinView: {
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
  },
  rightView: {
    right: 0,
    flexDirection: ROW,
    alignItems: CENTER,
  },
  rightIcon: {
    paddingHorizontal: 4,
  },
  backIcon: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginRight: 6,
  },
  loginText: {
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize10,
  },
  nameText: {
    fontFamily: fonts.family.rubik400,
    color: WHITE,
    fontSize: fonts.size.fontSize14,
  },
  boxStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  inputStyles: {
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.rubik400,
    color: CYAN_BLUE,
  },
  dropdownStyles: {
    position: ABSOLUTE,
    width: 100,
    right: 0.5,
    backgroundColor: WHITE,
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
    paddingRight: 12,
    paddingVertical: 6,
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
  searchStyle: {
    width: 8,
  },
  homeTopSection: {
    backgroundColor: WHITE,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    paddingVertical: 8,
    marginBottom: 8,
    alignItems: CENTER,
    paddingHorizontal: 16,
  },
  backContainer: {width: '20%',paddingLeft:16},
  mainContainer: {width: '60%'},
  searchIconContainer: {width: '20%', alignItems: FLEX_END, paddingRight: 16},
  titleTextStyle: {
    textAlign: CENTER,
    color: BLACK,
    fontFamily: fonts.family.montserrant800,
    fontSize: fonts.size.fontSize16,
    alignSelf: CENTER,
  },
  backButton: {
    width: 42,
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 1,
    zIndex: 1,
    shadowColor: BLACK,
  },
  loginContainer: {
    alignItems: CENTER,
    justifyContent: CENTER,
    paddingVertical: 8,
    backgroundColor: MARINER,
    borderRadius: 6,
  },
  loginTextStyle: {
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize10,
    color: WHITE,
    paddingHorizontal: 24,
  },
  nameTextStyle: {
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize14,
    color: BLACK,
    marginBottom: 4,
  },
  rowContainer: {flexDirection: ROW, alignItems: CENTER},
  mainContainerStyle: {flexDirection: ROW,maxWidth:'55%'},
  nameContainerStyle: {marginLeft: 8},
  imageStyle: {width: 50, height: 50}
});
