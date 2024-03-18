import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_EVENLY} from '../../../styles/constants';
import {BLACK, FLASH_WHITE, ORANGE, WHITE} from '../../../styles/colors';
import {fonts} from '../../../styles/fonts';
import {getDimensions} from '../../../utils/utils';

const {height} = getDimensions();

export const styles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: FLASH_WHITE,
    },
    subCategoryList: {
      marginHorizontal: 20,
      marginBottom: 16,
      height: height * 0.7,
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
      width: '100%',
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
      maxWidth: '25%',
    },
    filterCardInactive: {
      backgroundColor: WHITE,
      maxWidth: '25%',
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
      paddingHorizontal: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: BLACK,
    },
    listLoader: {
      marginTop: 8,
      alignItems: CENTER,
    },
    advancedFilterCard: {padding: 0, height: 32, width: 32},
  });
};
