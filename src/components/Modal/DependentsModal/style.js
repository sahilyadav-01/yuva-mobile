import {StyleSheet} from 'react-native';
import {CYAN_BLUE, ORANGE, SHADOW, WHITE} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = () => {
  return StyleSheet.create({
    selectText: {
      marginTop: 8,
      fontFamily: fonts.family.rubik500,
      color: CYAN_BLUE,
      lineHeight: 16,
      marginHorizontal: 6,
    },
    dependentContainer: {
      marginTop: 20,
      backgroundColor: WHITE,
      elevation: 11,
      zIndex: 11,
      flexDirection: ROW,
      paddingLeft: 12,
      paddingRight: 14,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
      paddingVertical: 8,
      borderRadius: 12,
      shadowColor: 'rgba(0,0,0,0.3)',
      marginHorizontal: 6,
    },
    listStyle: {zIndex: 10, elevation: 10},
    dependentItemContainer: {
      paddingLeft: 12,
      paddingRight: 16,
      backgroundColor: WHITE,
      elevation: 20,
      zIndex: 20,
      borderRadius: 12,
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowOffset:{height:1},
      paddingVertical: 8,
      marginHorizontal: 6,
    },
    dependentNameContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    itemSeparatorStyle: {height: 24},
    primaryText: {fontFamily: fonts.family.rubik500, color:CYAN_BLUE,lineHeight:18},
    secondaryText: {fontFamily: fonts.family.rubik600, color:ORANGE,lineHeight:21},
    emptyDependentContainer: {height:1,paddingVertical:0}
  });
};
