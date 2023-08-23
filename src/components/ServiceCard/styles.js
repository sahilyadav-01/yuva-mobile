import { StyleSheet } from 'react-native';
import { BLACK } from '../../styles/colors';
import { CENTER, COLUMN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    flex:1,
    flexDirection:COLUMN,
    marginHorizontal: 4,
    marginVertical:16
  },
  subTopContainerStyle: {
    alignItems: CENTER,
  },
  subBottomContainerStyle: {
    paddingTop: 10,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.rubik400,
    textAlign: CENTER,
    color: BLACK,
  },
});