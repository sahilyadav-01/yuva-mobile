import { StyleSheet } from "react-native"
import { BLACK, INDIGO_LIGHT, ORANGE, PALE_PEACH, VIVID_TANGERINE } from "../../../../styles/colors"
import { CENTER, HIDDEN, ROW, ROW_REVERSE, SPACE_BETWEEN } from "../../../../styles/constants"
import { fonts } from "../../../../styles/fonts"

export const styles = StyleSheet.create({
    PopularHealthCheckups: {
        alignItems: CENTER,
        marginTop: 28,
        flexDirection: ROW,
        justifyContent: SPACE_BETWEEN,
        marginHorizontal: 16,
        marginBottom: 24

    }, LandingPageText1: {
        color: INDIGO_LIGHT,
        fontFamily: fonts.family.rubik700,
        fontSize: fonts.size.fontSize14,
    },
    textContainer: { flex: 1, flexDirection: ROW_REVERSE, justifyContent: SPACE_BETWEEN, alignItems: CENTER, overflow: HIDDEN },
    LandingPageText2: {
        color: INDIGO_LIGHT,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    line: {
        borderBottomColor: VIVID_TANGERINE,
        borderBottomWidth: 2,
        flex: 1,
    },
    subLine: {
        borderBottomColor: VIVID_TANGERINE,
        borderBottomWidth: 2,
        flex: 1,
    },
    CarouselContainerStyle: {
        backgroundColor: PALE_PEACH
    },
    subCategoryNameContainer:{
        alignItems:CENTER,
        flexDirection: ROW_REVERSE,
        marginHorizontal: 16,

    },
    subCategoryNameStyle: {
        color: BLACK,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
        paddingHorizontal:8
    },
    categoryNameContainer:{
        alignItems:CENTER,
        padding:16
    },
    categoryNameStyle: {
        color: ORANGE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
})