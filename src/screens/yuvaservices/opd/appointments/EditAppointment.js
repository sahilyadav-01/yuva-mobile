import React from 'react';
import { View} from 'react-native';


import EditAppointments from '../../../../modules/opd/appointment/components/EditAppointments';

const EditAppointment = () => {
 
  return (
    <View className="flex mr-2 ml-2 h-[800px]">
     <EditAppointments/>
    </View>
  );
};

export default EditAppointment;
