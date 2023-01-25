import { StyleSheet } from "react-native";
import { WHITE, DARK_BLUE } from "../../../styles/colors";
import { CENTER, FLEX, ROW } from "../../../styles/constants";
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
    progressBarContainer: {
        width: '100%',
    },
    topContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    topContainerTextStyle: {
        fontWeight: '500',
        fontSize: 24,
        color: '#1D2334',
    },
    scrollViewContainer: {
        height: 650,
    },
    scrollViewContentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 300
    },
    touchableOpacityViewContainer: {
        marginTop: 30,
    },
    touchableOpacityStyle: {
        borderRadius: 8,
        backgroundColor: "#E68D36"
    },
    touchableOpacityTextStyle: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        color: 'white',
    },
    questionViewContainer: {
        marginTop: 20,
    },
    questionViewContainerText: {
        fontSize: 16,
        marginBottom: 9,
        color: '#282A2E'
    },
    text: {
        color: '#282A2E',
        fontSize: 16,
        marginBottom: 9,
    },
    textError: {
        color: 'red',
        fontSize: 16,
        marginBottom: 8,
    },
    questionViewContainerTextInput: {
        height: 48,
        borderRadius: 8,
        paddingLeft: 5,
        marginTop: 8,
        fontSize: 12,
        backgroundColor: '#ffffff',
        borderWidth: 1,
    },
    boxStylesContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        height: 50,
        borderWidth: 1,
        borderColor: '#1D2334',
    }
    //style={styles.questionViewContainerTextInput}

    // style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
    // className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"

    // mainContainer: {
    //     display: FLEX,
    // },
    // topContainer: {
    //     shadowColor: 'rgba(0, 0, 0, 0.1)',
    //     shadowOffset: { width: 0, height: 0 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 4,
    //     elevation: 4,
    //     marginTop: 24,
    //     height: 135,
    //     marginHorizontal: 14,
    //     marginTop: 20,
    //     borderRadius: 12,
    //     backgroundColor: WHITE,
    // },
    // subTopContainer: {
    //     display: FLEX,
    //     flexDirection: ROW,
    //     marginHorizontal: 14,
    //     paddingVertical: 18,
    // },
    // parentTextContainer: {
    //     alignItems: CENTER,
    // },
    // textContainerStyle: {
    //     color: DARK_BLUE,
    //     fontWeight: fonts.weight.fontWeight600,
    //     marginTop: 30,
    //     height: 100,
    //     width: 180,
    //     fontSize: fonts.size.fontSize14,
    // },
    // imageContainerStyle: {
    //     marginLeft: 20,
    // },
    // imageStyle: {
    //     height: 100,
    //     width: 130,
    // },
    // bottomContainer: {
    //     marginHorizontal: 14,
    // },
});