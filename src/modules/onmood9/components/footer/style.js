import {StyleSheet} from 'react-native';
import {CENTER, ROW, SPACE_AROUND} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';
import {DARK_BLUE, ORACLE, ORANGE} from '../../../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    container: {paddingTop: 28},
    bannerContainer: {
      flexDirection: ROW,
      justifyContent: SPACE_AROUND,
      alignItems: CENTER,
      paddingHorizontal: 32,
    },
    itemContainer: {width: '30%', height: 22},
    imageContainer: {width: '100%', height: '100%'},
    iconContainer: {marginHorizontal: 16},
    footerText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: DARK_BLUE,
      marginTop: 28,
      alignSelf: CENTER,
    },
    yuvaTextColor: {color: ORANGE},
    onMood9TextColor: {color: ORACLE},
  });
};
