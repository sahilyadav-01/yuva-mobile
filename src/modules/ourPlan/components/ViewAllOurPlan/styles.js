import { StyleSheet } from 'react-native';
import { DARK_BLUE, DARK_GREY, GREY, LIGHT_GREY, ORANGE, PLATINUM, RED, SERENADE, TINTS_OF_SOLITUDE, VERY_DARK_GREY, WHITE } from '../../../../styles/colors';
import { CENTER, FLEX, FLEX_END, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';


export const styles = StyleSheet.create({

    OurplanView: {
        marginVertical: 26,
    },
    sudHeaderText: {
        fontSize: fonts.size.fontSize20,
        fontFamily: fonts.family.rubik400,
        color: ORANGE,
        paddingHorizontal: 22,
        paddingVertical: 10
    },
    numberView: {
        backgroundColor: TINTS_OF_SOLITUDE,
        paddingBottom: 20,
    },
    subNumberView: {
        marginHorizontal: 14,
        marginVertical: 10,
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: PLATINUM,
        marginHorizontal: 24,
        color: DARK_BLUE,
        borderColor: GREY,
        textAlign: CENTER,
        borderRadius: 6,
    },
    touchableOpacityStyle: {
        display: FLEX,
        alignItems: CENTER,
        justifyContent: CENTER,
        backgroundColor: ORANGE,
        borderRadius: 8,
        height: 48,
        marginVertical: 30,
        marginHorizontal: 24,
    },
    touchableOpacityTextStyle: {
        textAlign: CENTER,
        color: WHITE,
    },
    ScrollViewContainerStyle: {
        paddingBottom: '17%',
    },
    frequentText: {
        fontSize: fonts.size.fontSize18,
        fontFamily: fonts.family.rubik500,
        color: ORANGE,
        textAlign: CENTER
    },
    frequentView: {
        backgroundColor: WHITE,
        marginHorizontal: 14,
        marginVertical: 22,
        minHeight: 400,
        paddingTop: 28,
        paddingBottom: 20,
        borderRadius: 16,
        elevation: 5,
    },
    fqaQuestionView: {
        backgroundColor: SERENADE,
        minHeight: 70,
        marginBottom: 15,
        marginHorizontal: 12,
        paddingHorizontal: 16,
        paddingVertical: 21,
        borderRadius: 12,
        elevation: 2,
        flexDirection: ROW,
        justifyContent: SPACE_BETWEEN
    },
    faqQuestion: {
        fontSize: fonts.size.fontSize14,
        fontFamily: fonts.family.rubik400,
        color: DARK_BLUE,
        width: "80%"
    },
    faqAnswers: {
        fontSize: fonts.size.fontSize14,
        fontFamily: fonts.family.rubik400,
        color: VERY_DARK_GREY,
        marginTop: 25,
    },
    plusIcon: {
        justifyContent: FLEX_END,
    },
    faqAnswerView: {
        width: "90%"
    },
    errorContact: {
        color: RED,
        marginHorizontal: 30,
        marginVertical:5,
        fontSize: fonts.size.fontSize10,
        fontFamily: fonts.family.rubik400,
      },
});