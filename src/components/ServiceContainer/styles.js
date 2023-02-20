import { StyleSheet } from "react-native";
import { GAINSBORO_LIGHT, WHITE } from "../../styles/colors";
import { SPACE_BETWEEN, ROW, WRAP } from "../../styles/constants";

export const styles = StyleSheet.create({
    mainContainerStyle: {
        marginHorizontal: 16,
        marginTop: 20,
    },
    subContainerStyle2: {
        marginTop: 16,
        borderRadius: 6,
        flexDirection: ROW,
        flexWrap: WRAP,
        borderWidth: 0.3,
        borderColor: GAINSBORO_LIGHT,
        paddingTop: 14,
        paddingBottom: 20,
        backgroundColor: WHITE,
    },
    serviceCardContainerStyle:{
        flexDirection: ROW, 
        justifyContent: SPACE_BETWEEN 
    }
})
