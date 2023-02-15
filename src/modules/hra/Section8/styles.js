import { StyleSheet } from "react-native";
import { WHITE, DARK_BLUE, ORANGE } from "../../../styles/colors";
import { CENTER, FLEX } from "../../../styles/constants";
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
    progressBarContainer: {
        width: '100%',
    },
    topContainer: {
        marginHorizontal: 13,
        marginVertical: 20,
    },
    topContainerTextStyle: {
        fontWeight: fonts.weight.fontWeight500,
        fontfamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize18,
        color: DARK_BLUE,
    },
    scrollViewContainer: {
        height: 650,
    },
    scrollViewContentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 300
    },
    touchableOpacityViewContainer: {
        marginTop: 30,
    },
    touchableOpacityStyle: {
        display: FLEX,
        alignItems: CENTER,
        justifyContent: CENTER,
        backgroundColor: ORANGE,
        borderRadius:8,
        height: 48,
    },
    touchableOpacityTextStyle: {
        textAlign: CENTER,
        color: WHITE,
    },
});