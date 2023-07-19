import { StyleSheet } from 'react-native';
import { CYAN_BLUE, LIGHT_GREY, ORANGE, WHITE } from '../../../styles/colors';
import { CENTER } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        paddingBottom:12,
    },
    headingTextContainerStyle: {
        marginTop: 30,
    },
    headingTextStyle: {
        fontFamily: fonts.family.rubik600,
        fontWeight: fonts.weight.fontWeight600,
        color: CYAN_BLUE,
        fontSize: fonts.size.fontSize14,
        lineHeight: 21,
    },
    buttonContainer: {
        marginVertical: 24,
        marginHorizontal: '4%',
        height: 48,
        borderRadius: 8,
        justifyContent: CENTER,
        alignItems: CENTER,
        backgroundColor: ORANGE,
    },
    buttonText: {
        fontFamily: fonts.family.rubik400,
        fontWeight: fonts.weight.fontWeight500,
        color: WHITE,
        fontSize: fonts.size.fontSize14,
        lineHeight: 21,
    },
    subHeadingTextStyle: {
        fontFamily: fonts.family.rubik400,
        fontWeight: fonts.weight.fontWeight400,
        color: ORANGE,
        fontSize: fonts.size.fontSize20,
        lineHeight: 30,
    },
    subHeadingTextContainerStyle: {

    },
    subTextContainerStyle:{
        marginTop:15,
    },
    subTextStyle: {
        fontFamily: fonts.family.rubik400,
        fontWeight: fonts.weight.fontWeight400,
        color: CYAN_BLUE,
        fontSize: fonts.size.fontSize20,
        lineHeight: 30,
    },



});
