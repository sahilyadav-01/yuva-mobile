import React from 'react';
import {View, Text,  ScrollView} from 'react-native';
import AppointmentCard from '../../../../components/AppointmentCard';
import { styles } from './styles';
import { appointmentHooks } from '../../hooks/appointmentHooks';

const AppointmentScreen = () => {
    const {appointments,
        homeRefresh}=appointmentHooks();
  return (
    <View className="m-[10px]">
      <View className="flex-row items-center justify-between ml-2 mr-2 mt-[10px]">
        <Text className="text-bold  text-xl">Appointments</Text>
      </View>

      <View className=" mt-[10px]" >
        <ScrollView
          bounces={false}
          style={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}>
          {appointments.map(item => {
            return (
              <AppointmentCard
                key={item.id}
                id={item.id}
                doctorName={item.doctorName}
                address={item.address}
                status={item.status}
                speciality={item.speciality}
                description={item.description}
                slot={item.slot}
                otp={item.otp}
                hospitalName={item.hospitalName}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default AppointmentScreen;
