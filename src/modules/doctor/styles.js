import { StyleSheet } from "react-native";
import { BLACK,AMBER,GAINSBORO } from "../../styles/colors";


export const styles = StyleSheet.create({
    contentContainerStyle:{
        flexGrow: 1,
        paddingBottom:60
    },
    search:{
        backgroundColor:AMBER,
        color:GAINSBORO,
        marginTop:10,
        fontSize:12
    },
    theme:{colors: { text:BLACK }
    }
})