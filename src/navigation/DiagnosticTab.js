


import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Booking from '../screens/yuvaservices/diagnostics/Booking';

import AvailableBooking from '../screens/yuvaservices/diagnostics/AvailableBooking';

const Tab = createMaterialTopTabNavigator();

const DiagnosticsNavigation = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <Tab.Navigator
      className="flex mt-[8px]"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, marginTop:0},
        tabBarStyle: { height: 40},
        swipeEnabled: true,
        lazy: false, 
      }}>
       <Tab.Screen name="Available" component={AvailableBooking} /> 
        <Tab.Screen name="Booking" component={Booking} /> 
    </Tab.Navigator>
  );
};

export default DiagnosticsNavigation;
