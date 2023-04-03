import {StyleSheet} from 'react-native';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {CYAN_BLUE} from '../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1, paddingVertical: 20, paddingHorizontal: 12},
    separatorStyle: {height: 12},
    emptyContainer: {flex: 1, alignItems: CENTER, justifyContent: CENTER},
    emptyText: {
      fontFamily: fonts.family.rubik500,
      fontSize: fonts.size.fontSize14,
      lineHeight: 21,
      color: CYAN_BLUE,
    },
  });
};
