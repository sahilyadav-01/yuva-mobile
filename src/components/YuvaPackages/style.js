import {StyleSheet} from 'react-native';
import {ANAKIVA, CYAN_BLUE, MARINER} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = params => {
  return StyleSheet.create({
    itemStyle: {
      paddingTop: 20,
      paddingBottom: 16,
      paddingHorizontal: 12,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      backgroundColor: '#F0F6FF',
      borderRadius: 8,
    },
    rowItemContainer: {
      flexDirection: ROW,
    },
    detailsContainer: {
      marginLeft: 12,
    },
    addContainer: {
      padding: 8,
      backgroundColor: params?.disabled ? ANAKIVA : MARINER,
    },
    heading: {
      fontFamily: fonts.family.montserrant700,
      fontSize: fonts.size.fontSize12,
      color: CYAN_BLUE,
    },
    description: {
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize8,
      color: CYAN_BLUE,
    },
    itemGap: {
      marginBottom: params?.gap ? 8 : 0,
    },
  });
};
