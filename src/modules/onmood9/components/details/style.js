import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {BLACK, CYAN_BLUE, DARK_BLUE, MARINER, ORANGE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    headingText: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize16,
      color: MARINER,
      marginBottom: 16,
    },
    descriptionText: {
      fontFamily: fonts.family.montserrat400,
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
      color: BLACK,
      fontFamily: fonts.family.montserrat400,
      fontSize: fonts.size.fontSize10,
    },
  });
};
