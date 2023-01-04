import { StyleSheet } from "react-native";
import { CYAN_BLUE } from "../../styles/colors";
import { COLUMN, ROW, WRAP } from "../../styles/constants";
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  headerView: {
    marginVertical: 18,
  },
  headerText: {
    color: CYAN_BLUE,
    fontFamily: fonts.family.fontFamilyRubix,
    fontSize: fonts.size.fontSize16,
    fontWeight: fonts.weight.fontWeight500,
  },
  healthContainer: {
    flexDirection: COLUMN,
  },
  contentContainer: {
    flexDirection : ROW,
    flexWrap : WRAP,
  },
});