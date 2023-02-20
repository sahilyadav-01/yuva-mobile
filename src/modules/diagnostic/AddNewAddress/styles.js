import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE, ORANGE, PLATINUM, WHITE, AMBER, GAINSBORO, CYAN_BLUE, FLASH_WHITE, INDIGO_LIGHT, RED, VERY_DARK_GREY, DARK_GREY, LIGHT_MERCURY, LIGHT_GREYISH_RED, BOX_SHADOW } from '../../../styles/colors';
import { BOLD, COLUMN, FLEX_END, ROW, SPACE_BETWEEN } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';
import { CENTER } from './constants';

export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 400,
    },
    booked: {
        marginTop: 22,
        marginLeft: 16,
        color: ORANGE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
    },
    AddNewAddress: {
        marginTop: 30,
        marginLeft: 16,
        marginRight: 140,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
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
    AddAddressLine: {
        marginTop: 16,
        marginLeft: 12,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: LIGHT_MERCURY,
        backgroundColor: LIGHT_GREYISH_RED,
        borderRadius:6,
        marginBottom:11,
        color: DARK_BLUE,
        minHeight: 42,
        marginLeft: 12,
        marginRight:26,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize14,
    },
    boxStyles: {
        marginLeft: 12,
        marginRight: 26,
        borderWidth: 0.1,
        backgroundColor: LIGHT_GREYISH_RED,
        borderColor: LIGHT_MERCURY,
        minHeight: 42,
        borderRadius: 2,
        marginBottom:31
    },
    touchableButton: {
        backgroundColor: ORANGE,
        marginTop: 34,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
        minHeight:48
    },
    textBook: {
        textAlign: CENTER,
        color: WHITE,
        fontFamily: fonts.family.rubik600,
        marginLeft: 141,
        marginTop:12,
        fontSize: fonts.size.fontSize16,

    },
})
