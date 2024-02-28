import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_EVENLY} from '../../../styles/constants';
import {BLACK, FLASH_WHITE, ORANGE, WHITE} from '../../../styles/colors';
import {fonts} from '../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: FLASH_WHITE,
    },
    subCategoryList: {
      marginHorizontal: 20,
      marginBottom: 16,
    },
    itemSeparator: {height: 24},
    loaderContainer: {
      flex: 1,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    filterContainer: {
      marginBottom: 8,
      paddingVertical: 12,
      paddingHorizontal: 8,
      flexDirection: ROW,
      justifyContent: SPACE_EVENLY,
    },
    filterCard: {
      padding: 4,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: BLACK,
    },
    filterCardActive: {
      backgroundColor: ORANGE,
    },
    filterCardInactive: {
      backgroundColor: WHITE,
    },
    filterText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
    },
    filterTextActive: {
      color: WHITE,
    },
    filterTextInactive: {
      color: BLACK,
    },
    advancedFilters: {
      paddingVertical: 4,
      paddingHorizontal:8,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: BLACK,
    },
  });
};
