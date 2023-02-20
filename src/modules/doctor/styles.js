import {StyleSheet} from 'react-native';
import {BLACK, AMBER, GAINSBORO} from '../../styles/colors';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingBottom: 60,
  },
  search: {
    backgroundColor: AMBER,
    color: GAINSBORO,
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 12,
    borderRadius: 12,
  },
  theme: {colors: {text: BLACK}},
});
