import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE, ORANGE, PLATINUM, WHITE, AMBER, GAINSBORO, CYAN_BLUE, FLASH_WHITE } from '../../../styles/colors';
import { BOLD, COLUMN, ROW, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';
import { CENTER } from './constants';

export const styles = StyleSheet.create({

    boxStyles: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: PLATINUM,
        paddingBottom: 5,
        marginBottom: 15,
        color: DARK_BLUE,
        height: 50,
        width: "102%",
    },

    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 300,
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
    },
    touchable: {
        backgroundColor: ORANGE,
        marginTop: 40,
        borderRadius: 8
    },
    theme: { colors: { text: BLACK } },
    search: {
        backgroundColor: AMBER,
        color: GAINSBORO,
        marginTop: 1,
        fontSize: 1,
    },
    textColor: {
        color: CYAN_BLUE,
        fontWeight: BOLD,
        marginLeft: 3,
    },
    textColor2: {
        color: CYAN_BLUE,
        fontWeight: BOLD,
        marginLeft: 3,
        marginTop: 10
    },
    labTest: {
        flexDirection: COLUMN,
        marginLeft: 20,
        marginRight: 24,
        marginTop: 25,
        flex: 1,
        justifyContent: SPACE_BETWEEN
    },
    cards: {
        backgroundColor: WHITE,
        height: 96,
        marginTop: 19,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 12
    },
    image: {
        height: 33,
        width: 33

    },
    packageTest: {
        color: DARK_BLUE,
        fontSize: fonts.size.fontSize12,
        fontWeight: fonts.weight.fontWeight500,

    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 300,
    },
    textPackage: {
        marginTop: 33,
    },
    container: {
        marginBottom: 132,
    },
    booksID: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    textInputStyle: {
        borderBottomWidth: 1,
        borderColor: PLATINUM,
        paddingBottom: 15,
        marginBottom: 12,
        color: DARK_BLUE,
        height: 40,
        paddingLeft: 18,
    },
    dateTimePicker: {
        backgroundColor: { FLASH_WHITE },
        paddingLeft: 8,
    },
    margin: {
        marginBottom: 242,
    },
    card: {
        margin: 2
    },
    textBook: {
        textAlign: CENTER,
        fontWeight: fonts.weight.fontWeight500,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE

    },
    view:{
        marginTop:20,
    },
    dateView:{
        marginTop:66,
    },
    bookingDetails:{
        fontWeight:fonts.weight.fontWeight500,
        paddingTop: 15,
        paddingBottom:15,
        color:CYAN_BLUE
    },
    itemText:{
        marginLeft:10,
color:WHITE,
paddingBottom:1,
paddingTop:1
    },
    itemView:{
        backgroundColor:DARK_BLUE,
        marginBottom:10,
        paddingBottom:20,
        flexDirection:ROW
    },
    booked:{
        marginTop:10,
        marginBottom:10,
        fontWeight:fonts.weight.fontWeight600,
        color:CYAN_BLUE
    }
})