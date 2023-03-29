import {StyleSheet} from 'react-native';
import {CYAN_BLUE} from '../../../styles/colors';
import {CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';
import {getDimensions} from '../../../utils/utils';

export const styles = () => {
  const {height} = getDimensions();
  return StyleSheet.create({
    container: {
      height: height * 0.5,
      alignItems: CENTER,
      justifyContent: CENTER,
    },
    emptyText: {
      color: CYAN_BLUE,
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
    },
  });
};
