import { StyleSheet } from "react-native";
import { pink100 } from "react-native-paper/lib/typescript/styles/colors";
import { DARK_BLUE, ORANGE, WHITE } from "../../styles/colors";
import { CENTER, FLEX_END } from "../../styles/constants";
import { fonts } from "../../styles/fonts";


export const styles = StyleSheet.create({

    container: {
        position: "relative",
    },
    headerBackgroundTopContainer: {
        width: '100%',
        marginTop: 110,
        position: "absolute",
    },
    headerTopContainer: {
        width: '100%',
        height: '150%',
        position: "absolute",
    },
    logoContainer: {
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    logoImage1: {
        height: 38,
        width: 32,
    },
    logoImage2Container: {
        marginLeft: 6,
        alignItems: 'flex-end'
    },
    logoImage2: {
        height: 20,
    },
    logoImage3: {
        height: 25,
        width: 45,
    },
    IntroStaticScreen1Container: {
        marginTop: 30,
        height: '50%',
        alignItems: 'center',
    },
    IntroStaticScreen2Container: {
        marginTop: 20,
        height: '50%',
        alignItems: 'center',
    },
    IntroStaticScreen3Container: {
        marginTop: 30,
        height: '50%',
        alignItems: 'center',
    },
    IntroStaticScreen4Container: {
        marginTop: 30,
        height: '30%',
        alignItems: 'center',
    },
    IntroStaticScreen1Img: {
        marginTop: 110,
        height: '120%',
        width: '65%',
    },
    IntroStaticScreen2Img: {
        marginTop: 110,
        height: '130%',
        width: '35%',
    },
    IntroStaticScreen3Img: {
        marginTop: 110,
        height: '130%',
        width: '35%',
    },
    IntroStaticScreen4Img: {
        marginTop: 140,
        height: 120,
        width: 183,
    },
    IntroStaticScreen1Text: {
        marginTop: 10,
        color: DARK_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight400,
    },
    IntroStaticScreen1ColorText: {
        color: ORANGE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight400,
    },
    BackgroundBottomImage: {
        marginTop: 20,
        height: 150,
        width: '100%',
    },
    line: {
        borderBottomColor: ORANGE,
        borderBottomWidth: 2,
        width: '100%',
    },
    IntroStaticScreen1BottomContainer: {
        padding: 10,
        marginTop: 170,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    IntroStaticScreen2BottomContainer: {
        padding: 10,
        marginTop: 180,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    IntroStaticScreen3BottomContainer: {
        padding: 10,
        marginTop: 170,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    BottomContaierImage1: {
        marginLeft: 10
    },
    BottomContaierText: {
        marginRight: 20
    },
    IntroStaticScreen4Text:{
        marginTop:15,
        color:WHITE,
    },
    BottomContaierTextScreen4:{
        marginTop:120,
        alignItems: 'center',
        height:'30%',
        borderRadius: 8,
        backgroundColor: ORANGE ,
        width:'100%'
    },

});