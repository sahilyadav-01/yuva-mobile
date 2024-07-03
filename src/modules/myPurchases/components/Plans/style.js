import {StyleSheet} from 'react-native';
import {BLACK_LIGHT_OPACITY, GALLERY, INDIGO} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    itemContainer: {
      borderRadius: 6,
      paddingTop: 21,
      borderWidth: 2,
      borderColor: BLACK_LIGHT_OPACITY,
      width: '100%',
    },
    serviceText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      marginBottom: 5,
      color: INDIGO,
      marginLeft: 16,
    },
    usageText: {
      marginLeft: 16,
      marginBottom: 16,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
      color:INDIGO,
    },
    rowContainer: {flexDirection: ROW},
    iconContainer: {marginLeft: 16,justifyContent:CENTER},
    inputStyles: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      lineHeight: 18,
      color: INDIGO,
    },
    boxStyles: {
      paddingVertical: 4,
      paddingLeft: 12,
      borderRadius: 4,
      borderColor: GALLERY,
      borderWidth: 2,
      alignItems: CENTER,
    },
    dropdownItemStyles: {paddingLeft: 12, paddingVertical: 0},
    dropdownContainer: {flex:1,marginBottom:16,marginHorizontal:10}
  });
};
