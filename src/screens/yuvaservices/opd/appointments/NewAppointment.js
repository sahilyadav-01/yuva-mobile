import React from 'react';
import { SafeAreaView} from 'react-native';
import NewAppointments from '../../../../modules/opd/appointment/components/NewAppointments';
import { styles } from '../../../styles';

const NewAppointment = () => {
  
  return (
 <SafeAreaView style={styles.container}>
<NewAppointments/>
 </SafeAreaView>
     
  );
};

export default NewAppointment;
