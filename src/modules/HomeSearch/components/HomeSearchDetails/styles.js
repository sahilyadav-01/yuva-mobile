import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CYAN_BLUE} from '../../../../styles/colors';
import { CENTER } from '../../../../styles/constants';

export const styles = addToCartLoad => {
  return StyleSheet.create({
    ScrollViewContainerStyle: {
      paddingBottom: '100%',
    },
    SearchText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
      marginTop: 5,
    },
    SearchTextView: {
      marginTop: 24,
      marginHorizontal: 14,
    },
    packageContainerStyle: {
      marginVertical: 20,
      marginHorizontal: 16,
    },
    screenContainer: {paddingHorizontal: 14, paddingVertical: 24},
    childContainerStyle: {flex: addToCartLoad ? 1 : undefined},
    addToCartLoader: {alignItems:CENTER,justifyContent:CENTER},
    subCategoryList: {
      marginHorizontal: 20,
      marginBottom: 16,
    },
    itemSeparator: {height: 24},
  });
};
