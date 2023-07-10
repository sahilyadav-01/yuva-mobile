import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './style';

const Maintenance = props => {
  const {maintenanceText} = props;
  const style = styles();
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.maintenanceText}>{maintenanceText}</Text>
    </SafeAreaView>
  );
};

export default Maintenance;
