import { StyleSheet } from 'react-native';
import { ORANGE } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';


export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 400,
    },
    booked: {
        marginTop: 22,
        marginLeft: 16,
        color: ORANGE,
        fontFamily: fonts.family.rubik600,
        fontSize: fonts.size.fontSize14,
    },

})
