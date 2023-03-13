import {StyleSheet} from 'react-native';
import {CYAN_BLUE, MISCHKA, WHITE} from '../../styles/colors';
import {CENTER, ROW} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1,backgroundColor:WHITE},
    drawerContentContainer: {marginVertical: 28, paddingHorizontal: 16},
    textStyle: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 17,
      color: CYAN_BLUE,
      marginLeft: 15,
    },
    secondarySeparator: {
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: MISCHKA,
      marginHorizontal: 16,
    },
    logoutContainer: {marginHorizontal: 16,flexDirection:ROW},
    separator: {height: 32},
    rowContainer: {flexDirection:ROW,alignItems:CENTER}
  });
};
