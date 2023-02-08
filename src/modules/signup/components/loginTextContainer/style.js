import {StyleSheet} from 'react-native';
import {BLACK, KASHMIR_BLUE} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

const styles = () => {
  return StyleSheet.create({
    existingMember: {
      color: BLACK,
      fontFamily: fonts.family.rubik500,
      fontSize: 14,
      lineHeight: 21,
    },
    loginText: {
      color: KASHMIR_BLUE,
      fontFamily: fonts.family.nunito600,
      fontSize: 14,
      lineHeight: 21,
    },
    bottomTextContainer: {alignItems: CENTER},
    rowTextContainer: {flexDirection: ROW, justifyContent: SPACE_BETWEEN},
  });
};

export default styles;
