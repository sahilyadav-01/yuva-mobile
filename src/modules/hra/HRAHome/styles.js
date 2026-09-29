import {StyleSheet} from 'react-native';
import {WHITE, DARK_BLUE, MARINER} from '../../../styles/colors';
import {CENTER, FLEX, FLEX_END, ROW} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    display: FLEX,
    backgroundColor: WHITE,
  },
  topContainer: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 24,
    height: 135,
    marginHorizontal: 14,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: WHITE,
  },
  subTopContainer: {
    display: FLEX,
    flexDirection: ROW,
    marginHorizontal: 14,
    paddingVertical: 18,
  },
  parentTextContainer: {
    alignItems: CENTER,
  },
  textContainerStyle: {
    color: DARK_BLUE,
    marginTop: 30,
    height: 100,
    width: 180,
    fontSize: fonts.size.fontSize14,
    fontfamily: fonts.family.montserrat600,
  },
  imageContainerStyle: {
    marginLeft: 20,
  },
  imageStyle: {
    height: 100,
    width: 130,
  },
  bottomContainer: {
    marginHorizontal: 14,
  },
  continueButtonContainer: {
    backgroundColor: MARINER,
    alignSelf: FLEX_END,
    marginRight: 14,
    marginTop: 24,
    paddingVertical: 8,
    paddingLeft: 15,
    paddingRight: 12,
    borderRadius: 8,
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  continueText: {
    color: WHITE,
    lineHeight: 15,
    fontFamily: fonts.family.monsterrant500,
    marginLeft: 7,
  },
  loaderContainer: {flex: undefined, height: '100%'},
});
