import {Platform, StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {CENTER, ROW} from '../../styles/constants';
import {getDimensions} from '../../utils/utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: ROW,
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 16 : undefined,
    backgroundColor: WHITE,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: BLACK,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: CENTER,
    width: getDimensions()?.width - 24,
    alignSelf: CENTER,
  },
  textInputStyles: {
    width: '100%',
    paddingLeft: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.monsterrant500,
    color: BLACK,
  },
});
