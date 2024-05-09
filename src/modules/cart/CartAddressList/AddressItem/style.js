import {StyleSheet} from 'react-native';
import {
  CENTER,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {BLACK, WHITE} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: ROW_REVERSE,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
    backgroundColor: WHITE,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#D1D1D1',
  },
  contactContainer: {flexDirection: ROW, alignItems: CENTER},
  numberText: {
    marginLeft: 4,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize10,
    color: BLACK,
  },
  addressContainer: {flexDirection: ROW, flex: 1, alignItems: CENTER},
  addressDetails: {marginLeft: 4, flex: 1},
  addressType: {
    marginBottom: 4,
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  addressText: {
    maxWidth: '70%',
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize10,
    color: BLACK,
  },
});
