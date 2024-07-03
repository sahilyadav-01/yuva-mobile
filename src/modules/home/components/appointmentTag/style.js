import { StyleSheet } from "react-native";
import { BLACK, CORNFLOWER, KASHMIR_BLUE, MARINER, WHITE, ZUMTHOR } from "../../../../styles/colors";
import { CENTER, ROW, ROW_REVERSE, SPACE_BETWEEN } from "../../../../styles/constants";
import { fonts } from "../../../../styles/fonts";
import { getDimensions } from "../../../../utils/utils";

const {width} = getDimensions();

export const styles = StyleSheet.create({
  mainView: {
    alignItems: CENTER,
  },
  container: {
    width: width-40,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: ZUMTHOR,
    marginHorizontal: 20
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
    borderBottomLeftRadius: 8,
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
  activeView: {
    backgroundColor: WHITE,
  },
  heading: {
    fontFamily: fonts.family.montserrant700,
    fontSize: fonts.size.fontSize15,
    color: BLACK,
    marginBottom: 4,
  },
  slotText: {
    fontFamily: fonts.family.montserrat300,
    fontSize: fonts.size.fontSize10,
    color: BLACK,
    marginBottom: 4,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: WHITE,
    marginBottom: 12,
  },
  rowContainer: {
    flexDirection: ROW,
  },
  nameText: {
    fontFamily: fonts.family.montserrant800,
    fontSize: fonts.size.fontSize16,
    color: BLACK,
    marginBottom: 12,
  },
  bookingText: {
    color: MARINER,
  },
  buttonText: {
    color: WHITE,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize14,
  },
  rowView: {
    flexDirection: ROW,
    alignItems: CENTER,
  },
  bookingId: {
    marginLeft: 4,
    textAlignVertical: CENTER,
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  buttonRowContainer: {
    borderRadius: 6,
    padding: 12,
    justifyContent: CENTER,
    alignItems: CENTER,
    backgroundColor: CORNFLOWER,
    flex: 1,
    marginRight: 20,
  },
  row: {flexDirection:ROW}
});