import {StyleSheet} from 'react-native';
import {FLASH_WHITE} from '../../styles/colors';

const styles = ({disabled}) => {
  return StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 15, backgroundColor: FLASH_WHITE},
  });
};

export default styles;
