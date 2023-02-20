import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import AppointmentButton from '../../../components/AppointmentButton';
import MessageBox from '../../../components/MessageBox';
import { styles } from './styles';
import Header from '../../../components/Header';
import { ARE_YOU_SURE, CALENDER, CANCEL, DETAILS, MESSAGE, PACKAGE, RESCHEDULE, SELECTED_ADRESS, TEST, } from './constants';
import { RED_SHADE, AMBER } from '../../../styles/colors';
import { useRescheduleAndCancel } from './hooks/useRescheduleAndCancel';
import { getPlanDate } from '../../../utils/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const RescheduleAndCancel = () => {
    const cancelMessage = ARE_YOU_SURE;
    const {
        cancelBookingButton,
        cancelBooking,
        cancelFlag,
        reschedule,
        rescheduleBooking
    } = useRescheduleAndCancel();
    const renderTest = ({ item, index }) => {
        return (
            <View style={styles.TestList}>
                <Text style={styles.testItems}>{item}</Text>

            </View>
        )
    }
    const renderPackage = ({ item, index }) => {
        return (
            <View style={styles.details}>
                <Text style={styles.packageName}>{item.name}</Text>
                <TouchableOpacity>
                    <Text style={styles.packageDetails}>{DETAILS}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View >
            <Header isRightIcon={true} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.Status}>
                    <Text style={styles.BookingStatus}>{reschedule?.bookingStatus}</Text>
                    <Text style={styles.timeSlot}>
                        <Icon
                            name={CALENDER}
                            size={24}

                        />
                        {getPlanDate(reschedule?.timeSlot)}</Text>
                </View>
                <View >
                    <Text style={styles.selectDate}>
                        {SELECTED_ADRESS}
                    </Text>
                </View>
                <View style={styles.border}>
                    <Text style={styles.adressName}>{reschedule?.patientName}</Text>
                    <Text style={styles.address}>{reschedule?.patientLocation}</Text>
                    <Text style={styles.adressPhn}>{reschedule?.patientPhoneNumber}</Text>
                </View>
                <View style={styles.TestHeader}>
                    <Text style={styles.Test}>{TEST}</Text>
                </View>
                <View >
                    {reschedule?.testName?.length &&
                        <FlatList
                            renderItem={renderTest}
                            data={reschedule.testName}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />}
                </View>
                <View style={styles.PackageHeader}>
                    <Text style={styles.package}>{PACKAGE}</Text>
                </View>
                <View>
                    {reschedule?.packageNameDescriptionDtoList?.length &&
                        <FlatList
                            renderItem={renderPackage}
                            data={reschedule.packageNameDescriptionDtoList}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />}
                </View>
                <View style={styles.button}>
                    <AppointmentButton
                        name={RESCHEDULE}
                        color={AMBER}
                        action={rescheduleBooking}
                    />
                    <AppointmentButton
                        name={CANCEL}
                        color={RED_SHADE}
                        action={cancelBookingButton}
                    />
                </View>
                <View>
                    <MessageBox
                        head={MESSAGE}
                        showDialog={cancelFlag}
                        hideDialog={cancelBooking}
                        message={cancelMessage}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default RescheduleAndCancel;