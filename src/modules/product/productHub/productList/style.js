import {StyleSheet} from 'react-native';
import {
  BLACK,
  BOTTICELLI,
  ORANGE,
  PALE_SKY,
  RED,
  VIVID_TANGERINE,
  WHITE,
} from '../../../../styles/colors';
import {CENTER, ROW, ROW_REVERSE} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';

const {width} = getDimensions();

const styles = () => {
  return StyleSheet.create({
    subLine: {
      borderBottomColor: VIVID_TANGERINE,
      borderBottomWidth: 2,
      flex: 1,
    },
    subCategoryNameContainer: {
      alignItems: CENTER,
      flexDirection: ROW_REVERSE,
      marginHorizontal: 16,
      marginTop: 16,
      marginBottom: 8,
    },
    subCategoryNameStyle: {
      color: BLACK,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      paddingHorizontal: 8,
    },
    subCategoryList: {
      marginHorizontal: 20,
      marginBottom: 16,
    },
    itemSeparator: {height: 24},
    subCategoryItem: {
      width: ((width - 40) * 3) / 7,
      backgroundColor: WHITE,
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 16,
    },
    categoryImage: {
      marginHorizontal: 30,
      aspectRatio: 0.77,
      width: (((width - 40) * 3) / 7 - 24) * 0.5,
    },
    separator: {
      marginVertical: 6,
      backgroundColor: BOTTICELLI,
      height: 1.5,
    },
    subCategoryDescription: {width: '100%'},
    productName: {
      maxWidth: ((width - 40) * 3) / 7 - 24,
    },
    rowContainer: {marginVertical: 8, flexDirection: ROW},
    discount: {
      marginRight: 4,
      color: RED,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
    },
    buttonContainer: {
      marginTop: 12,
      paddingHorizontal: 16,
      paddingVertical: 4,
      backgroundColor: ORANGE,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 12,
    },
    buttonText: {color: WHITE},
    finalPrice: {
      color: ORANGE,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
    },
    originalPrice: {
      color: PALE_SKY,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
    },
  });
};

export {styles, width};
