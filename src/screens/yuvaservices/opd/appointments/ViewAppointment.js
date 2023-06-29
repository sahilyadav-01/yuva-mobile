import React from 'react';
import {SafeAreaView} from 'react-native';
import { styles} from "../../../styles"
import ViewAppointments from '../../../../modules/appointment/components/viewAppointment';
const ViewAppointment = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <ViewAppointments />
    </SafeAreaView>
  );
};

export default ViewAppointment;