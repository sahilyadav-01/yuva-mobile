import {Platform, StyleSheet} from 'react-native';
import {CYAN_BLUE, ORANGE, VERY_LIGHT_ORANGE} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import { CENTER, ROW } from '../../styles/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: ROW,
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 16 : undefined,
    backgroundColor: VERY_LIGHT_ORANGE,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: ORANGE,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: CENTER,
  },
  textInputStyles: {
    width: '100%',
    paddingLeft: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik500,
    color: CYAN_BLUE,
  },
});
