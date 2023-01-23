import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppointmentButton from '../../../components/AppointmentButton';
import { useNavigation } from '@react-navigation/core'
import { bookedDetailsByIdThunk, rescheduleCancelBookingThunk } from '../../../store/reducers/DiagnosticsSlice';
import MessageBox from '../../../components/MessageBox';
import { styles } from './styles';
import Header from '../../../components/Header';
import { ABOUT_TEST, ARE_YOU_SURE, BOKINGTESTANDPACKAGE, CANCEL, DIAGNOSTIC, INSTRUCTIONS, LOCATION, MESSAGE, RESCHEDULE, TRUE } from './constants';
import { RED_SHADE, WHITE } from '../../../styles/colors';
const RescheduleTestAndPackage = ({ route }) => {
    const { jwt } = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const { bookedDetailsById, cancelled } = useSelector(state => state.diagnostic)
    const { id } = route.params;
    const navigation = useNavigation()
    useEffect(() => {
        dispatch(bookedDetailsByIdThunk({ jwt, id }));
    }, [])
    const [cancelFlag, setCancelFlag] = useState(false);
    const cancelMessage = ARE_YOU_SURE;
    const cancelBooking = () => {
        const isCancelled= TRUE;
        dispatch(rescheduleCancelBookingThunk({ jwt, id, isCancelled, timeSlot: '' }))
    }
    const cancelBookingButton = () => {
        setCancelFlag(true);
    };
    const rescheduleBooking = () => {
        navigation.navigate(BOKINGTESTANDPACKAGE, { bookedDetailsById: { ...bookedDetailsById, flag: true } })
    }
    useEffect(() => {
        if (cancelled) {
            navigation.navigate(DIAGNOSTIC)
        }
    }, [cancelled])
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView style={styles.booksID} contentContainerStyle={styles.contentContainerStyle}
    >
                <View>
                    <View>
                        <Text style={styles.testName}>
                            {!bookedDetailsById?.packageName ? (
                                <Text style={styles.textReschedule}>
                                    {bookedDetailsById?.testName}
                                </Text>
                            ) : (
                                <Text style={styles.textReschedule}>
                                    {bookedDetailsById?.packageName}
                                </Text>
                            )}
                        </Text>
                    </View>
                    <View>
                        {!bookedDetailsById?.packageName &&
                            <View>
                                <Text style={styles.bookingDetails}>
                                   {ABOUT_TEST}
                                </Text>
                                <Text style={styles.color}>{bookedDetailsById?.testOrPackageDescription}</Text>
                                <Text style={styles.bookingDetails}>
                                    {INSTRUCTIONS}
                                </Text>
                            </View>
                        }
                        <Text>{bookedDetailsById?.instruction}</Text>
                        <Text style={styles.bookingDetails}>
                            Appointment {bookedDetailsById?.bookingStatus} - Offline
                        </Text>
                        <Text>{bookedDetailsById?.labAssistantName}</Text>
                        <Text style={styles.bookingDetails}>
                            {bookedDetailsById?.labName}
                        </Text>
                        <Text style={styles.bookingDetails}>
                            {LOCATION}
                        </Text>

                        <Text>{bookedDetailsById?.patientLocation}</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <AppointmentButton
                        name={RESCHEDULE}
                        color={WHITE}
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
        </SafeAreaView>
    );
};

export default RescheduleTestAndPackage;