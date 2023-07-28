import {SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/Header';
import {MY_PRESCRIPTIONS} from './constants';
import {PrescriptionContent} from './components/PrescriptionContent';

const MyPrescription = () => {
  return (
    <SafeAreaView style={styles.contentContainerStyle}>
      <Header title={MY_PRESCRIPTIONS} showBackButton={true} hideMenu={true} />
      <PrescriptionContent />
    </SafeAreaView>
  );
};

export default MyPrescription;
