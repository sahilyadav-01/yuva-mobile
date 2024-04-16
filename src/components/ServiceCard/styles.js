import { StyleSheet } from 'react-native';
import { BLACK, CYAN_BLUE, ZUMTHOR } from '../../styles/colors';
import { CENTER, COLUMN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    //flex:1,
    flexDirection:COLUMN,
    marginHorizontal: 4,
    //marginVertical:16,
    backgroundColor:ZUMTHOR,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 12,
    alignItems: CENTER
  },
  subTopContainerStyle: {
    alignItems: CENTER,
  },
  subBottomContainerStyle: {
    marginTop: 8,
    fontSize: fonts.size.fontSize8,
    fontFamily: fonts.family.rubik400,
    textAlign: CENTER,
    color: CYAN_BLUE,
    textAlign: CENTER,
    width: 40,
  },
});