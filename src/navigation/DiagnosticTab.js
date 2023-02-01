


import React from 'react';
import {  Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingScreen from '../screens/yuvaservices/diagnostics/Booking';

import MyPlanScreen from '../screens/yuvaservices/diagnostics/MyplanScreen';
import { styles } from '../screens/styles';

const Tab = createMaterialTopTabNavigator();

const DiagnosticsNavigation = () => {


  return (
    <Tab.Navigator
      style={styles.tabNavigation}
      screenOptions={{
        tabBarItemStyle:styles.verticalLine,
         tabBarLabelStyle:styles.tab,
        swipeEnabled: true,
        lazy: false, 
        tabBarStyle: {
          style:styles.barColor
    }
      }}>
      <Tab.Screen
        name='MyPlan'
        component={MyPlanScreen}
        options={{
          tabBarLabel: () => (
            <Text style={styles.textColor}>
            MyPlan
            </Text>
          ),
        }}
      />
      <Tab.Screen options={{
        tabBarLabel: () => (
          <Text style={styles.textColor}>
           Bookings 
          </Text>
        ),
      }} name='Bookings' component={BookingScreen} />

    </Tab.Navigator>
  );
};

export default DiagnosticsNavigation;
