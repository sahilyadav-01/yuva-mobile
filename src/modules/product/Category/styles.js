import {StyleSheet} from 'react-native';
import {fonts} from '../../../styles/fonts';
import {AMBER, CYAN_BLUE} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    categoryName: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize16,
      lineHeight: 24,
      color: CYAN_BLUE,
    },
    listStyle: {marginTop: 24, paddingHorizontal: 28},
    separator: {height: 24},
    itemContainer: {
      height: 96,
      backgroundColor: AMBER,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      flexDirection: ROW,
      alignItems: CENTER,
    },
    imageStyle: {width: 80, height: '100%'},
    rowContainer: {
      flexDirection: ROW,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 20,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    loaderContainer: {
      flex:1,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    errorText: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: CYAN_BLUE,
    }
  });
};
