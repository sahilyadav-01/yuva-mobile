import {StyleSheet} from 'react-native';
import {BLACK, PEARL_GREY} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

const styles = StyleSheet.create({
  progress: {
    height: '3%',
    marginTop: 9,
    flex: 1,
  },
  statusContainer: {
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  status: {
    alignItems: CENTER,
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
    fontSize: fonts.size.fontSize10,
    color: BLACK,
    fontFamily: fonts.family.rubik600,
  },
});

export {styles};
