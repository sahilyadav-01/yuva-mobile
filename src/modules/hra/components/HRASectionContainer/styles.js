import { StyleSheet } from "react-native";
import { MARINER, WHITE } from "../../../../styles/colors";
import { CENTER, FLEX } from "../../../../styles/constants";
import { fonts } from '../../../../styles/fonts';

export const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        marginTop: 39,
        display: FLEX,
        alignItems: CENTER,
        justifyContent: CENTER,
    },
    topContainer: {
        marginTop: 30,
        marginHorizontal: 14,
    },
    touchableOpacityContainer: {
        display: FLEX,
        alignItems: CENTER,
        justifyContent: CENTER,
        height: 48,
         width: 375,
        backgroundColor: MARINER,
        borderRadius:8,
    },
    textContainer: {
        fontSize: fonts.size.fontSize16,
        color: WHITE,
        fontfamily: fonts.family.montserrat600,
    }
});