import { StyleSheet } from "react-native";
import { WHITE, MARINER } from "../../../../styles/colors";
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
        color: MARINER,
        marginTop: 24,
        marginBottom: 24,
        padding: 10,
        backgroundColor: WHITE,
        borderColor: MARINER,
        borderRadius: 8,
        borderWidth: 1
    },
    iconContainer: {
        marginLeft: 10,
        marginTop: 4,
        color: MARINER,
        fontSize: fonts.size.fontSize15,
        fontfamily: fonts.family.monsterrant500,
    },

    textStyle: {
        marginLeft: 5,
        marginRight: 5,
        color: MARINER,
    },
});