import { StyleSheet } from 'react-native';
import { INDIGO_LIGHT } from '../../../../styles/colors';
import { COLUMN, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    lifeStyPackagesMainContainer: {
      marginTop: 28,
      flexDirection: COLUMN
    },
    lifeStyPackagesTextContainer: {
      marginLeft: 20,
      fontSize: fonts.size.fontSize14,
      fontFamily: fonts.family.rubik700,
      color: INDIGO_LIGHT,
      paddingBottom: 14
    },
    lifeStyPackagesSubContainer : {
      flexDirection: ROW,
      paddingTop: 12,
      paddingBottom: 36,
      paddingHorizontal: 26
    },
  });
};