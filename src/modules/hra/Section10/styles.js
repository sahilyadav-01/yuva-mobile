import { StyleSheet } from "react-native";
import { ORANGE, CYAN_BLUE } from "../../../styles/colors";
import { CENTER } from "../../../styles/constants";
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({

    topContainer: {
        marginTop: 0,
        height: '100%',
        width: '100%',
        marginVertical: 20,
    },
    topContainerTextStyle: {
        marginHorizontal: 30,
        marginTop: 23.64,
        fontWeight: fonts.weight.fontWeight600,
        fontfamily: fonts.family.rubik600,
        textAlign: CENTER,
        fontSize: fonts.size.fontSize20,
        color: ORANGE,
    },
    topContainerSubTextStyle: {
        marginHorizontal: 30,
        fontfamily: fonts.family.rubik600,
        marginTop: 30,
        fontWeight: fonts.weight.fontWeight600,
        textAlign: CENTER,
        fontSize: fonts.size.fontSize14,
        color: CYAN_BLUE,
    },
    imageBackground: {
        alignItems: CENTER,
        marginTop: 23.09,
    },
    bottomContainer: {
        marginTop: 28,
        alignItems: CENTER,
    }
});