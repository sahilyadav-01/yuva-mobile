import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppointmentButton from '../../../components/AppointmentButton';
import DiagnosticHeader from '../../../components/DiagnosticHeader';
import { useNavigation } from '@react-navigation/core'
import MainHeader from '../../../components/MainHeader';
import { bookedDetailsByIdThunk, rescheduleCancelBookingThunk } from '../../../store/reducers/DiagnosticsSlice';
import MessageBox from '../../../components/MessageBox';
import { styles } from './styles';
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
    const cancelMessage = 'Are you sure you want to cancel ?';
    const cancelBooking = () => {
        dispatch(rescheduleCancelBookingThunk({ jwt, id, isCancelled: "true", timeSlot: '' }))
    }
    const cancelBookingButton = () => {
        setCancelFlag(true);
    };
    const rescheduleBooking = () => {
        navigation.navigate("BookingTestAndPackage", { bookedDetailsById: { ...bookedDetailsById, flag: true } })
    }
    useEffect(() => {
        if (cancelled) {
            navigation.navigate("Diagnostic")
        }
    }, [cancelled])
    return (
        <SafeAreaView style={styles.container}>
            <MainHeader />
            <DiagnosticHeader />
            <ScrollView className="pl-[15px] pr-[15px]" contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 300
            }}>
                <View>
                    <View>
                        <Text className="mt-[10px] mb-[10px] font-bold text-lg text-black">
                            {!bookedDetailsById?.packageName ? (
                                <Text className="text-[#E68D36] text-sm">
                                    {bookedDetailsById?.testName}
                                </Text>
                            ) : (
                                <Text className="text-[#E68D36] text-sm">
                                    {bookedDetailsById?.packageName}
                                </Text>
                            )}
                        </Text>
                    </View>
                    <View>
                        {!bookedDetailsById?.packageName &&
                            <View>
                                <Text style={styles.bookingDetails}>
                                    About the test
                                </Text>
                                <Text>{bookedDetailsById?.testOrPackageDescription}</Text>
                                <Text style={styles.bookingDetails}>
                                    Instructions
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
                            Location
                        </Text>

                        <Text>{bookedDetailsById?.patientLocation}</Text>
                    </View>
                </View>
                <View className="mt-[47px] ml-[13px] mr-[14px]">
                    <AppointmentButton
                        name="Reschedule"
                        color="#FFFFFF"
                        action={rescheduleBooking}
                    />
                    <AppointmentButton
                        name="Cancel"
                        color="#A53F2B"
                        action={cancelBookingButton}
                    />
                </View>
                <View>
                    <MessageBox
                        head="Message"
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