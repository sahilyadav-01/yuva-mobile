import { StyleSheet } from "react-native";
import { RED, BLACK, NAVY_BLUE } from "../../styles/colors";
import { fonts } from '../../styles/fonts';
import { FLEX_END } from "../../styles/constants";

export const styles = StyleSheet.create({
    mainContainer: {
        alignItems: FLEX_END,
    },
    HraTimerStyle: {
        color: NAVY_BLUE,
        fontSize: fonts.size.fontSize28,
    },
    currentColour: {
        color: RED,
    },
    afterColour: {
        color: BLACK,
    },
});