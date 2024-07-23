import {StyleSheet} from 'react-native';
import {BLACK} from '../../../styles/colors';
import {BOLD, CENTER} from '../../../styles/constants';
import {fonts} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  textColor: {
    color: BLACK,
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: BOLD,
    marginLeft: 17,
  },
  emptyContainer: {height: '100%', alignItems: CENTER, justifyContent: CENTER},
  loaderContainer: {height: '100%', alignItems: CENTER, justifyContent: CENTER},
});
