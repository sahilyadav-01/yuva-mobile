import { StyleSheet } from 'react-native';
import { BOX_SHADOW, CYAN_BLUE, GREY70, ORANGE, V_LIGHT_GREY, WHITE } from '../../../../styles/colors';
import { CENTER, FLEX_END, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';
import { getDimensions } from '../../../../utils/utils';


const { width } = getDimensions();

export const styles = StyleSheet.create({
    textHeader: {
        marginBottom: 43,
        marginTop: 26,
        marginLeft: 17,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
        color: CYAN_BLUE
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 300,
    },
    circle: {
        marginLeft: 41,
        width: "80%",
        flexDirection: ROW,
        justifyContent: SPACE_BETWEEN,
    },
    progressBar: {
        width: '90%',
        justifyContent: CENTER,
        alignSelf: CENTER,
        marginTop: 20,
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
        backgroundColor: GREY70,
        flex: 1,
    },
    touchableButton: {
        backgroundColor: ORANGE,
        marginTop: 40,
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 8
    },
    tobePaid: {
        textAlign: CENTER,
        paddingTop: 15,
        paddingBottom: 15,
        color: WHITE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize16,

    },
    address: {
        flexDirection: ROW,
    },
    selectDate: {
        marginTop: 30,
        marginLeft: 16,
        marginRight: 140,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
    },
    Add: {
        marginLeft: 38,
        borderWidth: 0.1,
        marginTop: 18,
        shadowColor: WHITE,
        shadowOpacity: 0.5,
        borderRadius: 3,
        backgroundColor: WHITE,
        dropShadow: BOX_SHADOW,
        flexDirection:ROW,
    },
    addNew: {
        alignItems:CENTER,
        marginRight:15,
        marginLeft: 7.33,
        minHeight: 25,
        marginTop: 9,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik500,
        fontSize: fonts.size.fontSize12,
    },
    svg:{
        marginTop:9,
        marginLeft:7.33,
    },
    border: {
        borderWidth: 0.2,
        marginTop: 14,
        marginLeft: 16,
        marginRight: 16,
        shadowColor: WHITE,
        shadowOpacity: 0.5,
        borderRadius: 6,
        backgroundColor: WHITE,
        dropShadow: BOX_SHADOW

    },
    checkboxAddress: {
        alignItems:FLEX_END,
        marginRight:19,
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
        marginRight:25,
    },
    adressCheck: {
        marginTop: 11,
        marginLeft: 40,
        marginBottom: 15,
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize14,
    },
    Image: {
        flex: 1,
        marginTop: 10,

    },
    Images: {
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW,
        marginRight:25,
    },
    AddText: {
        marginLeft: '6%',
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize10,
    },
    check:{
        marginRight: '6%',
        color: CYAN_BLUE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize10,
    },
    progress: {
       justifyContent:SPACE_BETWEEN,
       flexDirection:ROW,
    }



});