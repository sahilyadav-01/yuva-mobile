import { StyleSheet } from "react-native";
import { BLACK, KASHMIR_BLUE, WHITE } from "../../../../styles/colors";
import { CENTER, ROW } from "../../../../styles/constants";
import { fonts } from "../../../../styles/fonts";
import { getDimensions } from "../../../../utils/utils";

const {width} = getDimensions();

export const styles = StyleSheet.create({
  mainView: {
    alignItems: CENTER,
  },
  container: {
    width: width-4,
    marginTop: 8,
    marginHorizontal: 4,
    flexDirection: ROW,
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: KASHMIR_BLUE,
  },
  titleView: {
    width: '22%',
    backgroundColor: KASHMIR_BLUE,
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: CENTER,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  titleText: {
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize10,
    color: WHITE,
    textAlign: CENTER,
  },
  detailsView: {
    width: '30%',
    justifyContent: CENTER,
    backgroundColor: WHITE,
  },
  scheduleView: {
    width: '30%',
    backgroundColor: WHITE,
    justifyContent: CENTER,
  },
  statusView: {
    width: '16%',
    backgroundColor: WHITE,
    justifyContent: CENTER,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  textStyle: {
    color: BLACK,
    fontFamily: fonts.family.rubik400,
    fontSize: fonts.size.fontSize8,
    textAlign: CENTER,
    paddingVertical: 4,
  },
  dotView: {
    marginHorizontal: 8,
    backgroundColor: KASHMIR_BLUE,
    borderColor: BLACK,
    borderWidth: 1,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  activeView:{
    backgroundColor: WHITE,
  }
});