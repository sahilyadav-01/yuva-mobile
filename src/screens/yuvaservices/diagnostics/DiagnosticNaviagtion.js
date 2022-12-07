


import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import AvailableBookingCard from './AvailableBookingCard';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BookingCard from './BookingCard';

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
      <Tab.Screen name="Available" component={AvailableBookingCard} />
        <Tab.Screen name="Booking" component={BookingCard} /> 
    </Tab.Navigator>
  );
};

export default DiagnosticsNavigation;
