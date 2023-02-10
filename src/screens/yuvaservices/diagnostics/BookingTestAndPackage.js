import React from 'react';
import { SafeAreaView } from 'react-native'
import { styles } from '../../styles';
import BookingTestAndPackage from '../../../modules/diagnostic/BookingTestAndPackage';
const BookingTestAndPackageScreen = () => {
    return (
        <SafeAreaView style={styles.margin}>
            <BookingTestAndPackage />
        </SafeAreaView>
    )
}

export default BookingTestAndPackageScreen;
