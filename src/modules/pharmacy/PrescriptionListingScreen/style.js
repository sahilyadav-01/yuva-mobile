import { StyleSheet } from "react-native";
import { BLACK, CYAN_BLUE, DARK_BLUE, ORANGE, SEASHELL, WHITE } from "../../../styles/colors";
import { ABSOLUTE, CENTER, ROW } from "../../../styles/constants";
import { fonts } from "../../../styles/fonts";

export const styles = StyleSheet.create({
    search: {
        marginHorizontal: 14,
        marginVertical: 10,
    },
    PatientHeader: {
        flexDirection: ROW,
        marginTop: '15%',
        alignItems: CENTER
    },
    PatientText: {
        color: CYAN_BLUE,
        marginHorizontal: 22,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
    },
    line: {
        borderTopColor: SEASHELL,
        borderTopWidth: 2,
        flex: 1,
    },
    scrollViewContainer:{
        height: '70%',
    },
    CardView: {
        marginHorizontal: 14,
        backgroundColor: WHITE,
        elevation: 2,
        shadowOpacity: 0.2,
        shadowColor: BLACK,
        marginVertical: 10,
        borderRadius: 6,
    },
    HeadingText: {
        marginTop: 14,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize12,
        color: DARK_BLUE,
    },
    HeadingTextContainer: {
        paddingHorizontal: 14,
    },
    SubText: {
        marginLeft: 14,
        marginTop: 14,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize10,
        color: DARK_BLUE,
    },
    NameView: {
        flexDirection: ROW,
    },
    PincodeText: {
        marginHorizontal: 14,
        marginTop: 14,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize12,
        color: DARK_BLUE,
        position: ABSOLUTE,
        right: 10,
    },
    Button: {
        marginTop: 12,
        backgroundColor: ORANGE,
        height: 40,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    ButtonText: {
        color: WHITE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize14,
        alignSelf: CENTER,
        marginTop: '3%',
    },
})