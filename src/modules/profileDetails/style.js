import {StyleSheet} from 'react-native';
import {CYAN_BLUE, INDIGO_LIGHT, KASHMIR_BLUE, MISCHKA, WHITE} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1,backgroundColor:WHITE},
    drawerContentContainer: {flex:1,paddingTop: 28, paddingHorizontal: 20},
    textStyle: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 17,
      color: INDIGO_LIGHT,
    },
    headingStyle: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: INDIGO_LIGHT,
    },
    contentStyle: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
      color: KASHMIR_BLUE,
      maxWidth: '70%',
    },
    secondarySeparator: {
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: MISCHKA,
      marginHorizontal: 16,
    },
    logoutContainer: {marginHorizontal: 16,flexDirection:ROW},
    separator: {borderWidth:0.5,marginTop: 16, borderColor: KASHMIR_BLUE},
    rowContainer: {flexDirection:ROW,justifyContent:SPACE_BETWEEN,marginTop:4},
    contentContainerStyle: {
      flexGrow: 1,
       paddingBottom: 100,
    },
    itemContainer: {paddingTop:16,flexDirection:ROW,flex:1},
    descriptionContainer: {marginLeft: 28,flex:1}
  });
};
