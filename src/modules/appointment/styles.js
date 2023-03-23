import { StyleSheet } from "react-native";
import { CYAN_BLUE } from "../../styles/colors";
import { CENTER } from "../../styles/constants";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
    contentContainerStyle:{
        flexGrow: 1,
        paddingBottom:60,  
        margin:10,
        marginBottom:-225,   
    },
    emptyContainer: {height:'100%',alignItems:CENTER,justifyContent:CENTER},
    emptyText: {fontFamily:fonts.family.rubik500,color:CYAN_BLUE}
})