import React from 'react';
import { View} from 'react-native';
import EditAppointments from '../../../../modules/appointment/components/editAppointment';
import { styles } from '../../../styles';

const EditAppointment = () => {
 
  return (
    <View style={styles.homeScreenContainer}>
     <EditAppointments/>
    </View>
  );
};

export default EditAppointment;
