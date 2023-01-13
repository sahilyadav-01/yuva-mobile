import React from 'react';
import { View, Text, TextInput } from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppointmentButton from '../../../../components/AppointmentButton';
import { getDate, getTime, appointmentStatus } from '../../../../utils/utils';
import MessageBox from '../../../../components/MessageBox';
import { useSelector } from "react-redux";
import { useView } from './hooks/useView';
import { CANCEL, CHECK, RESCHEDULE, WAITING } from '../../constant';
import { ORANGE, RED_SHADE, WHITE } from '../../../../styles/colors';
import { styles } from './styles';
const ViewAppointments = () => {
    const {
        id,
        doctorName,
        address,
        status,
        speciality,
        description,
        slot,
        otp,
        hospitalName,
    } = useSelector(state => state.appointment.currentAppointment);
    const cancelMessage = 'Are you sure you want to cancel ?';
    const { goBack, editAppointment,
        checkIn, cancelAppointment, cancelAppointmentMessagBox, cancelFlag } = useView();
    return (
        <View className="flex mr-2 ml-2 h-[800px]">
            <GoBackCross className="mt-4" onPress={goBack} />

            <View className="mx-[10px] mt-[20px]">

                <View className="flex-row justify-between">

                    <View>
                        {status === 'CONFIRMED' ? (
                            <Text className="text-lg font-bold text-[#319B4B]">
                                {appointmentStatus(status)}
                            </Text>
                        ) : (<View> 
                            <Text className="text-lg font-bold text-[#E68D36]">
                            {appointmentStatus(status)}
                            </Text>
                        <Text className="text-x mt-[20px] text-[#E68D36]">{WAITING}</Text>
                        </View>)}

                        <View className="mt-[26px]">
                            <Text className="text-base font-semibold text-[#52608E]">
                                Doctor - {doctorName}
                            </Text>
                            <Text className="text-xs font-medium text-[#52608E] mt-[4px]">
                                {speciality}
                            </Text>
                        </View>
                    </View>


                </View>

                <View className="flex-row justify-between mt-[35px]">
                    <View className="flex-row items-center">
                        <Text className="text-lg text-bold text-[#1D2334] mr-[2px]">
                            {hospitalName}
                        </Text>
                        <Icon name="google-maps" size={18} color="black" />
                    </View>

                    <View className="flex-row items-center">
                        <Icon name="calendar-blank-outline" size={24} color="black" />
                        <View className="ml-[2px]">
                            <Text style={{ fontSize: 12 }} className="">
                                {getDate(slot)}
                            </Text>
                            <Text style={{ fontSize: 10 }}>{getTime(slot)}</Text>
                        </View>
                    </View>
                </View>

                <View  style={styles.description}>
                    <TextInput

                        value={description}
                        multiline={true}
                        editable={false}
                    />
                </View>

                <View className="mt-[25px]">
                    {status === 'CONFIRMED' ? (
                        <AppointmentButton
                            name={CHECK}
                            color={ORANGE}
                            action={checkIn}
                        />) : (
                        <AppointmentButton
                            name={RESCHEDULE}
                            color={WHITE}
                            action={editAppointment}
                        />

                    )}
                    <AppointmentButton
                        name={CANCEL}
                        color={RED_SHADE}
                        action={cancelAppointment}
                    />
                </View>
                <View>
                    <MessageBox
                        head="Message"
                        showDialog={cancelFlag}
                        hideDialog={cancelAppointmentMessagBox}
                        message={cancelMessage}
                    />
                </View>
            </View>
        </View>
    );
};

export default ViewAppointments;
