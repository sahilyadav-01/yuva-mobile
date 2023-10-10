import {StyleSheet} from 'react-native';
import {BLACK, INDIGO_LIGHT, KASHMIR_BLUE} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 16 /*, paddingTop: 12*/},
    rowContainer: {
      marginHorizontal: 8,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: INDIGO_LIGHT,
      flexDirection: ROW,
      padding: 2,
      justifyContent: SPACE_BETWEEN,
      marginBottom: 20,
    },
    searchContainer: {justifyContent: CENTER},
    textInputStyle: {
      flex: 1,
      paddingVertical: 6,
      justifyContent: CENTER,
    },
    popularSearchContainer: {
      paddingTop: 4,
      paddingBottom: 32,
      borderRadius: 12,
      borderWidth: 0.3,
      borderColor: INDIGO_LIGHT,
      paddingLeft: 16,
      paddingRight: 24,
      marginBottom: 12,
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
      maxWidth: 40,
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
    },
    emptyContainerView: {
      height: 160,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    listContainer: {height: 160}
  });
};
