import React from 'react';
import {SafeAreaView} from 'react-native';
import Health from '../../../modules/health';
import {styles} from '../../styles';

const HealthScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Health />
    </SafeAreaView>
  );
};

export default HealthScreen;
