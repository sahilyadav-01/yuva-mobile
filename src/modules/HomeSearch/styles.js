import { StyleSheet } from "react-native";
import { BLACK, CYAN_BLUE, DARK_BLUE, GREY70, LIGHT_GREY, LIGHT_GREYISH_RED, LIGHT_MERCURY, ORANGE, RED, RED_SHADE, V_LIGHT_GREY, WHITE } from "../../styles/colors";
import { ABSOLUTE, CENTER, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";


export const styles = StyleSheet.create({

    expert: {
        marginHorizontal: 14,
        minHeight: 122,
        borderRadius: 4,
        marginTop: "8%",
        shadowOpacity: 5,
        shadowOpacity: '15%',
        shadowColor: BLACK,
        backgroundColor: WHITE,
        elevation: 3,
    },
    nurse: {
        flexDirection: ROW,
        paddingBottom:17
    },
    nurseImage: {
        marginHorizontal: "5%",
        marginVertical: "3%",
        borderRadius: 50,
        shadowColor: WHITE,
        shadowOpacity: '15%',
        shadowColor: BLACK,
        backgroundColor: WHITE,
        elevation: 5,
    },
    nurseText: {
        marginHorizontal: "1%",
        color: ORANGE,
        width: "65%",
        marginVertical: "4.5%",

    },
    textInputStyle: {
        borderWidth:0.5,
        height:30,
        width:"100%",
        textAlign:CENTER,
        paddingVertical:3,
        backgroundColor: WHITE,
        elevation: 3,
        marginLeft:20,
        borderColor:WHITE,
        shadowOpacity: '15%',
       borderTopLeftRadius:3,
       borderBottomLeftRadius:3,
    },
    Button: {
        borderWidth:0.5,
        height:30,
        width:"100%",
        textAlign:CENTER,
        paddingVertical:3,
        backgroundColor: ORANGE,
        elevation: 3,
        marginLeft:20,
        borderColor:WHITE,
        shadowOpacity: '15%',
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
    },
    touchableOpacityTextStyle: {
        textAlign: CENTER,
        color: WHITE,
    },
    testView: {
        marginTop: "12%",
        marginHorizontal: 14,
        minHeight: 102,
        shadowOpacity: 2,
        shadowColor: RED,
        shadowOpacity: '15%',
        backgroundColor: WHITE,
        elevation: 2,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    headerView: {
        minHeight: 47,
        shadowOpacity: 2,
        shadowColor: RED,
        shadowOpacity: '15%',
        backgroundColor: WHITE,
        elevation: 1,
    },
    headerText: {
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize12,
        fontWeight: fonts.weight.fontWeight400,
        color: ORANGE,
        marginVertical: "5%",
        marginHorizontal: "5%",
    },
    ScrollViewContainerStyle: {
        paddingBottom: '100%',
    },
    listText: {
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize10,
        fontWeight: fonts.weight.fontWeight400,
        color: CYAN_BLUE,
        marginHorizontal: "4%",
        marginVertical: "2%"

    },
    dropDown: {
        flexDirection: ROW,
        alignItems: CENTER,
        backgroundColor:LIGHT_GREYISH_RED,
        borderRadius: 5,
        marginHorizontal: "3.5%",
        position: ABSOLUTE,
        zIndex: 999,
        marginTop: 142,
    },
    textList: {
        marginHorizontal: "5%",
        marginVertical: 5,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize10,
        fontWeight: fonts.weight.fontWeight400,
    },
    textColor: {
        color: CYAN_BLUE
    },
    touchableOpactiy: {
        flexDirection: ROW
    },
    textColorEnum:{
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize8,
        fontWeight: fonts.weight.fontWeight400,
        marginVertical:"1.5%",
        marginHorizontal:"8%",
        opacity:0.7
    },
    errorContact:{
        color:RED_SHADE,
        marginTop:5,
        marginLeft:25,
        fontFamily: fonts.family.rubik400,
        fontSize: fonts.size.fontSize10,
        fontWeight: fonts.weight.fontWeight400,
    }
});