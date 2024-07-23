import {SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/Header';
import {MY_PRESCRIPTIONS} from './constants';
import {PrescriptionContent} from './components/PrescriptionContent';

const MyPrescription = props => {
  const prescriptionId = props?.route?.params?.prescriptionId ?? null;
  const redirect = props?.route?.params?.redirect ?? false;
  const serviceUuid = props?.route?.params?.serviceUuid ?? null;
  return (
    <SafeAreaView style={styles.contentContainerStyle}>
      <Header title={MY_PRESCRIPTIONS} showBackButton={true} hideMenu={true} />
      <PrescriptionContent
        prescriptionId={prescriptionId}
        redirect={redirect}
        serviceUuid={serviceUuid}
      />
    </SafeAreaView>
  );
};

export default MyPrescription;
