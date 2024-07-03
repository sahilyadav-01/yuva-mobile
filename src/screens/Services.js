import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import Services from '../modules/services';

const ServicesList = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Services services={props?.route?.params?.services} />
    </SafeAreaView>
  );
};

export default ServicesList;
