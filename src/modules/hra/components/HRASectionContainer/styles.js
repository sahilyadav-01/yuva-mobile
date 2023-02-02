import { StyleSheet } from "react-native";
import { ORANGE, WHITE } from "../../../../styles/colors";
import { CENTER, FLEX } from "../../../../styles/constants";
import { fonts } from '../../../../styles/fonts';

export const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        marginTop: 24,
        display: FLEX,
        alignItems: CENTER,
        justifyContent: CENTER,
    },
    topContainer: {
        marginTop: 41,
        marginHorizontal: 14
    },
    touchableOpacityContainer: {
        display: FLEX,
        alignItems: CENTER,
        justifyContent: CENTER,
        height: 45,
        width: 348,
        backgroundColor: ORANGE,
        borderRadius: 8,
        marginTop: 15
    },
    textContainer: {
        fontSize: fonts.size.fontSize16,
        color: WHITE,
        fontWeight: fonts.weight.fontWeight600,
        fontfamily: fonts.family.fontFamilyRubix,
    }
});