import {StyleSheet} from 'react-native';
import {
  BLACK,
  CYAN_BLUE,
  INDIGO_LIGHT,
  KASHMIR_BLUE,
  MISCHKA,
  WHITE,
} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1, backgroundColor: WHITE},
    drawerContentContainer: {flex: 1, marginTop: 32, paddingHorizontal: 20},
    textStyle: {
      fontFamily: fonts.family.montserrant700,
      fontSize: fonts.size.fontSize16,
      lineHeight: 17,
      color: BLACK,
    },
    headingStyle: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: INDIGO_LIGHT,
    },
    contentStyle: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
      maxWidth: '70%',
    },
    secondarySeparator: {
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: MISCHKA,
      marginHorizontal: 16,
    },
    logoutContainer: {marginHorizontal: 16, flexDirection: ROW},
    separator: {borderWidth: 0.5, marginTop: 16, borderColor: KASHMIR_BLUE},
    rowContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      flex: 1,
      marginLeft: 24,
      alignItems: CENTER,
    },
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: 100,
    },
    itemContainer: {
      paddingVertical: 12,
      borderWidth: 0.5,
      borderRadius: 8,
      flexDirection: ROW,
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: '#F9F9F9',
      borderColor: '#E9E9E9',
    },
    descriptionContainer: {marginLeft: 28, flex: 1},
  });
};
