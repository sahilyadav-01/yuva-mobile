import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE, ORANGE, PLATINUM, WHITE, AMBER, GAINSBORO, CYAN_BLUE, FLASH_WHITE, INDIGO_LIGHT, RED, VERY_DARK_GREY, DARK_GREY, LIGHT_MERCURY, LIGHT_GREYISH_RED } from '../../../styles/colors';
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
        fontFamily: fonts.family.fontFamilyRubix,
    },
    dateTimePicker: {
        marginLeft: 28,
        marginRight: 30,
        minHeight: 42,
        backgroundColor: LIGHT_GREYISH_RED,
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
        marginLeft: 97,

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
    selectDate: {
        fontWeight: fonts.weight.fontWeight600,
        marginTop: 30,
        marginLeft: 16,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
    },
    Date: {
        marginTop: 30,
        fontWeight: fonts.weight.fontWeight400,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
    },
    Time: {
        marginTop: 27,
        fontWeight: fonts.weight.fontWeight400,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
    },
    dateAndTime: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        minHeight: 42
    },
    AddMember: {
        marginLeft: 276,
        fontWeight: fonts.weight.fontWeight500,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize10,
    },
    SelectMember: {
        marginLeft: 28,
        marginTop: 16,
        fontWeight: fonts.weight.fontWeight400,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
    },
    address: {
        flexDirection: ROW,
    },
    addNew: {
        marginLeft: 174,
        marginTop:33,
        fontWeight: fonts.weight.fontWeight500,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
    },
    container: {
        flex: 1,
        alignItems:CENTER,
        justifyContent:CENTER,
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
      checkboxAddress:{
        marginLeft:284,
        marginTop:37,
      },
      adressName:{
        marginTop:3,
        marginLeft:40,
        fontWeight: fonts.weight.fontWeight500,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize16,

      },
      adressCheck:{
        marginTop:3,
        marginLeft:40,
        fontWeight: fonts.weight.fontWeight400,
        color: CYAN_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize12,
      },
      border:{
        borderWidth:0.2,
        marginTop:14,
        marginLeft:16,
        marginRight:16,
        shadowColor:WHITE,
        shadowOpacity:"5%"

      }
})
