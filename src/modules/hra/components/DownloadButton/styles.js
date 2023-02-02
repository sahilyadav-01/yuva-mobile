import { StyleSheet } from "react-native";
import { WHITE, ORANGE } from "../../../../styles/colors";
import { FLEX_END, FLEX, ROW } from "../../../../styles/constants";
import { fonts } from '../../../../styles/fonts';

export const styles = StyleSheet.create({
    touchableOpacityContainer: {
        display: FLEX,
        flexDirection: ROW,
        justifyContent: FLEX_END,
        marginTop: 2,
    },
    buttonContainer: {
        flexDirection: ROW,
        color: ORANGE,
        marginTop: 24,
        marginBottom: 24,
        padding: 10,
        backgroundColor: WHITE,
        borderColor: ORANGE,
        borderRadius: 8,
        borderWidth: 1
    },
    iconContainer: {
        marginLeft: 10,
        marginTop: 4,
        color: ORANGE,
        fontSize: fonts.size.fontSize15,
        fontfamily: fonts.family.fontFamilyRubix,
    },

    textStyle: {
        marginLeft: 5,
        marginRight: 5,
        color: ORANGE,
    },
});