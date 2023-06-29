import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewAppointments from '../../../../modules/appointment/components/viewAppointment';
import { styles } from '../../../styles';

const ViewAppointment = () => {
  return (

    <SafeAreaView style={styles.homeScreenContainer}>
      <ViewAppointments />
    </SafeAreaView>

  );
};

export default ViewAppointment;
