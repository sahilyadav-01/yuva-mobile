import { StyleSheet } from "react-native";
import { WHITE, DARK_BLUE, MARINER, SLATE_GRAY, RED } from "../../../styles/colors";
import { CENTER, FLEX } from "../../../styles/constants";
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        paddingBottom:12
    },
    progressBarContainer: {
        width: '100%',
    },
    topContainer: {
        marginHorizontal: 13,
        marginVertical: 20,
    },
    topContainerTextStyle: {
        fontSize: fonts.size.fontSize24,
        color: DARK_BLUE,
        fontfamily: fonts.family.monsterrant500,
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
        backgroundColor: MARINER,
        borderRadius:8,
        height: 48,
    },
    touchableOpacityTextStyle: {
        textAlign: CENTER,
        color: WHITE,
    },
    questionViewContainer: {
        marginTop: 20,
    },
    questionViewContainerText: {
        fontSize: fonts.size.fontSize16,
        fontfamily: fonts.family.montserrat400,
        marginBottom: 9,
        color: SLATE_GRAY,
    },
    text: {
        color: SLATE_GRAY,
        fontSize: fonts.size.fontSize16,
        fontfamily: fonts.family.montserrat400,
        marginBottom: 9,
    },
    textError: {
        color: RED,
        fontSize: fonts.size.fontSize16,
        fontfamily: fonts.family.montserrat400,
        marginBottom: 8,
    },
    questionViewContainerTextInput: {
        height: 48,
        borderRadius: 8,
        paddingLeft: 5,
        marginTop: 8,
        fontSize: fonts.size.fontSize12,
        backgroundColor: WHITE,
        borderWidth: 1,
        color:SLATE_GRAY,
    },
    boxStylesContainer: {
        backgroundColor: WHITE,
        borderRadius: 8,
        height: 50,
        borderWidth: 1,
        borderColor: DARK_BLUE,
    }
});