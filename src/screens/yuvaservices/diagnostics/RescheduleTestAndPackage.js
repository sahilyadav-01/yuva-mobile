import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppointmentButton from '../../../components/AppointmentButton';
import DiagnosticHeader from '../../../components/DiagnosticHeader';
import { useNavigation } from '@react-navigation/core'
import MainHeader from '../../../components/MainHeader';
import { bookedDetailsByIdThunk, rescheduleCancelBookingThunk } from '../../../store/reducers/DiagnosticsSlice';
const RescheduleTestAndPackage = ({ route }) => {
    const { jwt } = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const { bookedDetailsById } = useSelector(state => state.diagnostic)
    const { id } = route.params;
    const navigation = useNavigation()
    useEffect(() => {
        dispatch(bookedDetailsByIdThunk({ jwt, id }));
    }, [])
    const cancelBooking = () => {
        dispatch(rescheduleCancelBookingThunk({ jwt, id, isCancelled: "true", timeSlot: '' })).then(() => { navigation.navigate("Diagnostic") })
    }

    const rescheduleBooking = () => {
        navigation.navigate("BookingTestAndPackage", { bookedDetailsById: { ...bookedDetailsById, flag: true } })
    }

    return (

        <View >
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
                                <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                    About the test
                                </Text>
                                <Text>{bookedDetailsById?.testOrPackageDescription}</Text>
                                <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                    Instructions
                                </Text>
                            </View>
                        }
                        <Text>{bookedDetailsById?.instruction}</Text>
                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                            Appointment {bookedDetailsById?.bookingStatus} - Offline
                        </Text>
                        <Text>{bookedDetailsById?.labAssistantName}</Text>
                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                            {bookedDetailsById?.labName}
                        </Text>
                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                            Location
                        </Text>

                        <Text>{bookedDetailsById?.patientLocation}</Text>
                    </View>
                </View>
                <View className="">
                    <AppointmentButton
                        name="Reschudule"
                        color="#FFFFFF"
                        action={rescheduleBooking}
                    />
                    <AppointmentButton
                        name="Cancel"
                        color="#A53F2B"
                        action={cancelBooking}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default RescheduleTestAndPackage;