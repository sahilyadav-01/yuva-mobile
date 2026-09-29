import {StyleSheet} from 'react-native';
import {BLACK, GREEN, WHITE, ZUMTHOR} from '../../styles/colors';
import {ABSOLUTE, CENTER, COLUMN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flexDirection: COLUMN,
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal:2,
    borderRadius: 10,
    backgroundColor: ZUMTHOR,
    marginHorizontal: 0,
    marginVertical: 12,
    alignItems: 'center',
  },
  subTopContainerStyle: {
    alignItems: CENTER,
    justifyContent: CENTER,
    flexDirection: COLUMN,
  },
  subBottomContainerStyle: {
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.montserrat600,
    textAlign: CENTER,
    color: BLACK,
    marginTop: 4,
    width: '100%',
    textAlignVertical: CENTER,
  },
  headView: {
    marginLeft: 36,
    zIndex: 999,
    backgroundColor: WHITE,
    position: ABSOLUTE,
    height: '20%',
    borderRadius: 8,
    top: -5.8,
    justifyContent: CENTER,
  },
  head: {
    color: GREEN,
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.montserrat600,
    textAlign: CENTER,
    marginTop: 4,
  },
  iconStyle: {
    height: 20,
    justifyContent: CENTER,
  },
});
