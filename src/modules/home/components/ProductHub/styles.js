import {StyleSheet} from 'react-native';
import {
  BLACK,
  INDIGO_LIGHT,
  ORANGE,
  PALE_PEACH,
  VIVID_TANGERINE,
  WHITE,
} from '../../../../styles/colors';
import {
  CENTER,
  HIDDEN,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getDimensions} from '../../../../utils/utils';

export const styles = () => {
  const {width} = getDimensions();
  return StyleSheet.create({
    PopularHealthCheckups: {
      alignItems: CENTER,
      marginTop: 28,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginHorizontal: 16,
      marginBottom: 16,
    },
    LandingPageText1: {
      color: INDIGO_LIGHT,
      fontFamily: fonts.family.rubik700,
      fontSize: fonts.size.fontSize14,
    },
    textContainer: {
      flex: 1,
      flexDirection: ROW_REVERSE,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      overflow: HIDDEN,
    },
    LandingPageText2: {
      color: INDIGO_LIGHT,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
    },
    line: {
      borderBottomColor: VIVID_TANGERINE,
      borderBottomWidth: 2,
      flex: 1,
    },
    subLine: {
      borderBottomColor: VIVID_TANGERINE,
      borderBottomWidth: 2,
      flex: 1,
    },
    CarouselContainerStyle: {
      backgroundColor: PALE_PEACH,
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
    categoryNameContainer: {
      alignItems: CENTER,
      padding: 16,
    },
    categoryName: {
      color: ORANGE,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
    },
    categoryHeadingContainer: {
      flexDirection: ROW,
      paddingHorizontal: 16,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    subCategoryList: {
      marginHorizontal: 20,
      marginBottom: 16,
    },
    itemSeparator: {width: (width - 40) / 7},
    subCategoryItem: {
      width: ((width - 40) * 3) / 7,
      backgroundColor: WHITE,
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 16,
    },
    categoryImage: {marginHorizontal: 30},
    separator: {
      marginVertical: 6,
      backgroundColor: '#C7D6E4',
      height: 1.5,
    },
    subCategoryDescription: {width: '100%'},
    productName: {
      maxWidth: ((width - 40) * 3) / 7 - 24,
    },
    rowContainer: {marginVertical: 8, flexDirection: ROW},
    discount: {marginRight: 4},
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
  });
};
