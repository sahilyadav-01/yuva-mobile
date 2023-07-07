import {StyleSheet} from 'react-native';
import {CENTER} from '../../styles/constants';
import {fonts} from '../../styles/fonts';
import {CYAN_BLUE} from '../../styles/colors';

export const styles = () => {
  return StyleSheet.create({
    container: {flex: 1, alignItems: CENTER, justifyContent: CENTER},
    maintenanceText: {
      fontFamily: fonts.family.rubik500,
      color: CYAN_BLUE,
      fontSize: fonts.size.fontSize14,
    },
  });
};
