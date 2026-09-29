import {StyleSheet} from 'react-native';
import {MARINER} from '../../styles/colors';
import {CENTER} from '../../styles/constants';

export const styles = StyleSheet.create({
  radioContainer: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: MARINER,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  radio: {width: 12, height: 12, borderRadius: 24, backgroundColor: MARINER},
});
