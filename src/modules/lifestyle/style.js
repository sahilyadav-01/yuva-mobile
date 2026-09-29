import {StyleSheet} from 'react-native';
import {BLACK, MARINER, WHITE} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = addToCartLoad => {
  return StyleSheet.create({
    scrollContainer: {flex: 1},
    container: {
      flex: 1,
      paddingHorizontal: 14,
      backgroundColor: WHITE,
      marginBottom: 24,
    },
    boxStyles: {marginTop: 36, borderRadius: 12, backgroundColor: WHITE},
    dropdownInputStyles: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: 14,
      lineHeight: 21,
      color: BLACK,
    },
    dropdownStyles: {backgroundColor: WHITE},
    buttonContainer: {
      paddingVertical: 12,
      backgroundColor: MARINER,
      borderRadius: 8,
      alignItems: CENTER,
      justifyContent: CENTER,
      marginTop: 28,
    },
    buttonText: {
      fontFamily: fonts.family.rubik500,
      lineHeight: 24,
      fontSize: fonts.size.fontSize16,
      color: WHITE,
    },
    testsContainer: {marginTop: 36},
    packagesContainer: {marginTop: 48},
    screenStyle: {height: addToCartLoad ? '100%' : undefined},
    childContainerStyle: {flex: addToCartLoad ? 1 : undefined},
    addToCartLoader: {alignItems: CENTER, justifyContent: CENTER},
  });
};
