import { StyleSheet } from "react-native";
import { WHITE, DARK_BLUE, ORANGE, RED } from "../../../styles/colors";
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
    topContainerTextStyle: {
        fontWeight: fonts.weight.fontWeight500,
        fontSize: fonts.size.fontSize17,
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
        marginBottom: 9,
        color: DARK_BLUE,
    },
    questionViewContainerTextInput: {
        height: 48,
        borderRadius: 8,
        paddingLeft: 5,
        marginTop: 8,
        fontSize: fonts.size.fontSize12,
        backgroundColor: WHITE,
        borderWidth: 1,
    },
    boxStylesContainer: {
        backgroundColor: WHITE,
        borderRadius: 8,
        height: 50,
        borderWidth: 1,
        borderColor: DARK_BLUE,
    },
    text: {
        color: DARK_BLUE,
        fontSize: fonts.size.fontSize16,
        marginBottom: 9,
    },
    textError: {
        color: RED,
        fontSize: fonts.size.fontSize16,
        marginBottom: 8,
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