import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  DARK_BLUE,
  ORANGE,
  PALE_ORANGE,
  VERY_LIGHT_ORANGE,
  WHITE,
} from '../../../styles/colors';
import {CENTER, ROW} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    flex: 1,
  },
  searchConatiner: {
    marginVertical: 10,
    minHeight: 42,
    backgroundColor: VERY_LIGHT_ORANGE,
    borderColor: ORANGE,
    borderWidth: 0.5,
    borderRadius: 8,
    flexDirection: ROW,
    paddingHorizontal: 12,
    alignItems: CENTER,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 10,
  },
  searchTextInputStyle: {
    flex: 1,
    paddingLeft: 20,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.rubik500,
    color: PALE_ORANGE,
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
    marginLeft: '5%',
  },
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
    flex: 1,
  },
});
