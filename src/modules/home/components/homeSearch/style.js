import {Dimensions, StyleSheet} from 'react-native';
import {
  ALTO_SECONDARY,
  BLACK,
  DARK_GRAY,
  KASHMIR_BLUE,
  LIGHT_BLACK,
  PORCELAIN,
  WHITE,
  ZUMTHOR,
} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  ROW,
  ROW_REVERSE,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {getPlatform} from '../../../../utils/utils';

export const styles = () => {
  const {height} = Dimensions.get('screen');
  const {isIOS} = getPlatform();
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 16},
    rowContainer: {
      marginHorizontal: 4,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: ALTO_SECONDARY,
      flexDirection: ROW,
      paddingHorizontal: 20,
      paddingVertical: 12,
      justifyContent: SPACE_BETWEEN,
      flex: 0.36,
      marginBottom: 12,
      backgroundColor: PORCELAIN,
    },
    searchContainer: {justifyContent: CENTER},
    textInputStyle: {
      flex: 1,
      paddingVertical: isIOS ? 4 : 0,
      justifyContent: CENTER,
      color: '#8391A1',
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize15,
    },
    popularSearchContainer: {
      paddingHorizontal: 0,
    },
    popularText: {
      fontFamily: fonts.family.montserrat600,
      fontSize: fonts.size.fontSize18,
      color: BLACK,
      marginBottom: 12,
    },
    searchRow: {
      paddingLeft: 8,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    listItem: {
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize12,
      color: BLACK,
      lineHeight: 18,
    },
    listHeaderStyle: {
      marginBottom: 8,
    },
    iconContainer: {
      alignItems: CENTER,
      paddingTop: 12,
      borderRadius: 12,
      backgroundColor: ZUMTHOR,
      width: '20%',
    },
    iconText: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: BLACK,
      marginTop: 8,
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
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 0.5,
      borderColor: LIGHT_BLACK,
      backgroundColor: '#F9F9F9',
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
    listContainer: {marginTop: 24, flex: 1},
    headerContainer: {flex: 1, marginVertical: 12, justifyContent: SPACE_BETWEEN},
    spaceContainer: {flex: 0.1},
    searchResultContainer: {
      position: ABSOLUTE,
      top: 48,
      maxHeight: height * 0.3,
      width: '100%',
      backgroundColor: WHITE,
      paddingHorizontal: 4,
      paddingTop: 12,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 16,
      zIndex: 70,
      elevation: 70,
      borderColor: DARK_GRAY,
    },
    crossContainer: {
      flexDirection: ROW_REVERSE,
      marginBottom: 12,
      justifyContent: SPACE_BETWEEN,
    },
    searchResultListContainer: {marginBottom: 12},
    elasticSearchEmptyText: {
      alignSelf: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize16,
      color: KASHMIR_BLUE,
    },
    flatListStyle: {height: 160},
  });
};
