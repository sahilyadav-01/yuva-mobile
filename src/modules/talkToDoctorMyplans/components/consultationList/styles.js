import {StyleSheet} from 'react-native';
import {BLACK, GREEN, LIGHT_BLACK, WHITE} from '../../../../styles/colors';
import {
  ABSOLUTE,
  CENTER,
  LEFT,
  RIGHT,
  ROW,
  SPACE_BETWEEN,
} from '../../../../styles/constants';
import {fonts} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  headerText: {
    fontSize: fonts.size.fontSize14,
    color: BLACK,
    fontFamily: fonts.family.montserrat600,
    marginVertical: 10,
  },
  consultationView: {
    minHeight: 143,
    marginVertical: 10,
    marginHorizontal: 14,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: WHITE,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.01,
    shadowColor: BLACK,
    elevation: 5,
  },
  cancelledView: {
    backgroundColor: LIGHT_BLACK,
  },
  cancelledText: {
    fontSize: fonts.size.fontSize14,
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
  },
  cancelledDegree: {
    fontSize: fonts.size.fontSize10,
    color: BLACK,
    fontFamily: fonts.family.montserrat400,
  },
  topSection: {
    flexDirection: ROW,
    marginVertical: 8,
  },
  view1: {
    flex: 1,
  },
  view2: {
    width: '20%',
    right: 0,
    position: ABSOLUTE,
    marginTop: 15,
  },
  topHeaderLeft: {
    color: GREEN,
    textAlign: LEFT,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.monsterrant500,
    marginTop: 9,
    marginHorizontal: 12,
  },
  topHeaderRight: {
    color: GREEN,
    textAlign: RIGHT,
    fontSize: fonts.size.fontSize14,
    fontFamily: fonts.family.monsterrant500,
    marginTop: 9,
    marginHorizontal: 12,
  },
  bottomHeader: {
    color: GREEN,
    textAlign: RIGHT,
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.montserrat400,

    marginHorizontal: 12,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: ROW,
  },
  calenderContainer: {
    flexDirection: ROW,
  },
  dateText: {
    color: BLACK,
    fontSize: fonts.size.fontSize8,
    fontFamily: fonts.family.monsterrant500,
  },
  timeText: {
    color: BLACK,
    fontSize: fonts.size.fontSize4,
    fontFamily: fonts.family.montserrat400,
  },
  view3: {
    marginLeft: 4,
    justifyContent: CENTER,
  },
  descriptionText: {
    color: BLACK,
    fontSize: fonts.size.fontSize10,
    fontFamily: fonts.family.montserrat400,
    marginHorizontal: 12,
  },
  footerView: {
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    bottom: 5,
    marginVertical: 8,
  },
  downloadText: {
    color: BLACK,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.montserrat400,
    marginLeft: 6,
  },
  consultText: {
    color: BLACK,
    fontSize: fonts.size.fontSize12,
    fontFamily: fonts.family.montserrat400,
    marginLeft: 6,
  },
  downloadView: {
    flexDirection: ROW,
    alignItems: CENTER,
  },
  consultView: {
    flexDirection: ROW,
    alignItems: CENTER,
    marginHorizontal: 12,
  },
  emptyContainer: {height:'100%',alignItems:CENTER,justifyContent:CENTER},
  emptyText: {fontFamily:fonts.family.monsterrant500,color:BLACK}
});
