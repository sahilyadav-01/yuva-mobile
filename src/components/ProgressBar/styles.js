import {StyleSheet} from 'react-native';
import {BLACK, GREEN, PEARL_GREY} from '../../styles/colors';
import {
  CENTER,
  COLUMN,
  FLEX_START,
  ROW,
  SPACE_BETWEEN,
} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: COLUMN,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  progressBar: {
    width: '100%',
    backgroundColor: PEARL_GREY,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '3%',
    backgroundColor: GREEN,
    alignSelf: FLEX_START,
    marginTop: 9,
  },
  statusContainer: {
    flexDirection: ROW,
    alignItems: CENTER,
    justifyContent: SPACE_BETWEEN,
    marginTop: 8,
    width: '100%',
  },
  status: {
    flexDirection: COLUMN,
    alignItems: CENTER,
    justifyContent: CENTER,
    width: 30,
  },
  statusDot: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: PEARL_GREY,
    alignItems: CENTER,
    justifyContent: CENTER,
    marginBottom: 4,
  },
  statusLabel: {
    height: 24,
    width: 80,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  statusLabelActive: {
    fontWeight: fonts.weight.fontWeight700,
  },
  statusText: {
    fontSize: 10,
    color: BLACK,
    fontFamily: fonts.family.rubik600,
  },
});

export {styles};
