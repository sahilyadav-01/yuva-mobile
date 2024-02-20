import {StyleSheet} from 'react-native';
import {CENTER} from '../../../styles/constants';
import {FLASH_WHITE} from '../../../styles/colors';

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
  });
};
