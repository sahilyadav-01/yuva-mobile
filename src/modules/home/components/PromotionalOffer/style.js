import {StyleSheet} from 'react-native';
import {CENTER, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {
  BLACK,
  GAINSBORO_LIGHT,
  INDIGO_LIGHT,
  ORANGE,
  WHITE,
} from '../../../../styles/colors';

export const styles = alternate => {
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
      backgroundColor: alternate ? WHITE : ORANGE,
      minHeight: 120,
      maxHeight: 132,
      width: 150,
      paddingHorizontal: 12,
    },
    text: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: alternate ? INDIGO_LIGHT : WHITE,
    },
    buttonText: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: alternate ? BLACK : ORANGE,
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
      backgroundColor: alternate ? ORANGE : WHITE,
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
