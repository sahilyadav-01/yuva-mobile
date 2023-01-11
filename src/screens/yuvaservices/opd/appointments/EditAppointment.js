import React from 'react';
import { View} from 'react-native';
import EditAppointments from '../../../../modules/appointment/components/editAppointment';

const EditAppointment = () => {
 
  return (
    <View className="flex mr-2 ml-2 h-[800px]">
     <EditAppointments/>
    </View>
  );
};

export default EditAppointment;
