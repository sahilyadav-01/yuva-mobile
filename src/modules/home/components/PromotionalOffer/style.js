import {StyleSheet} from 'react-native';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {GAINSBORO_LIGHT, INDIGO_LIGHT, WHITE} from '../../../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    itemContainer: {
      width: 150,
      paddingVertical: 16,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: GAINSBORO_LIGHT,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: WHITE,
      minHeight: 128,
      maxHeight: 140,
    },
    text: {
      textAlign: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: INDIGO_LIGHT,
    },
    spacing: {height: 16},
    heading: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize14,
      color: INDIGO_LIGHT,
      marginBottom: 8,
    },
    listStyle: {flex: 1},
    itemSeparatorStyle: {width: 16}
  });
};
