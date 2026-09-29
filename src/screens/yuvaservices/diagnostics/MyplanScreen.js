import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../styles';
import MyPlans from '../../../modules/diagnostic/MyPlans';

const MyPlanScreen = () => {
  return (
    <SafeAreaView style={styles.margin}>
      <MyPlans />
    </SafeAreaView>
  );
};

export default MyPlanScreen;
