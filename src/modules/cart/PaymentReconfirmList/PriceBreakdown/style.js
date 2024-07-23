import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {BLACK} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      marginTop: 24,
    },
    headingText: {
      fontFamily: fonts.family.montserrant700,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
      marginBottom: 16,
    },
    rowView: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 16,
      alignItems: CENTER,
    },
    priceText: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
    },
  });
};
