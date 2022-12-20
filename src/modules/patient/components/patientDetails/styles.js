import { StyleSheet } from "react-native";
import { CYAN_BLUE, WHITE } from "../../../../styles/colors";
import { CENTER } from "../../../../styles/constants";
import { fonts } from "../../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  headerView: {
    marginVertical: 4,
  },
  headerText: {
    color:CYAN_BLUE,
    fontWeight: fonts.weight.fontWeight500,
    fontSize: fonts.size.fontSize16,
    fontFamily: fonts.family.fontFamilyRubix,
  },
  patientItem: {
    width: 111,
    height:48,
    backgroundColor: CYAN_BLUE,
    justifyContent: CENTER,
    alignItems: CENTER,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: CYAN_BLUE,
    marginHorizontal: 12,
  },
  patientItemText: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight600,
    fontSize: fonts.size.fontSize14,
    color: WHITE,
  },
  scrollContainer: {
    marginTop: 16,
  },
  patientFormView: {
    marginTop: 4,
  },
  patientFormHeader: {
    fontFamily: fonts.family.fontFamilyRubix,
    fontWeight: fonts.weight.fontWeight500,
    fontSize: fonts.size.fontSize16,
    color: CYAN_BLUE,
    marginBottom: 16,
  },
});