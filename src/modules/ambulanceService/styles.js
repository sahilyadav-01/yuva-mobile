import { StyleSheet } from "react-native"
import { BLACK, INDIGO_LIGHT, ORANGE } from "../../styles/colors"
import { ROW, SPACE_BETWEEN } from "../../styles/constants"
import { fonts } from "../../styles/fonts"
export const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 12
    },
    headingStyle: {
        marginLeft: 20, marginVertical: 16,
        color:INDIGO_LIGHT,
        fontSize:fonts.size.fontSize16,
        fontFamily:fonts.family.rubik400,
        lineHeight:fonts.Height.lineHeight24
    },
    mainImageStyle: {
        width: '100%'
    },
    subHeadingStyle: {
        marginLeft: 20, marginVertical: 24,
        color:INDIGO_LIGHT,
        fontSize:fonts.size.fontSize16,
        fontFamily:fonts.family.rubik500,
        lineHeight:fonts.Height.lineHeight24
    },
    detialsTextStyle: {
        marginLeft: 20, marginBottom: 8,
        color:INDIGO_LIGHT,
        fontSize:fonts.size.fontSize12,
        fontFamily:fonts.family.rubik400,
        lineHeight:fonts.Height.lineHeight18,
    },
    serviceCardMainContainer: {
        paddingHorizontal: 20, borderBlockColor: BLACK, borderWidth: 1, borderRadius: 12, marginVertical: 20, marginHorizontal: 12
    },
    serviceCardSubContainer: {
        flexDirection: ROW, justifyContent: SPACE_BETWEEN,
    },
    subContainerTextStyle: {
        paddingTop: 16,
        color:ORANGE,
        fontSize:fonts.size.fontSize16,
        fontFamily:fonts.family.rubik500,
        lineHeight:fonts.Height.lineHeight24
    },
    subContainerImageStyle:{
        marginTop: 8 
    },
    subContainerBottomTextStyle:{
        paddingBottom: 36,
        color:INDIGO_LIGHT,
        fontSize:fonts.size.fontSize12,
        fontFamily:fonts.family.rubik400,
        lineHeight:fonts.Height.lineHeight18
    }
})