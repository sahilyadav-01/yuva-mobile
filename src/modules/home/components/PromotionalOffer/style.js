import {StyleSheet} from 'react-native';
import {CENTER, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {GAINSBORO_LIGHT, INDIGO_LIGHT, ORANGE, WHITE} from '../../../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    itemContainer: {
      borderRadius: 20,
      borderWidth: 1,
      borderColor: GAINSBORO_LIGHT,
      alignItems: CENTER,
      justifyContent: SPACE_BETWEEN,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: WHITE,
      minHeight: 118,
      maxHeight: 130,
      width: 150,
      paddingHorizontal: 12
    },
    text: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: INDIGO_LIGHT,
    },
    buttonText: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: INDIGO_LIGHT,
      color: WHITE
    },
    spacing: {height: 16},
    heading: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: INDIGO_LIGHT,
      marginBottom: 8,
    },
    listStyle: {flex: 1},
    itemSeparatorStyle: {width: 16},
    buttonContainer: {
      backgroundColor: ORANGE,
      borderColor: ORANGE,
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 2,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
  });
};
