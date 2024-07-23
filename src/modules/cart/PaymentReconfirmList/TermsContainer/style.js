import {StyleSheet} from 'react-native';
import {ROW} from '../../../../styles/constants';
import {CYAN_BLUE} from '../../../../styles/colors';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: ROW,
    marginTop: 8,
  },
  termsAndCondtion: {
    width: '90%',
    marginTop: 2,
    marginRight: 36,
    color: CYAN_BLUE,
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize10,
  },
  checkBoxContainer: {
    borderColor: CYAN_BLUE,
  },
  termsTextStyle: {
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize12,
  },
});
