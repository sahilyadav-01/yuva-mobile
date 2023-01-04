import { StyleSheet } from "react-native";
import { BLACK, CYAN_BLUE, GREEN, WHITE } from "../../../../styles/colors";
import { CENTER, LEFT, RIGHT, ROW, SPACE_BETWEEN } from "../../../../styles/constants";
import { fonts } from "../../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  headerText: {
    fontSize: fonts.size.fontSize14,
    color: CYAN_BLUE,
    fontWeight: fonts.weight.fontWeight600,
    marginVertical: 10,
  },
  consultationView: {
    minHeight: 143,
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: WHITE,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.01,
    shadowColor: BLACK,
    elevation: 5,
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
  },
  topHeaderLeft: {
    color: GREEN,
    textAlign: LEFT,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
    marginVertical: 2,
  },
  topHeaderRight: {
    color: GREEN,
    textAlign: RIGHT,
    fontSize: fonts.size.fontSize14,
    fontWeight: fonts.weight.fontWeight500,
    marginVertical: 2,
  },
  bottomHeader: {
    color: GREEN,
    textAlign: RIGHT,
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
    marginVertical: 2,
  },
  descriptionContainer: {
    flex:1,
    flexDirection: ROW,
    marginVertical: 8,
  },
  calenderContainer: {
    flexDirection: ROW,
  },
  dateText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize8,
    fontWeight: fonts.weight.fontWeight500,
  },
  timeText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize4,
    fontWeight: fonts.weight.fontWeight400,
  },
  view3: {
    marginLeft: 4,
    justifyContent: CENTER,
  },
  descriptionText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize10,
    fontWeight: fonts.weight.fontWeight400,
  },
  footerView: {
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
    bottom: 5,
    marginVertical: 8,
  },
  downloadText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    marginLeft: 6,
  },
  consultText: {
    color: CYAN_BLUE,
    fontSize: fonts.size.fontSize12,
    fontWeight: fonts.weight.fontWeight400,
    marginLeft: 6,
  },
  downloadView: {
    flexDirection: ROW,
    alignItems: CENTER,
  },
  consultView: {
    flexDirection: ROW,
    alignItems:CENTER,
  },
});