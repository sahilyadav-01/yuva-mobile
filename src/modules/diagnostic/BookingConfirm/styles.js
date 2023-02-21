import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE, ORANGE, PLATINUM, WHITE, AMBER, GAINSBORO, CYAN_BLUE, FLASH_WHITE, INDIGO_LIGHT, RED, VERY_DARK_GREY, DARK_GREY, LIGHT_MERCURY, LIGHT_GREYISH_RED, BOX_SHADOW } from '../../../styles/colors';
import { BOLD, COLUMN, FLEX_END, ROW, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';
import { CENTER } from './constants';

export const styles = StyleSheet.create({

    boxStyles: {
        marginLeft: 28,
        marginRight: 30,
        borderWidth: 0.1,
        backgroundColor: LIGHT_GREYISH_RED,
        minHeight: 42,
        borderRadius: 0,
        marginBottom: 23
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 400,
    },
    dateTime: {
        backgroundColor: WHITE,
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
    },
    touchableButton: {
        backgroundColor: ORANGE,
        marginTop: 40,
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 8
    },
    theme: { colors: { text: DARK_GREY } },

    dateTimePicker: {
        marginLeft: 28,
        marginRight: 30,
        minHeight: 42,
        backgroundColor: LIGHT_GREYISH_RED,
        borderRadius: 6
    },
    textBook: {
        textAlign: CENTER,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE,
        fontFamily: fonts.family.rubik500,
        marginLeft: 97,
        fontSize: fonts.size.fontSize16,

    },
    booked: {
        marginTop: 22,
        marginLeft: 16,
        fontWeight: fonts.weight.fontWeight600,
        color: ORANGE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
    },
    booking: {
        flexDirection: ROW
    },
    selectDate: {
        marginTop: 30,
        marginLeft: 16,
        marginRight: 140,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
    },
    Date: {
        marginTop: 30,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    Time: {
        marginTop: 12,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    dateAndTime: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        minHeight: 42,
        marginBottom: 15,
    },
    AddMember: {
        marginLeft: 278,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize10,
        marginRight: 18,
        minHeight: 28,
        borderWidth: 0.1,
        shadowColor: WHITE,
        shadowOpacity: "5%",
        borderRadius: 2,
        backgroundColor: WHITE,
        dropShadow: BOX_SHADOW,
    },
    SelectMember: {
        marginLeft: 28,
        marginTop: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    address: {
        flexDirection: ROW,
    },
    addNew: {
        marginLeft: 18,
        marginRight: 18,
        minHeight: 28,
        marginTop: 9,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize12,
    },
    container: {
        flex: 1,
        alignItems: CENTER,
        justifyContent: CENTER,
    },
    checkboxContainer: {
        flexDirection: ROW,
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: CENTER,
    },
    label: {
        margin: 8,
    },
    checkboxAddress: {
        marginLeft:"88%",
        marginTop: 14,
    },
    adressName: {
        marginLeft: 40,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,

    },
    adressCheck: {
        marginTop: 11,
        marginLeft: 40,
        marginBottom: 15,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize14,
    },
    border: {
        borderWidth: 0.2,
        marginTop: 14,
        marginLeft: 16,
        marginRight: 16,
        shadowColor: WHITE,
        shadowOpacity: "5%",
        borderRadius: 6,
        backgroundColor: WHITE,
        dropShadow: BOX_SHADOW

    },
    Add: {
        marginLeft: 5,
        borderWidth: 0.1,
        marginTop: 18,
        shadowColor: WHITE,
        shadowOpacity: "5%",
        borderRadius: 2,
        backgroundColor: WHITE,
        dropShadow: BOX_SHADOW
    },
    AddMem: {
        marginLeft: 5,
        borderWidth: 0.1,
        shadowColor: WHITE,
        shadowOpacity: "5%",
        borderRadius: 2,
        backgroundColor: WHITE,
        dropShadow: BOX_SHADOW,

    },
    Image: {
        flex: 1,

        marginTop: 10,
        marginRight: 19,

    },
    Images: {
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW
    }
})
