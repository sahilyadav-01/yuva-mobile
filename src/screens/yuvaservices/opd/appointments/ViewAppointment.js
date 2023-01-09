import React from 'react';
import {View} from 'react-native';
import ViewAppointments from '../../../../modules/opd/appointment/components/ViewAppointments';
const ViewAppointment = () => {

  return (
    <View className="flex mr-2 ml-2 h-[800px]">
     <ViewAppointments/>
    </View>
  );
};

export default ViewAppointment;
