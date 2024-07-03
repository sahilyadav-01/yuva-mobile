import React from 'react';
import {View, FlatList, Text} from 'react-native';
import AppointmentCard from '../../components/AppointmentCard';
import {styles} from './styles';
import {useAppointment} from './hooks/useAppointment';

const Appointment = () => {
  const {appointments} = useAppointment();
  const renderItem = ({item, index}) => {
    return (
      <AppointmentCard
        key={index}
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
  };
  if (appointments?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Appointments</Text>
      </View>
    );
  }
  return (
    <View style={styles.contentContainerStyle}>
      <View>
        <FlatList
          renderItem={renderItem}
          data={appointments}
          keyExtractor={(item, index) => `${index}`}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
    </View>
  );
};

export default Appointment;
