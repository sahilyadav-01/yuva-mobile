import {Dimensions, StyleSheet} from 'react-native';
import {
  BLACK,
  INDIGO_LIGHT,
  KASHMIR_BLUE,
  MANATEE,
  WHITE,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  const {height} = Dimensions.get('screen');
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 16},
    rowContainer: {
      marginHorizontal: 8,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: INDIGO_LIGHT,
      flexDirection: ROW,
      padding: 2,
      justifyContent: SPACE_BETWEEN,
      flex: 0.36,
      marginBottom: 20,
    },
    searchContainer: {justifyContent: CENTER},
    textInputStyle: {
      flex: 1,
      paddingVertical: 6,
      justifyContent: CENTER,
      color: MANATEE,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize10
    },
    popularSearchContainer: {
      paddingTop: 4,
      paddingBottom: 32,
      borderRadius: 12,
      borderWidth: 0.3,
      borderColor: INDIGO_LIGHT,
      paddingLeft: 16,
      paddingRight: 24,
      flex: 0.7,
    },
    popularText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize12,
      color: KASHMIR_BLUE,
      marginBottom: 4,
    },
    searchRow: {
      paddingLeft: 8,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    listItem: {
      fontFamily: fonts.family.rubik300,
      fontSize: fonts.size.fontSize12,
      color: KASHMIR_BLUE,
      lineHeight: 18,
    },
    listHeaderStyle: {
      marginBottom: 8,
    },
    iconContainer: {
      alignItems: CENTER,
    },
    iconText: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: BLACK,
    },
    searchRowContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 2,
      alignItems: CENTER,
    },
    clearText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: KASHMIR_BLUE,
    },
    resultItem: {
      paddingTop: 6,
      paddingBottom: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: KASHMIR_BLUE,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    listItemContainer: {
      paddingTop: 6,
      paddingBottom: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: KASHMIR_BLUE,
    },
    searchRowSpace: {
      marginTop: 16,
      flex: 1,
    },
    emptyContainerView: {
      height: 160,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    listContainer: {flex: 1},
    headerContainer: {flex: 1, marginBottom: 12, justifyContent: SPACE_BETWEEN},
    spaceContainer: {flex: 0.1},
    searchResultContainer: {
      position: ABSOLUTE,
      top: 48,
      maxHeight: height * 0.5,
      width: '100%',
      backgroundColor: WHITE,
      paddingHorizontal: 4,
      paddingTop: 12,
      borderWidth: 0.5,
      borderRadius: 12,
    },
    crossContainer: {flexDirection: ROW_REVERSE, marginBottom: 12},
    searchResultListContainer: {height: '100%'},
    elasticSearchEmptyText: {
      alignSelf: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize16,
      color: KASHMIR_BLUE,
    },
    flatListStyle: {height: 160},
  });
};
