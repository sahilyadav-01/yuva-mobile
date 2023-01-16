import { StyleSheet } from "react-native";
import { pink100 } from "react-native-paper/lib/typescript/styles/colors";
import { DARK_BLUE, ORANGE, WHITE } from "../../styles/colors";
import { CENTER, FLEX_END, RELATIVE, ABSOLUTE, SPACE_BETWEEN, ROW } from "../../styles/constants";
import { fonts } from "../../styles/fonts";


export const styles = StyleSheet.create({

    mainContainer: {
        height: '100%',
    },
    topContainer: {
        height: '90%',
    },
    topContainer4: {
        height: '80%',
    },
    bottomContainer: {
        height: '10%',
    },
    bottomContainer4: {
        height: '20%',
        alignItems: CENTER,
    },
    container: {
        position: RELATIVE,
    },
    headerBackgroundTopContainer: {
        width: '100%',
        marginTop: '30%',
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
        marginTop: '10%',
        height: '50%',
        alignItems: CENTER,
    },
    IntroStaticScreen2Container: {
        marginTop: '5%',
        height: '50%',
        alignItems: CENTER,
    },
    IntroStaticScreen4Container: {
        marginTop: '15%',
        height: '30%',
        alignItems: CENTER,
    },
    IntroStaticScreen1Img: {
        marginTop: '35%',
        height: '80%',
        width: '65%',
    },
    IntroStaticScreen2Img: {
        marginTop: '40%',
        height: '90%',
        width: '40%',
    },
    IntroStaticScreen3Img: {
        marginTop: '35%',
        height: '90%',
        width: '35%',
    },
    IntroStaticScreen4Img: {
        marginTop: '35%',
        height: '90%',
        width: '55%',
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
        // marginTop: '5%',
        height:'90%',
        width: '100%',
    },
    BackgroundBottomImage4: {
        marginTop: '10%',
        height:'200%',
        width: '100%',
    },
    line: {
        borderBottomColor: ORANGE,
        borderBottomWidth: 2,
        width: '100%',
    },
    subBottomContainer: {
        marginTop:'2%',
        alignItems: CENTER,
        padding: '5%',
        justifyContent: SPACE_BETWEEN,
        flexDirection: ROW,
    },
    BottomContaierImage1: {
        marginLeft: 10
    },
    BottomContaierText: {
        marginRight: 20
    },
    IntroStaticScreen4Text: {
        marginTop: 15,
        color: WHITE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight700,
    },
    BottomContaierTextScreen4: {
        marginTop:'20%',
        alignItems: CENTER,
         height: '35%',
        borderRadius: 8,
        backgroundColor: ORANGE,
        width: '80%'
    },

});