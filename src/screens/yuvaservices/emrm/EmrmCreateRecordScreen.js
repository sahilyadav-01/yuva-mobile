import React from 'react';
import {SafeAreaView} from 'react-native';
import EmrmCreateRecord from '../../../modules/emrm/EmrmCreateRecord';
import {styles} from './styles';

const EmrmCreateRecordScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <EmrmCreateRecord />
    </SafeAreaView>
  );
};

export default EmrmCreateRecordScreen;
