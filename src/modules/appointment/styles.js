import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../../styles/colors";
import { CENTER } from "../../styles/constants";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
    contentContainerStyle:{
        flexGrow: 1,
        paddingBottom: 24,
        paddingHorizontal: 10,
        backgroundColor: WHITE
    },
    emptyContainer: {height:'100%',alignItems:CENTER,justifyContent:CENTER},
    emptyText: {fontFamily:fonts.family.monsterrant500,color:BLACK}
})