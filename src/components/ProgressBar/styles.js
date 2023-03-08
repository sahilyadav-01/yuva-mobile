import { StyleSheet } from 'react-native';
import { CHARCOAL_GREY, GREEN, PEARL_GREY } from '../../styles/colors';
import { CENTER, COLUMN, ROW, SPACE_BETWEEN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: COLUMN,
    alignItems: CENTER,
    justifyContent: CENTER,
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: PEARL_GREY,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '10%',
    backgroundColor: GREEN,
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
    height: 24,
    width: 24,
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
    fontSize: 12,
    color: CHARCOAL_GREY,
  },
});

export { styles };
