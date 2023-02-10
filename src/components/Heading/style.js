import {StyleSheet} from 'react-native';
import {CYAN_BLUE} from '../../styles/colors';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    headingContainer: {alignSelf: CENTER},
    headingText: {
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik600,
      fontSize: 14,
      lineHeight: 21,
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
