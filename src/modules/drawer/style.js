import {StyleSheet} from 'react-native';
import {CYAN_BLUE, WHITE} from '../../styles/colors';
import {FLEX_START, ROW} from '../../styles/constants';
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
    },
    secondarySeparator: {
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#D5D9DF',
      marginHorizontal: 16,
    },
    logoutContainer: {marginHorizontal: 16},
    separator: {height: 32},
  });
};
