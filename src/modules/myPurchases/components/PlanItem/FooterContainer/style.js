import {StyleSheet} from 'react-native';
import {CENTER, ROW} from '../../../../../styles/constants';
import {CYAN_BLUE, ORANGE} from '../../../../../styles/colors';
import {fonts} from '../../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: ROW,
      borderWidth: 1,
      borderColor: CYAN_BLUE,
      flex: 1,
      paddingVertical: 12,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    textStyle: {
      marginRight: 12,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: ORANGE,
      lineHeight: 18
    },
    arrowContainer: {padding: 4, justifyContent: CENTER, alignSelf: CENTER},
    footerContainer: {flexDirection: ROW},
  });
};
