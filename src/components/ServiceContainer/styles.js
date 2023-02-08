import { StyleSheet } from "react-native";
import { CYAN_BLUE, GAINSBORO_LIGHT, SEASHELL, WHITE } from "../../styles/colors";
import { CENTER, SPACE_BETWEEN, ROW, WRAP } from "../../styles/constants";
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
    mainContainerStyle: {
        marginHorizontal: 16,
        marginTop: 20,
    },
    subContainerStyle1: {
        alignItems: CENTER,
        flexDirection: ROW,
        justifyContent: SPACE_BETWEEN,
    },
    subContainerStyle2: {
        marginTop: 16,
        borderRadius: 6,
        flexDirection: ROW,
        flexWrap: WRAP,
        borderWidth: 0.3,
        borderColor: GAINSBORO_LIGHT,
        paddingTop: 14,
        paddingBottom: 20,
        backgroundColor: WHITE,
    },
    serviceHeading: {
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight700,
    }
    , line: {
        borderBottomColor: SEASHELL,
        borderBottomWidth: 1,
        width: 246,
    }
})