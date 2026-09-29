import React from 'react';
import {SafeAreaView} from 'react-native';
import AmbulanceScreen from '../../../modules/ambulanceService';
import {styles} from '../../styles';

const AmbulanceHomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <AmbulanceScreen />
    </SafeAreaView>
  );
};
export default AmbulanceHomeScreen;
