import { StyleSheet } from 'react-native';
import { BLACK, CYAN_BLUE, TURQUOISE_LAGOON, WHITE } from '../../../styles/colors';
import { CENTER } from '../diagnostics/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  topViewStyle: {
    alignItems: CENTER,
    justifyContent: CENTER,
    marginTop: 10,
  },
  middleViewStyle: {
    alignItems: CENTER,
    paddingTop: 20,
  },
  textStyleTop1: {
    color: TURQUOISE_LAGOON,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize24,
    paddingVertical: 10,
  },
  textStyleTop2: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize24,
    paddingVertical: 10,
  },
  bottomContainer: {
    paddingVertical: 8,
    paddingHorizontal: 26,
    marginTop: 14,
    borderRadius: 8,
    backgroundColor: WHITE,
    borderWidth: 1,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textStyleBottom1: {
    color: TURQUOISE_LAGOON,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize18,
  },
  textStyleBottom2: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize18,
  },
  bottomViewStyle: {
    flex: 1,
    alignItems: CENTER,
    justifyContent: CENTER,
  }
});