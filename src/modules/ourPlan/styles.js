import {StyleSheet} from 'react-native';
import { ABSOLUTE, CENTER, FLEX_END, FLEX_START, ROW } from '../../styles/constants';
import { getDimensions } from '../../utils/utils';

const {height} = getDimensions();
export const styles = StyleSheet.create({
  parentView: {
    paddingTop: 30,
  },
  container: {
    width: '100%',
    height: 0.60 * height,
    justifyContent:CENTER,
    alignItems: CENTER,
    flexDirection: ROW,
  },
  mainViewContainer: {
    zIndex: 10,
  },
  sideViewContainer: {
    height: '100%',
    marginHorizontal: 12,
    alignSelf: FLEX_START,
    position: ABSOLUTE,
  },
  leftCard: {
    left: 0,
    justifyContent: FLEX_START,
    zIndex: 2,
  },
  rightCard: {
    right: 0,
    justifyContent: FLEX_END,
    zIndex: 3,
  },
});