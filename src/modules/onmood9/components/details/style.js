import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CYAN_BLUE, DARK_BLUE, ORANGE} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    headingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize16,
      color: ORANGE,
      marginBottom: 16,
    },
    descriptionText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: DARK_BLUE,
    },
    container: {
      marginTop: 4,
      paddingTop: 16,
      paddingBottom: 20,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    itemContainer: {width: '30%'},
    imageStyle: {width: '100%', height: 100},
    imageText: {
      marginTop: 4,
      textAlign: CENTER,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
    },
  });
};
