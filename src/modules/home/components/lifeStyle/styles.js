import {StyleSheet} from 'react-native';
import {BLACK, CYAN_BLUE, MARINER} from '../../../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    marginBottom: 12,
    alignItems: CENTER,
  },
  viewAll: {
    color: MARINER,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize12,
  },
  title: {
    color: BLACK,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize18,
  },
  itemStyle: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 12,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
    backgroundColor: '#F0F6FF',
    borderRadius: 8,
  },
  rowItemContainer: {
    flexDirection: ROW,
  },
  detailsContainer: {
    marginLeft: 12,
  },
  addContainer: {
    padding: 8,
    backgroundColor: MARINER,
  },
  heading: {
    fontFamily: fonts.family.montserrant700,
    fontSize: fonts.size.fontSize12,
    color: CYAN_BLUE,
  },
  description: {
    fontFamily: fonts.family.montserrat400,
    fontSize: fonts.size.fontSize8,
    color: CYAN_BLUE,
  },
});
