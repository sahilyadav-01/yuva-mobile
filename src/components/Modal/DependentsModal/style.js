import {StyleSheet} from 'react-native';
import {BLACK, MARINER, WHITE} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';
import {getDimensions, getWindowDimensions} from '../../../utils/utils';

export const styles = () => {
  const {height: windowHeight, width} = getWindowDimensions();
  return StyleSheet.create({
    selectText: {
      marginTop: 8,
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
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
    listStyle: {zIndex: 10, elevation: 10, height: windowHeight * 0.45},
    dependentItemContainer: {
      paddingLeft: 12,
      paddingRight: 16,
      backgroundColor: WHITE,
      elevation: 20,
      zIndex: 20,
      borderRadius: 12,
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowOffset: {height: 1},
      paddingVertical: 8,
      marginHorizontal: 6,
    },
    dependentNameContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
      alignItems: CENTER,
    },
    itemSeparatorStyle: {height: 24},
    primaryText: {
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
      lineHeight: 18,
    },
    secondaryText: {
      fontFamily: fonts.family.montserrat600,
      color: MARINER,
      lineHeight: 21,
    },
    emptyDependentContainer: {height: 1, paddingVertical: 0},
    headingContainer: {
      marginTop: 8,
      marginHorizontal: 6,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    addMemberContainer: {
      marginTop: 24,
      justifyContent: CENTER,
      alignSelf: CENTER,
      backgroundColor: MARINER,
      width: width - 32,
      paddingVertical: 12,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 8,
    },
    addMemberText: {
      fontFamily: fonts.family.montserrat600,
      lineHeight: 21,
      fontSize: fonts.size.fontSize14,
      color: WHITE,
    },
  });
};
