import { StyleSheet } from 'react-native';
import { BLACK, MARINER, WHITE } from '../../../styles/colors';
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
        fontFamily: fonts.family.montserrat600,
        fontWeight: fonts.weight.fontWeight600,
        color: BLACK,
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
        backgroundColor: MARINER,
    },
    buttonText: {
        fontFamily: fonts.family.montserrat600,
        fontWeight: fonts.weight.fontWeight600,
        color: WHITE,
        fontSize: fonts.size.fontSize16,
        lineHeight: 24,
    },
    subHeadingTextStyle: {
        fontFamily: fonts.family.montserrat400,
        fontWeight: fonts.weight.fontWeight400,
        color: MARINER,
        fontSize: fonts.size.fontSize14,
        lineHeight: 21,
    },
    subHeadingTextContainerStyle: {

    },
    subTextContainerStyle:{
        marginTop:15,
    },
    subTextStyle: {
        fontFamily: fonts.family.monsterrant500,
        fontWeight: fonts.weight.fontWeight400,
        color: BLACK,
        fontSize: fonts.size.fontSize14,
        lineHeight: 21,
    },
});
