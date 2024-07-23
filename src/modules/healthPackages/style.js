import {StyleSheet} from 'react-native';
import {
  BLACK,
  WHITE_OPACITY,
  KASHMIR_BLUE,
  WHITE,
  MARINER,
} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = addToCartLoad => {
  return StyleSheet.create({
    screenContainer: {paddingHorizontal: 14, paddingVertical: 24},
    dropdownContainerStyle: {
      backgroundColor: WHITE_OPACITY,
      marginTop: 12,
      borderRadius: 12,
      borderWwidth: 0.1,
      borderColor: BLACK,
      alignItems: CENTER,
    },
    dropdownTextStyle: {
      color: BLACK,
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize14,
    },
    buttonContainer: {
      backgroundColor: MARINER,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 10,
      paddingVertical: 12,
    },
    buttonText: {
      fontFamily: fonts.family.rubik500,
      lineHeight: 24,
      fontSize: fonts.size.fontSize16,
      color: WHITE,
    },
    packageContainerStyle: {
      marginVertical: 36,
    },
    screenStyle: {height: addToCartLoad ? '100%' : undefined},
    childContainerStyle: {flex: addToCartLoad ? 1 : undefined},
    addToCartLoader: {alignItems: CENTER, justifyContent: CENTER},
  });
};
