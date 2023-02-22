import React from 'react';
import { View, FlatList } from 'react-native';
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
        memberName={item.memberName}
        relation={item.relation}
        customId={item.customId}
      />
    );
  }
  return (
    <View style={styles.contentContainerStyle}>
      <View >
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
