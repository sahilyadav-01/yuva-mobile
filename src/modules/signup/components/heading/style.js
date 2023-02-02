import {StyleSheet} from 'react-native';
import {CYAN_BLUE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    headingContainer: {alignSelf: CENTER},
    headingText: {
      color: CYAN_BLUE,
      letterSpacing: 0.15,
      fontFamily: fonts.family.fontFamilyRubix,
      fontSize: 14,
      lineHeight: 21,
      fontWeight: '600',
    },
    separator: {
      marginHorizontal: 16,
      height: 2,
      borderWidth: 1,
      borderColor: CYAN_BLUE,
      backgroundColor: CYAN_BLUE,
    },
  });
};

export default styles;
