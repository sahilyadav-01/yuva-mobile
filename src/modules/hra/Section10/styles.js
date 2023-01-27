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

        marginTop: 106,
        fontWeight: fonts.weight.fontWeight600,
        textAlign: CENTER,
        fontSize: fonts.size.fontSize24,
        color: ORANGE,
    },
    topContainerSubTextStyle: {
        marginHorizontal: 30,

        marginTop: 30,
        fontWeight: fonts.weight.fontWeight500,
        textAlign: CENTER,
        fontSize: fonts.size.fontSize14,
        color: CYAN_BLUE,
    },
});