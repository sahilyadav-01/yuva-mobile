import { StyleSheet } from 'react-native';
import { BOX_SHADOW, CYAN_BLUE, DARK_BLUE, GREEN, GREY70, ORANGE, RED, V_LIGHT_GREY, WHITE } from '../../../../styles/colors'
import { FLEX_END, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { CENTER } from './constants';

export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 400,
    },
    circle: {
        marginLeft: 41,
        width: "80%",
        flexDirection: ROW,
        justifyContent: "space-between",
    },
    progressBar: {
        marginTop: 30,
        flexDirection: ROW,
    },
    circles: {
        width: 10,
        height: 10,
        borderRadius: 15,
        borderWidth: 1,
        color: V_LIGHT_GREY,

    },
    Line: {
        marginTop: 5,
        width: 1,
        height: 1,
        backgroundColor: GREEN,
        flex: 1,
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
    checkboxAddress: {
        alignItems: FLEX_END,
        marginRight: 19,
        marginTop: 14,
    },
    adressName: {
        marginLeft: 40,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,

    },
    Images: {
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW,
        marginRight: 25,
    },
    adressCheck: {
        marginTop: 11,
        marginLeft: 40,
        marginBottom: 15,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize14,
    },
    TextPrice: {
        marginLeft: 26,
        marginTop: 20,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize14,
    },
    line: {
        marginTop: 20,
        borderWidth: 0.2,
        marginLeft: 24,
        width: "85%",
        borderColor: GREY70,
    },
    orderPrice: {
        marginLeft: 26,
        marginTop: 15,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize16,
    },
    OrderAmountDirection: {
        flexDirection: ROW,
    },
    orderAmount: {
        marginLeft: 151,
        marginTop: 15,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize16,
    },
    Input: {
        borderColor: GREY70,
        borderWidth: 1,
        borderRadius: 12,
        marginLeft: 24,
        marginTop: 35,
        minHeight: 40,
        width: "60%",
    },
    Apply: {
        marginLeft: 27,
        color: WHITE,
        marginTop: 10,

    },
    ApplyCoupon: {
        alignItems: CENTER,
        borderWidth: 0.5,
        borderRadius: 12,
        minHeight: 40,
        width: 100,
        marginTop: 35,
        alignSelf: CENTER,
        backgroundColor: ORANGE,
        borderColor: GREY70,
    },
    Amountpyable:{
        marginLeft: 26,
        marginTop: 21,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize16,
    },
    payableAmount:{
        marginLeft: 151,
        marginTop: 15,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize16,  
    },
    touchableButton: {
        backgroundColor: ORANGE,
        marginTop: 40,
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 8,
        minHeight:48,
        alignItems:CENTER,
    },
    tobePaid: {
        marginLeft:110,
        marginRight:5,
        textAlign:CENTER,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize16,

    },
    termsAndCondtion:{
        marginTop: 20,
        marginLeft: 12,
        marginRight: 56,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize10,   
    },
    checkBoxContainer: {
        marginLeft: 24,
        width: 13,
        height: 13,
        marginTop: 20,
        borderWidth: 1,
        borderColor: CYAN_BLUE,
        marginRight: 12,
      },
})
