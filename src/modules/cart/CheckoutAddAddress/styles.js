import {StyleSheet} from 'react-native';
import { WHITE } from '../../../styles/colors';

export const styles = StyleSheet.create({
  bodyContainer: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 24,
  },
  screenContainer: {flex:1,backgroundColor:WHITE},
  fullViewContainer: {height:'100%'},
  contentContainer: {flex:1,paddingBottom:16,paddingHorizontal:20}
});
