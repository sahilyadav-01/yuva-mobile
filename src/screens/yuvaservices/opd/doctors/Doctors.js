import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../styles';
import Doctor from '../../../../modules/doctor';

const DoctorScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Doctor />
    </SafeAreaView>
  );
};

export default DoctorScreen;
