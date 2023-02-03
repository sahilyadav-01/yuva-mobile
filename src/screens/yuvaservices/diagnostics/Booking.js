import React from 'react'
import { SafeAreaView} from 'react-native'
import { styles } from '../../styles';
import Booking from '../../../modules/diagnostic/Booking';
const BookingScreen = () => {
    return (
        <SafeAreaView style={styles.margin}>
            <Booking/>
        </SafeAreaView>
    )
}

export default BookingScreen;


