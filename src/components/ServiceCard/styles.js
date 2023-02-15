import { StyleSheet } from 'react-native';
import { DARK_BLUE } from '../../styles/colors';
import { CENTER, FLEX, ROW, WRAP } from '../../styles/constants';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    display: FLEX,
    flexDirection: ROW,
    flexWrap: WRAP,
    justifyContent: CENTER,
    width: 100,
    height:100,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: CENTER,
  },
  topContainerStyle: {
    display: FLEX,
    flexDirection: ROW,
    justifyContent: CENTER,
    alignItems: CENTER,
     height: '50%',
    width: '100%',
    borderRadius: 10,
  },
  subTopContainerStyle: {
    display: FLEX,
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  imageContainerStyle: {
    height: 32,
    width: 37,
  },
  bottomContainerStyle: {
    marginTop: 5,
  },
  subBottomContainerStyle: {
    fontSize: 10,
    textAlign: CENTER,
    paddingHorizontal: 15,
    color: DARK_BLUE,
  },
});
