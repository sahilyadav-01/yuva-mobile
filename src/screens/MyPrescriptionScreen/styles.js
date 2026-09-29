import {StyleSheet} from 'react-native';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {CYAN_BLUE, WHITE} from '../../styles/colors';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  itemSeparator: {
    height: 40,
  },
  emptyView: {
    flex: 1,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  emptyText: {
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize14,
  },
  boxStyles: {
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: WHITE,
    alignItems: CENTER,
  },
  dropdownStyles: {
    backgroundColor: WHITE,
    marginHorizontal: 16,
  },
  inputStyles: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.rubik600,
    fontSize: fonts.size.fontSize14,
  },
  listOffset: {height: 16},
  viewAllText: {
    fontFamily: fonts.family.rubik500,
    color: WHITE,
    fontSize: fonts.size.fontSize14,
  },
  viewAll: {width: '100%', paddingHorizontal: 16, marginTop: 16},
  viewAllContainer: {
    paddingVertical: 12,
    alignItems: CENTER,
    justifyContent: CENTER,
    backgroundColor: CYAN_BLUE,
    borderRadius: 12,
  },
});
