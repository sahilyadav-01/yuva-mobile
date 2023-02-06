import { StyleSheet } from 'react-native';
import { DARK_BLUE, RED } from '../../styles/colors';
import { CENTER, FLEX, ROW, WRAP } from '../../styles/constants';

export const styles = StyleSheet.create({
  touchableOpacityContainerStyle: {
    // flexDirection: ROW,
    flexWrap: WRAP,
    // width: '27%',
    // height: '26%',
    width: 100,
    height:100,
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: CENTER,
    // backgroundColor:RED

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
    // height: '80%',
    width: '60%',
  },
  imageContainerStyle: {
    height: 32,
    width: 37,
    //  backgroundColor:RED,

  },
  bottomContainerStyle: {
    marginTop: 10,
    //  backgroundColor:RED,
    // justifyContent: CENTER,
    // alignItems: CENTER,

  },
  subBottomContainerStyle: {
    fontSize: 10,
    textAlign: CENTER,
    // textDecorationLine:5,
    paddingHorizontal: '15%',
    color: DARK_BLUE,
  },
});
