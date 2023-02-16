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
        marginBottom:23
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
    touchable: {
        backgroundColor: ORANGE,
        marginTop: 40,
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 8
    },
    theme: { colors: { text: DARK_GREY } },

    textInputStyle: {
        borderBottomWidth: 1,
        borderColor: PLATINUM,
        paddingBottom: 5,
        marginTop: 10,
        color: DARK_BLUE,
        height: 40,
        paddingLeft: 18,
        fontFamily: fonts.family.rubik400,
    },
    dateTimePicker: {
        marginLeft: 28,
        marginRight: 30,
        minHeight: 42,
        backgroundColor: LIGHT_GREYISH_RED,
        borderRadius:6
    },
    margin: {
        marginBottom: 172,
    },
    card: {
        marginBottom: 0,
        marginRight: 14,
    },
    textBook: {
        textAlign: CENTER,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE,
        fontFamily: fonts.family.rubik500,
        marginLeft: 97,

    },
    view: {
        marginTop: 20,
    },
    dateView: {
        marginTop: 20,
    },
    bookingDetails: {
        marginTop: 27,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize12,
    },
    itemText: {
        marginLeft: 14,
        color: WHITE,
        marginTop: 21,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    itemCount: {
        marginLeft: 6,
        color: WHITE,
        marginTop: 21,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    itemHead: {
        color: INDIGO_LIGHT,
        marginTop: 21,
        marginLeft: 13,
    },
    i: {
        marginRight: 100,
    },
    itemView: {
        backgroundColor: INDIGO_LIGHT,
        marginTop: 20,
        flexDirection: ROW,
        minHeight: 77,
        borderRadius: 12,
        marginLeft: 13,
        marginRight: 14,

    },
    drop: {
        marginTop: 35,
        marginLeft: 152,
    },
    dropDown: {
        backgroundColor: WHITE,
        marginTop: 20,
        minHeight: 77,
        borderRadius: 12,
        marginLeft: 13,
        marginRight: 14,
    },
    dropDownDetails: {
        marginTop: 12,
        marginLeft: 13,
        marginBottom: 11,
    },
    dropDownText: {
        marginTop: 12,
        color: VERY_DARK_GREY,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize14,
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
    color: {
        color: CYAN_BLUE,
        fontSize: fonts.size.fontSize10,
        fontFamily: fonts.family.rubik400,
        marginLeft: 16,
        marginTop: 10,
    },
    button: {
        marginTop: 47,
        marginLeft: 13,
        marginRight: 14,
    },
    testName: {
        marginTop: 27,
        marginBottom: 10,
        marginLeft: 13,
        fontFamily: fonts.family.rubik700,

    },
    instructDetails: {
        marginTop: 11,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize12,
    },
    totalLabDetails: {
        marginTop: 20,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize16,
    },
    selectDate: {
        marginTop: 30,
        marginLeft: 16,
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
        marginBottom:15,
    },
    AddMember: {
        marginLeft: 276,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize10,
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
        marginLeft: 174,
        marginTop: 33,
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
        marginLeft: 284,
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
        marginBottom:15,
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
        backgroundColor:WHITE,
        dropShadow:BOX_SHADOW

    }
})
