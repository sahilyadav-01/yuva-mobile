import React from 'react';
import {SafeAreaView} from 'react-native';
import EditAppointments from '../../../../modules/appointment/components/editAppointment';
import {styles} from '../../../styles';

const EditAppointment = () => {
  return (
    <SafeAreaView>
      <EditAppointments />
    </SafeAreaView>
  );
};

export default EditAppointment;
