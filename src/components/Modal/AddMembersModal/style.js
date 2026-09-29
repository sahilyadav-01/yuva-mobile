import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, MARINER, WHITE, ZIRCON} from '../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';
import {getWindowDimensions} from '../../../utils/utils';

export const styles = () => {
  const {height: windowHeight, width: windowWidth} = getWindowDimensions();
  return StyleSheet.create({
    selectText: {
      marginTop: 8,
      fontFamily: fonts.family.montserrant700,
      color: BLACK,
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
      marginHorizontal: 22,
      flexDirection: ROW,
      justifyContent: SPACE_BETWEEN,
    },
    listHeadingText: {
      fontFamily: fonts.family.monsterrant500,
      color: BLACK,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
    },
    textInputStyle: {
      paddingVertical: 10,
      paddingLeft: 12,
      borderRadius: 6,
      lineHeight: 21,
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
      borderWidth: 0.5,
      backgroundColor: ZIRCON,
      borderColor: BLACK,
    },
    listStyle: {marginVertical: 24, height: windowHeight * 0.45},
    itemSeparatorStyle: {height: 24, width: '100%'},
    buttonContainer: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      paddingVertical: 12,
      width: windowWidth - 32,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: MARINER,
      marginHorizontal: 0,
      marginBottom: 24,
      alignSelf: CENTER,
    },
    buttonTextStyle: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize16,
      lineHeight: 24,
      color: WHITE,
    },
    itemContainer: {marginHorizontal: 16},
    inputStyle: {
      fontFamily: fonts.family.monsterrant500,
      fontSize: fonts.size.fontSize16,
      color: BLACK,
    },
  });
};
