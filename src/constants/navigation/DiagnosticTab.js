import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bookings from '../../modules/diagnostic/Booking';
import MyPlan from '../../modules/diagnostic/MyPlans';
import {styles} from '../../screens/styles';
import {AVAILABLE, BOOKING, MYPLAN} from '../../styles/constants';

const Tab = createMaterialTopTabNavigator();

const DiagnosticsNavigation = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <Tab.Navigator
      style={styles.tabNavigation}
      screenOptions={{
        tabBarLabelStyle: styles.tab,
        tabBarStyle: styles.height,
        swipeEnabled: true,
        lazy: false,
      }}>
      <Tab.Screen
        name={MYPLAN}
        component={MyPlan}
        options={{
          tabBarLabel: () => <Text style={styles.textColor}>{MYPLAN}</Text>,
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => <Text style={styles.textColor}>{BOOKING}</Text>,
        }}
        name={BOOKING}
        component={Bookings}
      />
    </Tab.Navigator>
  );
};

export default DiagnosticsNavigation;
