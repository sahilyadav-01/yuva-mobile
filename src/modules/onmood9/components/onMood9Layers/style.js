import {StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {CYAN_BLUE, ORANGE, SHUTTLE_GREY, WHITE} from '../../../../styles/colors';
import {CENTER, ROW} from '../../../../styles/constants';

export const styles = () => {
  return StyleSheet.create({
    headingText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize16,
      color: ORANGE,
      marginBottom: 16,
    },
    heading: {
      fontFamily: fonts.family.rubik600,
      fontSize: fonts.size.fontSize12,
      color: SHUTTLE_GREY,
    },
    body: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize12,
      color: SHUTTLE_GREY,
    },
    indexContainer: {
      height: 48,
      width: 48,
      borderRadius: 24,
      backgroundColor: SHUTTLE_GREY,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    rowView: {flexDirection: ROW},
    detailsContainer: {maxHeight: 48, marginLeft: 16},
    separatorLine: {
      height: 56,
      width: 4,
      backgroundColor: CYAN_BLUE,
      marginLeft: 22,
    },
    indexText: {
      fontFamily: fonts.family.rubik400,
      fontSize: fonts.size.fontSize14,
      color: WHITE,
    },
    listContainerStyle: {paddingBottom: 36}
  });
};
