import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import { useAddNewAddress } from './hooks/useAddNewAddress';
import { styles } from './styles';
import AddNewAddres from '../../../components/AddNewAddres';
import { BOOKING_CONFIRM, MY_TESTS } from './constants';

const AddNewAddress = () => {

    const { packageDetails } = useAddNewAddress();
    return (
        <View>
            <Header showBackButton={true} title={MY_TESTS} />
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <Text style={styles.booked}>
                        {packageDetails?.packageName}
                    </Text>
                </View>
                <View>
                    <AddNewAddres isScreen={BOOKING_CONFIRM} />
                </View>
            </ScrollView >
        </View >
    )
}
export default AddNewAddress;
