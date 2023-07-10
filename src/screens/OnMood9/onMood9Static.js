import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../styles';
import OnMood9Details from '../../modules/onmood9/components/onMood9Details';

const OnMood9Static = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <OnMood9Details />
    </SafeAreaView>
  );
};

export default OnMood9Static;
