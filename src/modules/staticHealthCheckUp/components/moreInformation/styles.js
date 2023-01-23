import {StyleSheet} from 'react-native';
import {CYAN_BLUE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
export const styles = StyleSheet.create({
  moreContainer: {
    alignItems: CENTER,
    marginTop: '5%',
  },
  moreInfoContainer: {
    borderRadius: 8,
    borderWidth: 1,
    height: 44,
    width: '95%',
    justifyContent: CENTER,
  },
  moreInfoText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
    fontFamily: fonts.family.fontFamilyRubix,
    marginLeft: 55,
  },
});
