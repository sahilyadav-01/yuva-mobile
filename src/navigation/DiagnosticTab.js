


import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Booking from '../screens/yuvaservices/diagnostics/Booking';

import AvailableBooking from '../screens/yuvaservices/diagnostics/AvailableBooking';
import { styles } from '../screens/styles';
import { AVAILABLE, BOOKING } from '../styles/constants';

const Tab = createMaterialTopTabNavigator();

const DiagnosticsNavigation = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <Tab.Navigator
      style={styles.tabNavigation}
      screenOptions={styles.screenOptions}>
      <Tab.Screen
        name={AVAILABLE}
        component={AvailableBooking}
        options={{
          tabBarLabel: () => (
            <Text style={styles.textColor}>
             {AVAILABLE}
            </Text>
          ),
        }}
      />
      <Tab.Screen options={{
        tabBarLabel: () => (
          <Text style={styles.textColor}>
            {BOOKING} 
          </Text>
        ),
      }} name={BOOKING} component={Booking} />

    </Tab.Navigator>
  );
};

export default DiagnosticsNavigation;
