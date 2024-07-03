import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {BLACK} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 12,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  rowContainer: {flexDirection: ROW,alignItems:CENTER},
  paymentText: {
    marginLeft: 4,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
});
