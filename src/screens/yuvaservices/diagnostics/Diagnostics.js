import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../styles';
import Diagnostic from '../../../modules/diagnostic';

const Diagnostics = () => {
  return (
    <SafeAreaView style={styles.margin}>
      <Diagnostic />
    </SafeAreaView>
  );
};

export default Diagnostics;
