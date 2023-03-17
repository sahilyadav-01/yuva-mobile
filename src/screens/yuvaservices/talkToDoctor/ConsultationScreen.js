import React from 'react';
import {SafeAreaView} from 'react-native';
import Consultations from '../../../modules/talkToDoctorConsultations';
import {styles} from '../../styles';

const ConsultationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Consultations />
    </SafeAreaView>
  );
};

export default ConsultationScreen;
