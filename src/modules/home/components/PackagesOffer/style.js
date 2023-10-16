import {Dimensions, StyleSheet} from 'react-native';
import {fonts} from '../../../../styles/fonts';
import {BLACK, CYAN_BLUE, ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

export const styles = () => {
  const {width} = Dimensions.get('screen');
  return StyleSheet.create({
    listStyle: {marginHorizontal: 16, marginTop: 8, width: '100%'},
    container: {flex: 1, paddingVertical: 8},
    imageBackgroundStyle: {
      width: width - 32,
      paddingLeft: 16,
      marginVertical: 8,
    },
    headingText: {
      fontSize: fonts.size.fontSize14,
      fontFamily: fonts.family.rubik700,
      color: CYAN_BLUE,
    },
    descriptionText: {
      fontSize: fonts.size.fontSize10,
      fontFamily: fonts.family.rubik400,
      maxWidth: '70%',
      color: BLACK,
    },
    descriptionContainer: {
      height: 27,
    },
    priceText: {
      fontSize: fonts.size.fontSize10,
      fontFamily: fonts.family.rubik600,
      color: BLACK,
    },
    buttonContainer: {
      borderRadius: 6,
      width: '30%',
      paddingVertical: 6,
      paddingHorizontal: 1,
      alignItems: CENTER,
      justifyContent: CENTER,
      backgroundColor: ORANGE,
      marginTop: 4,
    },
    bookText: {
      color: WHITE,
    },
    separator: {
      height: 8,
    },
    lineStyle: {
      lineHeight: 9,
    }
  });
};
