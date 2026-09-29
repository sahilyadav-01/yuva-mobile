import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../styles';
import OnMood9 from '../../modules/onmood9';

const OnMood9Screen = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <OnMood9 onMood9Props={props?.route?.params} />
    </SafeAreaView>
  );
};

export default OnMood9Screen;
