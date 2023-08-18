import { StyleSheet } from 'react-native';
import { BLACK, CYAN_BLUE, FLASH_WHITE, INDIGO_LIGHT, MISCHKA, PALE_PEACH, WHITE } from '../../styles/colors';
import { ABSOLUTE, CENTER, COLUMN, ROW } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: WHITE },
    boxStyle: {
      paddingTop: 0,
      borderWidth: 0,
      paddingHorizontal: 10,
      minWidth: 75,
    },
    inputStyles: {
      fontSize: fonts.size.fontSize10,
      fontFamily: fonts.family.rubik400,
      color: CYAN_BLUE,
    },
    dropdownStyles: {
      marginTop: 0,
      borderWidth: 0,
      borderRadius: 4,
      position: ABSOLUTE,
      backgroundColor: WHITE,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowColor: BLACK,
      elevation: 3,
      width: '150%',
    },
    /**Services */
    servicesSubContainer: {
      backgroundColor: WHITE,
      flexDirection: ROW,
      paddingHorizontal: 16
    },
    /**Services */

    /**lifeStyle packages */
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
    lifeStyPackagesSubContainer: {
      backgroundColor: PALE_PEACH,
      flexDirection: ROW,
      paddingTop: 12,
      paddingBottom: 36,
      paddingHorizontal: 26
    },
    /**lifeStyle packages */
  });
};
