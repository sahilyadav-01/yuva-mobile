import {StyleSheet} from 'react-native';
import {BLACK, ZUMTHOR} from '../../styles/colors';
import {CENTER, COLUMN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flexDirection: COLUMN,
    marginHorizontal: 4,
    backgroundColor: ZUMTHOR,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 12,
    alignItems: CENTER,
  },
  subTopContainerStyle: {
    alignItems: CENTER,
  },
  subBottomContainerStyle: {
    marginTop: 8,
    fontSize: fonts.size.fontSize8,
    fontFamily: fonts.family.montserrat400,
    textAlign: CENTER,
    color: BLACK,
    textAlign: CENTER,
    width: 40,
  },
});
