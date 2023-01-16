import { StyleSheet } from "react-native";
import { pink100 } from "react-native-paper/lib/typescript/styles/colors";
import { DARK_BLUE, ORANGE, WHITE } from "../../styles/colors";
import { CENTER, FLEX_END,RELATIVE,ABSOLUTE,SPACE_BETWEEN,ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";


export const styles = StyleSheet.create({

    container: {
        position: RELATIVE,
    },
    headerBackgroundTopContainer: {
        width: '100%',
        marginTop: 110,
        position: ABSOLUTE,
    },
    headerTopContainer: {
        width: '100%',
        height: '150%',
        position: ABSOLUTE,
    },
    logoContainer: {
        marginTop: 50,
        justifyContent: CENTER,
        flexDirection: ROW,
    },
    logoImage1: {
        height: 38,
        width: 32,
    },
    logoImage2Container: {
        marginLeft: 6,
        alignItems: FLEX_END
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
        alignItems: CENTER,
    },
    IntroStaticScreen2Container: {
        marginTop: 20,
        height: '50%',
        alignItems: CENTER,
    },
    IntroStaticScreen3Container: {
        marginTop: 30,
        height: '50%',
        alignItems: CENTER,
    },
    IntroStaticScreen4Container: {
        marginTop: 30,
        height: '30%',
        alignItems: CENTER,
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
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW,
    },
    IntroStaticScreen2BottomContainer: {
        padding: 10,
        marginTop: 180,
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW,
    },
    IntroStaticScreen3BottomContainer: {
        padding: 10,
        marginTop: 170,
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW,
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
        alignItems: CENTER,
        height:'30%',
        borderRadius: 8,
        backgroundColor: ORANGE ,
        width:'100%'
    },

});