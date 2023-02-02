import { StyleSheet } from "react-native";
import { WHITE , DARK_BLUE } from "../../../styles/colors";
import { CENTER, FLEX, ROW } from "../../../styles/constants";
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
    mainContainer: {
        display: FLEX,
    },
    topContainer: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        marginTop: 24,
        height: 135,
        marginHorizontal: 14,
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: WHITE,
    },
    subTopContainer: {
        display: FLEX,
        flexDirection: ROW,
        marginHorizontal: 14,
        paddingVertical: 18,
    },
    parentTextContainer: {
        alignItems: CENTER,
    },
    textContainerStyle: {
        color: DARK_BLUE,
        fontWeight: fonts.weight.fontWeight600,
        marginTop: 30,
        height: 100,
        width: 180,
        fontSize: fonts.size.fontSize14,
        fontfamily:fonts.family.fontFamilyRubix
    },
    imageContainerStyle: {
        marginLeft: 20,
    },
    imageStyle: {
        height: 100,
        width: 130,
    },
    bottomContainer: {
        marginHorizontal: 14,
    },
});