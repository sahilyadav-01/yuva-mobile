import React from 'react';
import { SafeAreaView } from 'react-native';
import Patient from '../../../modules/patient';
import {styles} from '../../styles';

const PatientScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Patient />
    </SafeAreaView>
  )
}

export default PatientScreen;
