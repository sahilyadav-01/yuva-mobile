import React from 'react';
import {SafeAreaView} from 'react-native';
import EmrmHome from '../../../modules/emrm/EmrmHome';
import {styles} from './styles';

const EmrmHomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <EmrmHome />
    </SafeAreaView>
  );
};

export default EmrmHomeScreen;
