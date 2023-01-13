import {StyleSheet} from 'react-native';
import {FLASH_WHITE, PLATINUM, DARK_BLUE} from '../../../../styles/colors';
import {CENTER} from '../../../../styles/constants';

const styles = ({disabled}) => {
  return StyleSheet.create({
    userImage: {
      height: 85,
      width: 85,
      borderRadius: 42.5,
      backgroundColor: FLASH_WHITE,
      alignSelf: CENTER,
      marginBottom: 41,
      marginTop: 3,
    },
    textInputStyle: {
      borderBottomWidth: 1,
      borderColor: PLATINUM,
      paddingBottom: 5,
      marginBottom: 35,
      color: DARK_BLUE,
    },
    separatorStyle: {
      height: 1,
      width: '100%',
      backgroundColor: PLATINUM,
      marginBottom: 30,
    },
    dropdownBoxStyle: {borderWidth: 0, paddingLeft: 5},
  });
};

export default styles;
