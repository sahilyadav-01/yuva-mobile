import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import AppointmentCard from '../../components/AppointmentCard';
import { styles } from './styles';
import { useAppointment } from './hooks/useAppointment';

const Appointment = () => {
  const { appointments,
    homeRefresh } = useAppointment();
  const renderItem = ({ item, index }) => {
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
  }
  return (
    <View className="m-[10px]">
      <View className=" mt-[10px]" >
        <FlatList
          renderItem={renderItem}
          data={appointments}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Appointment;
