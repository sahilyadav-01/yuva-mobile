import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE, ORANGE, PLATINUM, WHITE, AMBER, GAINSBORO, CYAN_BLUE, FLASH_WHITE, INDIGO_LIGHT, RED, VERY_DARK_GREY, ORANGE_GREY } from '../../../styles/colors';
import { BOLD, COLUMN, ROW, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';
import { CENTER } from './constants';

export const styles = StyleSheet.create({

    boxStyles: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: PLATINUM,
        paddingBottom: 5,
        marginBottom: 0,
        color: DARK_BLUE,
        height: 50,
        width: fonts.width.width102,
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
    textInput: {
        backgroundColor: WHITE,
        borderWidth: 1,
        borderRadius: 8,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    touchable: (disabled) => ({
        backgroundColor: disabled ? ORANGE_GREY : ORANGE,
        marginTop: 40,
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 8
    }),
    theme: { colors: { text: BLACK } },
    search: {
        backgroundColor: AMBER,
        color: GAINSBORO,
        marginTop: 23,
        fontSize: 1,
        height: 51,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    textColor: {
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontWeight: BOLD,
        marginLeft: 17,
        // marginTop: 23,
    },
    textColor2: {
        color: CYAN_BLUE,
        fontWeight: BOLD,
        marginLeft: 17,
        marginTop: 27,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    labTest: {
        flexDirection: COLUMN,
        marginLeft: 18,
        marginRight: 24,
        marginTop: 16,
        flex: 1,
        justifyContent: SPACE_BETWEEN
    },
    cards: {
        backgroundColor: WHITE,
        height: 76,
        marginTop: 19,
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 12
    },
    image: {
        height: 24,
        width: 24

    },
    packageTest: {
        color: DARK_BLUE,
        fontSize: fonts.size.fontSize12,
        fontWeight: fonts.weight.fontWeight500,
        justifyContent: CENTER,
        marginBottom: 10,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    textPackage: {
        marginTop: 23,
    },
    container: {
        marginBottom: 162,
    },
    booksID: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    textInputStyle: {
        borderBottomWidth: 1,
        borderColor: PLATINUM,
        paddingBottom: 5,
        marginTop: 10,
        color: DARK_BLUE,
        height: 40,
        paddingLeft: 18,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    dateTimePicker: {
        backgroundColor: { FLASH_WHITE },
        paddingLeft: 8,
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
        fontWeight: fonts.weight.fontWeight500,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE,
        fontFamily: fonts.family.fontFamilyRubix,

    },
    view: {
        marginTop: 20,
    },
    dateView: {
        marginTop: 20,
    },
    bookingDetails: {
        fontWeight: fonts.weight.fontWeight500,
        marginTop: 27,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
    },
    itemText: {
        marginLeft: 14,
        color: WHITE,
        marginTop: 21,
        fontFamily: fonts.family.fontFamilyRubix,
        fontWeight: fonts.weight.fontWeight400,
        fontSize: fonts.size.fontSize12,
    },
    itemCount: {
        marginLeft: 6,
        color: WHITE,
        marginTop: 21,
        fontFamily: fonts.family.fontFamilyRubix,
        fontWeight: fonts.weight.fontWeight400,
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
        fontWeight: fonts.weight.fontWeight400,
        color: VERY_DARK_GREY,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
    },
    booked: {
        marginTop: 22,
        marginLeft: 16,
        fontWeight: fonts.weight.fontWeight600,
        color: ORANGE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
    },
    download: {
        marginLeft: 160,
        marginTop: 2,
        color: DARK_BLUE,
        fontSize: fonts.size.fontSize12,
        fontWeight: fonts.weight.fontWeight500,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    booking: {
        flexDirection: ROW
    },
    color: {
        color: CYAN_BLUE,
        fontSize: fonts.size.fontSize10,
        fontWeight: fonts.weight.fontWeight400,
        fontFamily: fonts.family.fontFamilyRubix,
        marginLeft: 16,
        marginTop: 10,
    },
    button: {
        marginTop: 47,
        marginLeft: 13,
        marginRight: 14,
    },
    textReschedule: {

        color: ORANGE,
        fontSize: fonts.size.fontSize14,
        fontFamily: fonts.family.fontFamilyRubix,
    },
    testName: {
        marginTop: 27,
        marginBottom: 10,
        marginLeft: 13,
        fontWeight: fonts.weight.fontWeight700,
        fontFamily: fonts.family.fontFamilyRubix,

    },
    instructDetails: {
        fontWeight: fonts.weight.fontWeight500,
        marginTop: 11,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
    },
    totalLabDetails: {
        fontWeight: fonts.weight.fontWeight500,
        marginTop: 20,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize16,
    },
})