import { StyleSheet } from "react-native";
import { WHITE, DARK_BLUE, ORANGE, SLATE_GRAY } from "../../../styles/colors";
import { CENTER } from "../../../styles/constants";
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
    progressBarContainer: {
        width: '100%',
    },
    topContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    topContainerTextStyle1: {
        fontfamily: fonts.family.fontFamilyRubix,
        fontWeight: fonts.weight.fontWeight500,
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
    questionViewContainer: {
        marginTop: 20,
    },
    questionViewContainerText: {
        fontSize: fonts.size.fontSize16,
        fontfamily: fonts.family.fontFamilyRubix,
        marginBottom: 9,
        color: SLATE_GRAY,
    },
    boxStylesContainer: {
        backgroundColor: WHITE,
        borderRadius: 8,
        height: 50,
        borderWidth: 1,
        borderColor: DARK_BLUE,
    },
    touchableOpacityViewContainer: {
        marginTop: 30,
    },
    touchableOpacityStyle: {
        borderRadius: 8,
        backgroundColor: ORANGE,
    },
    touchableOpacityTextStyle: {
        textAlign: CENTER,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE,
    },
});