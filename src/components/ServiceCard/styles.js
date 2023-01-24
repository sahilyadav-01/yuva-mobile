import { StyleSheet } from 'react-native';
import { DARK_BLUE } from '../../styles/colors';
import { CENTER, FLEX, ROW } from '../../styles/constants';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: CENTER,
  },
  topContainerStyle: {
    display: FLEX,
    flexDirection: ROW,
    justifyContent: CENTER,
    alignItems: CENTER,
    height: 80,
    width: '100%',
    borderRadius: 10,
  },
  subTopContainerStyle: {
    display: FLEX,
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: CENTER,
    height: 68,
    width: 60,
  },
  imageContainerStyle: {
    height: 40,
    width: 40,
  },
  bottomContainerStyle: {
    marginTop: 10,
  },
  subBottomContainerStyle: {
    fontSize: 12,
    textAlign: CENTER,
    paddingBottom: 2,
    color: DARK_BLUE
  },
});
