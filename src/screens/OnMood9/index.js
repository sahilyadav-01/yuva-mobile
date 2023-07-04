import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../styles';
import OnMood9 from '../../modules/onmood9';

const OnMood9Screen = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <OnMood9 />
    </SafeAreaView>
  );
};

export default OnMood9Screen;
