import {StyleSheet} from 'react-native';
import {ORANGE, WHITE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    buttonContainer: {
      marginVertical: 32,
      alignItems: CENTER,
      justifyContent: CENTER,
      borderRadius: 8,
      backgroundColor: ORANGE,
    },
    buttonText: {
      marginVertical: 16,
      lineHeight: 16,
      fontSize: 14,
      fontFamily: fonts.family.fontFamilyRubix,
      fontWeight: '700',
      color: WHITE
    },
  });
};

export default styles;
