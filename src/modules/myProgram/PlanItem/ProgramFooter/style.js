import {StyleSheet} from 'react-native';
import { CYAN_BLUE, ORANGE } from '../../../../styles/colors';
import { CENTER, ROW } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

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
      lineHeight: 18,
    },
    arrowContainer: {padding: 4, justifyContent: CENTER, alignSelf: CENTER},
    footerContainer: {flexDirection: ROW, paddingBottom:10},
    headingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 16,
      color: CYAN_BLUE,
    },
    footerColumnStyle: {
      borderRightWidth: 0,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      borderColor: CYAN_BLUE,
    },
    rightView: {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      borderColor: CYAN_BLUE,
    },
  });
};
