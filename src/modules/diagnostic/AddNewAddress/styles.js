import { StyleSheet } from 'react-native';
import { MARINER, WHITE } from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';


export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: WHITE,
    },
    booked: {
        marginTop: 16,
        marginLeft: 20,
        color: MARINER,
        fontFamily: fonts.family.montserrat600,
        fontSize: fonts.size.fontSize14,
    },
    addressContainer: {paddingHorizontal: 20},
    container: {backgroundColor:WHITE}

})
