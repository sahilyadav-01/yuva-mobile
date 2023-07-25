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
      marginVertical: 36
    },
    itemContainer: {marginRight: 24},
    imageStyle: {height: 100},
    imageText: {
      marginTop: 12,
      textAlign: CENTER,
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize10,
    },
  });
};
