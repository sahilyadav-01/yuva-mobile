import React from 'react';
import {SafeAreaView} from 'react-native';
import MyPlans from '../../../modules/talkToDoctorMyplans';
import {styles} from '../../styles';

const MyPlansScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyPlans />
    </SafeAreaView>
  );
};

export default MyPlansScreen;
