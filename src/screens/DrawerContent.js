import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import Drawer from '../modules/drawer';

const DrawerContent = props => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Drawer />
    </SafeAreaView>
  );
};

export default DrawerContent;
