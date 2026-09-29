import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import LifestyleTestsAndPackages from '../modules/lifestyle';

const LifestyleTestsAndPackagesScreen = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <LifestyleTestsAndPackages
        enumName={props?.route?.params?.enumName}
        name={props?.route?.params?.name}
      />
    </SafeAreaView>
  );
};

export default LifestyleTestsAndPackagesScreen;
