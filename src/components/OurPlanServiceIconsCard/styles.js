import {StyleSheet} from 'react-native';
import {BLACK, GREEN, WHITE, ZUMTHOR} from '../../styles/colors';
import {ABSOLUTE, CENTER, COLUMN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flexDirection: COLUMN,
    flex: 1,
    padding: 8,
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
    fontSize: fonts.size.fontSize8,
    fontFamily: fonts.family.montserrat400,
    textAlign: CENTER,
    color: BLACK,
    marginTop: 4,
    width: '80%',
    height: 20,
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
    fontSize: fonts.size.fontSize6,
    fontFamily: fonts.family.montserrat400,
    textAlign: CENTER,
    marginTop: 4,
  },
  iconStyle: {
    height: 20,
    justifyContent: CENTER,
  },
});
