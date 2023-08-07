import {StyleSheet} from 'react-native';
import { CENTER } from '../../styles/constants';
import { fonts } from '../../styles/fonts';
import { CYAN_BLUE } from '../../styles/colors';

export const styles = StyleSheet.create({
  emptyView: {
    flex:1,
    alignItems: CENTER,
    justifyContent: CENTER
  },
  emptyText: {
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14
  },
  contentContainerStyle: {
    flex: 1,
    paddingBottom: 12,
    paddingTop: 36,
  },
  itemSeparator: {height: 40}
});
