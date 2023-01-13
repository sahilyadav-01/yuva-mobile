import { StyleSheet } from "react-native";
import { DARK_BLUE, ORANGE, WHITE } from "../../styles/colors";
import { CENTER, FLEX_END } from "../../styles/constants";
import { fonts } from "../../styles/fonts";


export const styles = StyleSheet.create({

    container: {
        position: "relative",
    },
    screenMainContainer:{
        flexDirection: 'column',

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
        height: '50%',
        alignItems: 'center',
        // marginTop:60,
    },
    IntroStaticScreen1Img:{
        marginTop:110,
        height: '150%',
        width: '75%',
    },
    IntroStaticScreen2Img:{
        marginTop:110,

        height: 51,
        width: 183,
    },
    IntroStaticScreen4Img:{
        height: 51,
        width: 183,
    },
    IntroStaticScreen1Text:{
        // lineHeight: fonts.Height.lineHeight30,
         marginTop: 10,
        color: DARK_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight400,
    },
    IntroStaticScreen1ColorText:{
        color: ORANGE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight400,
    },
    BackgroundBottomImage:{
        marginTop: 20,
        width: '100%',
    },
    line: {
        borderBottomColor: ORANGE,
        borderBottomWidth: 1,
        width: '100%',
        // marginTop: 10,
      },
      IntroStaticScreen1BottomContainer:{
        margin:35,
        justifyContent: 'space-between',
        marginTop: 80,
        flexDirection: 'row',

      },
      BottomContaier:{
      },
      BottomContaierImage1:{
       
      },
    textStyle1: {
        color: DARK_BLUE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight500,
    },
    textStyle2: {
        color: ORANGE,
        fontFamily: fonts.family.fontFamilyRubix,
        fontSize: fonts.size.fontSize14,
        fontWeight: fonts.weight.fontWeight500,
    },
    buttonView: {
        flex: 1,
        justifyContent: FLEX_END,

    }
});