


import React from 'react';
import {  Dimensions, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingScreen from '../screens/yuvaservices/diagnostics/Booking';

import MyPlanScreen from '../screens/yuvaservices/diagnostics/MyplanScreen';
import { styles } from '../screens/styles';
import { MARINER } from '../styles/colors';

const Tab = createMaterialTopTabNavigator();

const DiagnosticsNavigation = () => {
  return (
    <Tab.Navigator
    tabBarOptions= {{   
      indicatorStyle :{
            backgroundColor:MARINER,
            width:40,
            height:3,
            left:(Dimensions.get('window').width/2-50)/2,          
           
      }}}
      style={styles.tabNavigation}
      screenOptions={{
        tabBarItemStyle:styles.verticalLine,
         tabBarLabelStyle:styles.tab,
        swipeEnabled: true,
        lazy: false, 
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "transparent",
          
    }, 
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
