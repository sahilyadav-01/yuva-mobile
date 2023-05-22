import {StyleSheet} from 'react-native';
import {
  CYAN_BLUE,
  DARK_GREY,
  LIGHT_GREYISH_RED,
  ORANGE,
  WHITE,
} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';
import {getWindowDimensions} from '../../../utils/utils';

export const styles = () => {
  const {height: windowHeight, width: windowWidth} = getWindowDimensions();
  return StyleSheet.create({
    selectText: {
      marginTop: 8,
      fontFamily: fonts.family.rubik500,
      color: CYAN_BLUE,
      lineHeight: 16,
      marginHorizontal: 6,
    },
    valueStyle: {
      alignSelf: CENTER,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: CYAN_BLUE,
    },
    headingContainer: {
      marginTop: 8,
      marginHorizontal: 6,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    listHeadingText: {
      fontFamily: fonts.family.rubik400,
      color: CYAN_BLUE,
      fontSize: fonts.size.fontSize12,
      lineHeight: 21,
    },
    textInputStyle: {
      backgroundColor: LIGHT_GREYISH_RED,
      paddingVertical: 10,
      paddingLeft: 12,
      borderRadius: 6,
      color: DARK_GREY,
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
    },
    listStyle: {marginVertical: 24, height: windowHeight * 0.45},
    itemSeparatorStyle: {height: 24, width: '100%'},
    buttonContainer: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      position: 'absolute',
      bottom: 0,
      paddingVertical: 12,
      width: windowWidth,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: ORANGE,
    },
    buttonTextStyle: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize16,
      lineHeight: 24,
      color: WHITE,
    },
  });
};
