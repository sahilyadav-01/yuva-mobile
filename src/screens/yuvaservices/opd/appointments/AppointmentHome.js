import React from 'react';
import {SafeAreaView} from 'react-native';
import { styles} from "../../../styles"
import Appointment from '../../../../modules/appointment';

const AppointmentHome = ({}) => {


  return (
    <SafeAreaView style={styles.container}>
     <Appointment/>
    </SafeAreaView>
  );
};

export default AppointmentHome;
