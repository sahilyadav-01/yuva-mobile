import {StyleSheet} from 'react-native';
import {BLACK, DARK_MAROON} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {CENTER} from '../../styles/constants';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
  theme: {colors: {text: DARK_MAROON}},
  search: {
    marginHorizontal: '5%',
    marginBottom: 24,
    marginTop: '4%',
  },
  searchStyle: {
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  listEmptyStyles: {flex: 1, alignItems: CENTER, justifyContent: CENTER},
  emptyText: {
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize14,
    color: BLACK,
  },
});
