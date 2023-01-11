import React from 'react';
import {SafeAreaView} from 'react-native';
import { styles} from "../../../styles"
import AppointmentScreen from '../../../../modules/appointment';

const AppointmentHome = ({}) => {


  return (
    <SafeAreaView style={styles.container}>
     <AppointmentScreen/>
    </SafeAreaView>
  );
};

export default AppointmentHome;
